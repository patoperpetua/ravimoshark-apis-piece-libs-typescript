/**
 * Ravimoshark Piece API
 * This is an API to interact with Ravimoshark piece database. # Introduction This API allow to create, modify and delete pieces and products (cards, details and key points). # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Categories } from '../model/categories';
import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { InlineResponse200 } from '../model/inlineResponse200';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CategoriesService {

    protected basePath = 'http://localhost:8003';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get all categories.
     * Get all categories.
     * @param skip number of item to skip
     * @param limit max records to return
     * @param orderBy order by property.
     * @param filterBy filter data.
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param metadata If metadata is needed (for pagination controls)
     * @param category category of desired product.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategories(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, category?: Categories, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public getCategories(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, category?: Categories, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public getCategories(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, category?: Categories, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public getCategories(skip?: number, limit?: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, category?: Categories, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (filterBy !== undefined && filterBy !== null) {
            queryParameters = queryParameters.set('filterBy', <any>filterBy);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters = queryParameters.set('deleted', <any>deleted);
        }
        if (metadata !== undefined && metadata !== null) {
            queryParameters = queryParameters.set('metadata', <any>metadata);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/categories`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
