
export const cookieOptions = {
    httpOnly: true,
    secure: false,
    // secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: 1000 * 60 * 60, // 5 minutes
}