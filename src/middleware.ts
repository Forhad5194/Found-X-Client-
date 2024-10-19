import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AuthRouter = ["/login", '/register']

type Role = keyof typeof  roleBaseRouter;

const roleBaseRouter = {
    USER: [/^\/profile/],
    ADMIN: [/^\/admin/],
}

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;



    // const user = {
    //     name: 'hossain',
    //     token: "xc nvcvxlc l;m;m;mxm cvlnm ",
    //     role: "USER",
    // }
    const user = undefined;


    if (!user) {
        if (AuthRouter.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (user?.role && roleBaseRouter[user?.role as Role]) {
        const routes = roleBaseRouter[user?.role as Role];
       
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
          }
    }
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile', '/admin','/login', '/register'],
}