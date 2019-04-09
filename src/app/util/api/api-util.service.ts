import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiUtilService {
    constructor(
        private http: HttpClient
    ) {
    }

    /**
     * 暴露给外部的方法-get请求
     * @param url
     * @param params
     */
    public get(url, params?): Observable<any> {
        return this.requestMethod(url, 'get', params);
    }

    /**
     * 暴露给外部的方法-post请求
     * @param url
     * @param params
     */
    public post(url, params?): Observable<any> {
        return this.requestMethod(url, 'post', params);
    }

    /**
     * 发送请求
     * @param url
     * @param method
     * @param params
     */
    private requestMethod(url, method, params?) {
        let resultObs = null;

        // 当参数为空的时候就过滤掉，不传递给接口
        if (params) {
            for (const field of Object.keys(params)) {
                if (params[field] === '' || params[field] === null) {
                    delete params[field];
                }
            }
        }
        switch (method) {
            case 'get':
                // 在header中加入token
                resultObs = this.http.get(url, {
                    // responseType: 'json',
                    params: params,
                }).pipe(

                );
                break;
            case 'post':
                resultObs = this.http.post(url, params).pipe(

                );
                break;
        }
        return resultObs;
    }

}
