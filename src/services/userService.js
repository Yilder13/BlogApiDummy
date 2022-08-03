import axios from "axios"

export default class UserService {
    getUsers() {
        return axios.get("https://dummyapi.io/data/v1/user?limit=10", {
            headers: {'app-id':'62e89597cc16567313bf9616'}
        });
    }

    getByUserId(id) {
        return axios.get("https://dummyapi.io/data/v1/user/" + id, {
            headers: {'app-id':'62e89597cc16567313bf9616'}
        });
    }
}