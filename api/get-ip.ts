export function GET(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ??
        "unknown";

    return Response.json({ ip });
}