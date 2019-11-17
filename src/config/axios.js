import axios from 'axios';
import settings from './settings';

let base_url = axios.defaults.baseURL = settings.API_URL;
let Content_Header = axios.defaults.headers.common['Content-type'] = `application/json`;
let Content_Accept = axios.defaults.headers.common['Accept'] = `application/json`;

export function setAccessToken(access_token) {
    axios.defaults.headers.common['Content-type'] = `application/x-www-form-urlencoded`;
    axios.defaults.headers.common['Accept'] = `application/json`;
    axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}
}
export {
    base_url,
    Content_Header,
    Content_Accept,
};

