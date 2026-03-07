import axios from "axios";

const API_KEY: string = process.env.API_KEY;


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const ip = searchParams.get("ip")
        || request.headers.get("x-forwarded-for")?.split(",")[0];

    const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;

    try{
        const res = await axios.get(url)
        return Response.json( res.data, { status : res.status })}
    catch(err){
       if(err.response) {
           return Response.json(err.response.data, { status : err.response.data.code })
       }
       else if(err.request){
           return Response.json(err.request.data, { status : err.request.status });
       }
       else {
           return Response.json({message: "Network Error"}, { status : 500 });
       }
    }

}