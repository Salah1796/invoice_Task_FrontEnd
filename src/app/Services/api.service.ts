import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
	constructor(
		private http: HttpClient
	) { }
	private setHeaders(): HttpHeaders {
		let headersConfig = {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + "ss"
		};
		return new HttpHeaders(headersConfig);
	}
	private setHeadersWithImage(): HttpHeaders {
		let headersConfig = {
			'Accept': 'application/json',
		};
		return new HttpHeaders(headersConfig);
	}
	get(path: string, params?: HttpParams) {
		return this.http.get(`${environment.api_url}${path}`);
	}
	post(path: string, body: Object = {}) {
		return this.http.post(`${environment.api_url}${path}`, body, { headers: this.setHeaders() });
	}
}
