
export class HttpClient {

    async get(url: string){
        const query = await fetch(url);
        const data = await query.json();
        return { data }
    }

    async post(url: string, data: object){
       
       const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then(res => res.json());

        return response;
    }


    async delete(url: string){
        const response = await fetch(url, {
           method: 'DELETE',
        }).then(res => res.json());

        return response;
    }


    async patch(url: string, data: object){

        const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then(res => res.json());

        return response;
    }


}