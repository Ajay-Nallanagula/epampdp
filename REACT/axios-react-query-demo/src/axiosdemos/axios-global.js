
//Global Defaults 
/* 
What are Global defaults ?
You can specify config defaults that will be applied to every request.
Example : 
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
*/

import axios from "axios"

axios.defaults.headers.common["Content-type"] = 'application/json'
axios.defaults.headers.common["Accept-type"] = 'application/json'
axios.defaults.headers.common["XXXXX-YYYYY-ZZZZZZ"] = "Ajay/Nallanagula"

export default axios
