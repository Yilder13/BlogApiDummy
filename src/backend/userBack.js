import axios from "axios"

export default class UserBack {
    getUsers() {
        return axios.get("https://dummyapi.io/data/v1/user?limit=20", {
            headers: {'app-id':'62e89597cc16567313bf9616'}
        });
    }

    getByUserId(id) {
        return axios.get("https://dummyapi.io/data/v1/user/" + id, {
            headers: {'app-id':'62e89597cc16567313bf9616'}
        });
    }
}