export { default } from 'next-auth/middleware'

export const config = {
    matcher: ["/booked", '/booking', '/profile'], // ต้อง login ก่อน
}