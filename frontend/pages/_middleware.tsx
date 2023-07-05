// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  // Setting cookies on the response
  const token = request.cookies['erp_access_token'];
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  //const admin_token = localStorage.get;

  // if (!token && pathname !== '/auth/login/') {
  //   url.pathname = '/auth/login/';
  //   return NextResponse.redirect(url);
  // }

  // if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
  //   url.pathname = '/auth/login';
  //   return NextResponse.redirect(url);
  // }

  // if (!token) {
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }

  // if (
  //   token &&
  //   (request.nextUrl.pathname.startsWith("/auth") ||
  //     request.nextUrl.pathname === "/")
  // ) {
  //   url.pathname = "/offers/promo/list";
  //   return NextResponse.redirect(url);
  // }

  return response;
}
