import axios from "axios"

export default class PostBack {
    getPosts() {
        return axios.get("https://dummyapi.io/data/v1/post?limit=10", {
            headers: {'app-id':'62e89597cc16567313bf9616'}
        });
    }
}