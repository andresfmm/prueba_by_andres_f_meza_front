import { HttpClient } from "../api/HttpClient";
import { url_base, url_jsonplaceholder } from "../enviroments/env";


export class CrudUsersService {
    
    constructor( private http: HttpClient ){}

    async createUserService(custom_url:string, { name, email, city, name_company }:any) {
        const  data  = await this.http.post(`${url_base()}/${custom_url}`, { name, email, city, name_company });
        return data;
    }


    async getListUsers(custom_url:string) {
        const { data } = await this.http.get(`${url_base()}/${custom_url}`);
        return data;
    }
    

    async deleteUser(custom_url:string) {
        const  data  = await this.http.delete(`${url_base()}/${custom_url}`);
        return data;
    }
    

    async restoreUser(custom_url:string, { id }:any) {
        const  data  = await this.http.patch(`${url_base()}/${custom_url}`, { id });
        return data;
    }
}