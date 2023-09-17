'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const Users = new URL('./pages/dashboard', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === './pages/dashboard' || 
          request.nextUrl.pathname === '/pages/alterar' || request.nextUrl.pathname === '/pages/registro'
        ) {
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(Users);
        }
    }

    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alterar', '/pages/registro']
};

