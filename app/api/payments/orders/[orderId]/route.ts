import { NextRequest, NextResponse } from "next/server";
import { GetOrderResponse, ApiResponse } from "@/types";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          error: "Order ID is required",
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
    const response = await fetch(
      `${BACKEND_URL}/api/payments/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to get order",
          code: data.code || "API_ERROR",
          details: data.details,
          timestamp: new Date().toISOString(),
        } as ApiResponse,
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data as GetOrderResponse,
      message: "Order retrieved successfully",
      timestamp: new Date().toISOString(),
    } as ApiResponse<GetOrderResponse>);
  } catch (error: unknown) {
    console.error("Get order API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        code: "INTERNAL_ERROR",
        details: { error: errorMessage },
        timestamp: new Date().toISOString(),
      } as ApiResponse,
      { status: 500 }
    );
  }
}
