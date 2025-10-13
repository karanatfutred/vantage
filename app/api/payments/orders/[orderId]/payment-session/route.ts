import { NextRequest, NextResponse } from "next/server";
import { CreatePaymentSessionResponse, ApiResponse } from "@/types";
import {
  createErrorResponse,
  createSuccessResponse,
  logRequest,
  logResponse,
  logError,
  ErrorCodes,
} from "@/lib/api-utils";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;

    logRequest("POST", `/api/payments/orders/${orderId}/payment-session`);

    if (!orderId) {
      const errorResponse = createErrorResponse(
        "Order ID is required",
        ErrorCodes.VALIDATION_ERROR,
        "Order ID is required"
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
      `${BACKEND_URL}/api/payments/orders/${orderId}/payment-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorResponse = createErrorResponse(
        data.message || "Failed to create payment session",
        data.code || ErrorCodes.API_ERROR,
        "Failed to create payment session",
        data.details
      );
      return NextResponse.json(errorResponse, { status: response.status });
    }

    const successResponse = createSuccessResponse(
      data.data as CreatePaymentSessionResponse,
      "Payment session created successfully"
    );
    logResponse(200, "Payment session created successfully");
    return NextResponse.json(
      successResponse as ApiResponse<CreatePaymentSessionResponse>
    );
  } catch (error: unknown) {
    logError(error, "create payment session");

    const errorResponse = createErrorResponse(
      error,
      ErrorCodes.INTERNAL_ERROR,
      "Internal server error"
    );
    return NextResponse.json(errorResponse as ApiResponse, { status: 500 });
  }
}
