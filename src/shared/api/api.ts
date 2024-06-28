import axios from "axios";
import { USER_DATA_KEY } from "enities/user/model/slice/userSlice";

export const apiInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'authorization': (localStorage.getItem(USER_DATA_KEY)) }
});