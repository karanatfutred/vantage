import { NextRequest, NextResponse } from "next/server";
import {
  CheckActiveOrdersRequest,
  CheckActiveOrdersResponse,
  ApiResponse,
} from "@/types";
import {
  createErrorResponse,
  createSuccessResponse,
  validateRequiredFields,
  logRequest,
  logResponse,
  logError,
  ErrorCodes,
  ValidationPatterns,
} from "@/lib/api-utils";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export async function POST(request: NextRequest) {
  try {
    const body: CheckActiveOrdersRequest = await request.json();

    logRequest("POST", "/api/payments/orders/check-active", body);

    // Validate request body
    const validationErrors = validateRequiredFields(
      body,
      ValidationPatterns.getPricing
    );
    if (validationErrors.length > 0) {
      const errorResponse = createErrorResponse(
        validationErrors.join(", "),
        ErrorCodes.VALIDATION_ERROR,
        "Validation failed"
      );
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get authorization header
    const authorization = request.headers.get("authorization");
    if (!authorization) {
      const errorResponse = createErrorResponse(
        "Authentication required",
        ErrorCodes.AUTHENTICATION_ERROR,
        "Authentication required"
      );
      return NextResponse.json(errorResponse, { status: 401 });
    }

    // Forward request to backend
    const response = await fetch(
      `${BACKEND_URL}/api/payments/orders/check-active`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorResponse = createErrorResponse(
        data.message || "Failed to check active orders",
        data.code || ErrorCodes.API_ERROR,
        "Failed to check active orders",
        data.details
      );
      return NextResponse.json(errorResponse, { status: response.status });
    }

    const successResponse = createSuccessResponse(
      data.data as CheckActiveOrdersResponse,
      "Active orders checked successfully"
    );
    logResponse(200, "Active orders checked successfully");
    return NextResponse.json(
      successResponse as ApiResponse<CheckActiveOrdersResponse>
    );
  } catch (error: unknown) {
    logError(error, "check active orders");

    const errorResponse = createErrorResponse(
      error,
      ErrorCodes.INTERNAL_ERROR,
      "Internal server error"
    );
    return NextResponse.json(errorResponse as ApiResponse, { status: 500 });
  }
}
