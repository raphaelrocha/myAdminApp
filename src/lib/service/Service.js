import * as axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const Service = class Service{
    request = async ({
                         url,
                         method,
                         body: data = {},
                         query: params = {},
                         headers = config.headers,
                     }) => {
        const options = {
            headers: {
                Authorization: "",
                ...headers,
            },
            data,
            method,
            params,
            url,
        };

        console.log('oiiii',options);

        return axios
            .request(options)
            .then(response => {
                const successLog = {
                    status: response.status,
                    response: response.data,
                };

                console.log(successLog);

                return response.data;
            })
            .catch(error => {
                const status = error.response
                    ? error.response.status
                    : 408;

                const errorData = {
                    title: 'Erro',
                    detail: 'detalhe do erro',
                    extraData: error.response ? error.response.data : {},
                    legacyRequest: options,
                    status,
                };

                const errorLog = {
                    status,
                    error: errorData,
                };

                console.log(errorLog);

                throw errorData;
            });
    };

    post = (url, { body, query, headers } = {}) =>
        this.request({ ...url, method: 'post', body, query, headers });

    put = (url, { body, query, headers } = {}) =>
        this.request({ ...url, method: 'put', body, query, headers });

    patch = (url, { body, query, headers } = {}) =>
        this.request({
            ...url,
            method: 'patch',
            body,
            query,
            headers,
        });

    get = (url, { body, query, urlPagination, headers } = {}) =>
        this.request({
            ...url,
            method: 'get',
            body,
            query,
            urlPagination,
            headers,
        });

    delete = (url, { body, query, headers } = {}) =>
        this.request({
            ...url,
            method: 'delete',
            body,
            query,
            headers,
        });
}

export default Service;