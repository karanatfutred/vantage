import { NextRequest, NextResponse } from "next/server";
import {
  CreateRefundRequest,
  CreateRefundResponse,
  ApiResponse,
} from "@/types";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export async function POST(request: NextRequest) {
  try {
    const body: CreateRefundRequest = await request.json();

    // Validate request body
    if (!body.refundAmount || !body.refundId) {
      return NextResponse.json(
        {
          success: false,
          error: "Refund amount and refund ID are required",
          code: "VALIDATION_ERROR",
          timestamp: new Date().toISOString(),
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Get authorization header
    const authorization = request.headers.get("authorization");
    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          error: "Authentication required",
          code: "AUTHENTICATION_ERROR",
          timestamp: new Date().toISOString(),
        } as ApiResponse,
        { status: 401 }
      );
    }

    // Forward request to backend
    const response = await fetch(`${BACKEND_URL}/api/payments/refunds/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to create refund",
          code: data.code || "API_ERROR",
          details: data.details,
          timestamp: new Date().toISOString(),
        } as ApiResponse,
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data as CreateRefundResponse,
      message: "Refund created successfully",
      timestamp: new Date().toISOString(),
    } as ApiResponse<CreateRefundResponse>);
  } catch (error: unknown) {
    console.error("Create refund API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        code: "INTERNAL_ERROR",
        details: {
          error: error instanceof Error ? error.message : String(error),
        },
        timestamp: new Date().toISOString(),
      } as ApiResponse,
      { status: 500 }
    );
  }
}
