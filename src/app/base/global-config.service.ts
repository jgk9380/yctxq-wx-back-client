import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Message} from "primeng/components/common/api";

@Injectable()
export class GlobalService {

  private  _RestBaseUrl: string;//= "http://127.0.0.1:1274/";
  get RestBaseUrl(): string {
    if(!this._RestBaseUrl) {
      //console.log("------------------ at:" + window.location.hostname);
       return "http://"+window.location.hostname+":8888/";
    }
    console.log("this._RestBaseUrl="+this._RestBaseUrl);
    return this._RestBaseUrl;
  }
  msgs: Message[] = [];
  constructor(public http:Http) {

  }
  getRequestOptions(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'}); //其实不表明 json 也可以, ng 默认好像是 json
    //let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    options.headers.append("Access-Control-Allow-Credentials", "true");
    options.headers.append("Access-Control-Allow-Origin", "*");
    return options;
  }
  showInfoMsg(msg:string,summary:string,severity:string) {
    this.msgs.push({severity:severity, summary:summary, detail:msg});
  }

  getJsonHeade():Headers{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', "application/json");
    return headers;
  }

  getOptionBySql(sql:string):Promise<Option[]>{

    let emp_query_url = this._RestBaseUrl + "option/bySql/" + sql;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', "application/json");
    return this.http.get(emp_query_url, {headers: headers})
      .toPromise().then(response => response.json() as Option[]).catch(this.handleError);
  }

  handleError(error: any):Promise<any> {
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
    console.info("err.msg=" + msg); // log to console instead
    alert("err.msg=" + msg); // log to console instead
    return Promise.reject(false);
  }
}


export  class  Option{
  label:string;
  value:any;
}
