import axios from "axios";

const API_KEY: string = process.env.API_KEY;
type Body = { ip: string; }

export async function POST(req: Request): Promise<Response> {
    if(req.method !== "POST") {
        console.log(req);
        return new Response(JSON.stringify({ error: "Method Not Allowed" }));
    }
    const { ip } = req.body as unknown as Body;
    try {
        const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
        const response = await axios.get(url);
        console.log(response);
        return Response.json(response);
    }
    catch(err){
        console.log(err);
    }
}