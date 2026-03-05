export function GET(request: Request) : Response {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ??
        "Unknown";
    return Response.json({ ip });
}