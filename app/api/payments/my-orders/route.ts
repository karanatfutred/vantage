import { NextRequest, NextResponse } from "next/server";
import { GetMyOrdersResponse, ApiResponse } from "@/types";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";
    const status = searchParams.get("status");

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

    // Build query string
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...(status && { status }),
    });

    // Forward request to backend
    const response = await fetch(
      `${BACKEND_URL}/api/payments/my-orders?${queryParams}`,
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
          error: data.message || "Failed to get orders",
          code: data.code || "API_ERROR",
          details: data.details,
          timestamp: new Date().toISOString(),
        } as ApiResponse,
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data as GetMyOrdersResponse,
      message: "Orders retrieved successfully",
      timestamp: new Date().toISOString(),
    } as ApiResponse<GetMyOrdersResponse>);
  } catch (error: unknown) {
    console.error("Get my orders API error:", error);

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
