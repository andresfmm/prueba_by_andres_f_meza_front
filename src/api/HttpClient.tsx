
export class HttpClient {

    async get(url: string){
        const query = await fetch(url);
        const data = await query.json();
        return { data }
    }
}