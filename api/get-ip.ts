import axios from "axios";

const API_KEY: string = process.env.API_KEY;


export async function GET(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ??
        "Unknown";


    const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;

    try {
        const res = await axios.get(url)

        console.log(res.data)

        return Response.json(res.data);
    } catch (error) {
        return Response.json({error: error.message});
    }

}