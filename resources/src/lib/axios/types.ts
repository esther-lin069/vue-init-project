import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise } from 'axios';
import type { Router } from 'vue-router';

// 請求參數，使用泛型
export type RequestOptions<T, K> = {
    method: string,
    url: string,
    headers?: Record<string, number>,
    params?: T,
    errorAlert?: boolean,
    responseHandler: (response: AxiosError | AxiosResponse, router: Router) => ApiResponseData<K>,
};

// response handler
export type responseHandler = (response: AxiosError | AxiosResponse, router: Router) => AxiosPromise;

// AxiosResponse data 回傳資料格式
export type ApiResponseData<K> = {
    code: string,
    data: K,
    msg: string,
};

// 前端回傳資料格式
export type ResponseData<K = undefined> = {
    code: string,
    data?: K,
};

// AxiosRequestConfig
export interface RequestConfig extends InternalAxiosRequestConfig {
    errorAlert?: boolean,
    redirectToErrorPage?: boolean,
    responseHandler: responseHandler,
}
