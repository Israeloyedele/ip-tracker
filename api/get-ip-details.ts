import axios from "axios";

const API_KEY: string = process.env.API_KEY;
type Body = {
    ip: string;
}

export default async function getIpDetails(req: Request, res: Response) {
    if(req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }));
    }

    const { ip } = req.body as unknown as Body;
    try {
        const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
        axios.get(url).then((response) => {console.log(response)})
        return new Response(JSON.stringify({success: true}));
    }
    catch(err){
        console.log(err);
        return new Response(JSON.stringify({success: false}));
    }
}