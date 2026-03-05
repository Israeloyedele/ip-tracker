import axios from "axios";

const API_KEY: string = process.env.API_KEY;
type Body = { ip: string; }

export default async function getIpDetails(req: Request, res: Response): Promise<Response> {
    if(req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }));
    }

    const { ip } = req.body as unknown as Body;
    try {
        const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
        const response = await axios.get(url);
        console.log(response.data);
        return Response.json({status: "success"});
    }
    catch(err){
        console.log(err);
        return Response.json({status: "error", error: err});
    }
}