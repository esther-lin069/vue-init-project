import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios';
import type { Router } from 'vue-router';
// import { useCookies } from '@vueuse/integrations/useCookies';
import type { RequestOptions, RequestConfig, ApiResponseData } from './types';

const instanceAxios = axios.create();

function createAxiosInstance(router: Router): void {
    // response 攔截
    instanceAxios.interceptors.response.use((response: AxiosResponse) => {
        const { responseHandler } = response.config as RequestConfig;
        const responseData = responseHandler(response, router);
        return responseData;
    }, (error: AxiosError | Error) => {
        if (axios.isAxiosError(error)) {
            // Access to config, request, and response
            const { responseHandler } = error.config as RequestConfig;
            const responseData = responseHandler(error, router);

            if (error.response) {
                return responseData;
            }

            // Just a stock error
            return error.toString();
        }

        return error.toString();
    });
}

function ajax<T, K>({
    method = '',
    url = '',
    params,
    headers,
    errorAlert = true,
    responseHandler,
}: RequestOptions<T, K>): Promise<ApiResponseData<K>> {
    // const cookies = useCookies(['cookie']);

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'If-Modified-Since': 0,
            // session: cookies.get('token') || '',
            ...headers,
        },
        timeout: headers?.timeout || 20000,
        errorAlert,
        responseHandler,
    };

    switch (method) {
        case 'post':
            return instanceAxios.post(url, params, axiosConfig);
        case 'delete':
            return instanceAxios.delete(url, { params, ...axiosConfig });
        case 'put':
            return instanceAxios.put(url, params, axiosConfig);
        case 'patch':
            return instanceAxios.patch(url, params, axiosConfig);
        case 'get':
            return instanceAxios.get(url, { params, ...axiosConfig });
        default:
            return instanceAxios.get(url, {
                params, ...axiosConfig,
            });
    }
}

export {
    createAxiosInstance,
    ajax,
};
