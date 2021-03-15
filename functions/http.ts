import axios from 'axios';

class HTTP_HEADERS {
    "Content-Type"?: string;
    "Authorization"?: string;
    constructor(data: any = {}) {
        this["Content-Type"] = data.ContentType || "application/json";
        if (data.Authorization) {
            this.Authorization = `Bearer ${data.Authorization}`;
        }
    }
}


export const HTTP = (DATA: any) => {
    return axios({
        method: DATA.Method,
        url: DATA.Url,
        data: DATA.Data,
        headers: new HTTP_HEADERS(DATA.Headers)
    })
}

export const HTTP_ERROR = (error: any, isAuth?: any) => {
    let err;
    if (error.response.request) {
        switch(parseInt(error.response.request.status)) {
            case 401:
                err = "The details entered are incorrect." 
                break;
            case 400:
                err = error.response.data.Message || "Bad request. 400."
                break;
            case 500:
                err = error.response.data.Message || "An unexpected error occurred. 500."
                break;
            default:
                err = error.response.data.Message || "An unexpected error occurred."
                break;
        }
    } else {
        err = "An unexpected error occurred."
    }
    return err;
}