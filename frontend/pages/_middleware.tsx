// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  // Setting cookies on the response

  const response = NextResponse.next();

  return response;
}
