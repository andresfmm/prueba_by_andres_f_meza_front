import { HttpClient } from "../api/HttpClient";
import { url_jsonplaceholder } from "../enviroments/env";




export class PlaceHolderService {
    
    constructor( private http: HttpClient ){}

    async saveJsonPlaceholder() {
        const { data } = await this.http.get(url_jsonplaceholder());
        return data;
    }
}