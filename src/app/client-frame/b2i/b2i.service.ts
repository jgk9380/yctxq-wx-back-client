import {Injectable} from "@angular/core";
import {B2iOrder} from "./B2iOrder";
import {Http} from "@angular/http";
import {GlobalService} from "../../base/global-config.service";
/**
 * Created by jianggk on 2017/8/21.
 */

@Injectable()
export class B2iService {
  b2iArray: B2iOrder[];
  currentOrder: B2iOrder;
  checkingOrder:number;
  uncheckedOrder:number;

  constructor(private http: Http, private gc: GlobalService) {

  }

  getUncheckOrder(): Promise<B2iOrder[]> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/getUnCheckedOverOrder';
    return this.http.get(login_url, options)
      .toPromise().then(response => response.json() as B2iOrder[])
      .catch((x: any) => this.gc.handleError(x));
  }

  getMyOrder(): Promise<B2iOrder[]> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/getMyOrder';
    return this.http.get(login_url, options)
      .toPromise().then(response => response.json() as B2iOrder[])
      .catch((x: any) => this.gc.handleError(x));
  }

  addOrder(type:string,certName:string,certId:string,remark:string): Promise<B2iOrder> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/addOrder';
    let body=JSON.stringify({type:type,certName:certName,certId:certId,orderRemark:remark})
    console.log("addOrder body="+body+"type="+type);
    return this.http.post(login_url,body, options)
      .toPromise().then(response => response.json() as B2iOrder)
      .catch((x: any) => this.gc.handleError(x));
  }

  getCheckedOrder(): Promise<B2iOrder[]> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/getCheckedOverOrder';
    return this.http.get(login_url, options)
      .toPromise().then(response => response.json() as B2iOrder[])
      .catch((x: any) => this.gc.handleError(x));
  }

  getUncheckOrderCount(): Promise<any> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/count';
    return this.http.get(login_url, options)
      .toPromise().then(response => response.json())
      .catch((x: any) => this.gc.handleError(x));
  }

  init() {
    if (!this.b2iArray)
      this.getUncheckOrder().then(x => {
        this.b2iArray = x;
      });

    this.getUncheckOrderCount().then(x => {
      this.checkingOrder = x.checkingOrder;
      this.uncheckedOrder = x.uncheckedOrder;
    });

  }

  checkOrder(id: number): Promise<B2iOrder> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/checkOrder/' + id;
    return this.http.patch(login_url, null, options)
      .toPromise().then(response => {
        let returnOrder = response.json() as B2iOrder;
        for (let i = 0; i < this.b2iArray.length; i++) {
          if (this.b2iArray[i].id == returnOrder.id) {
            this.b2iArray[i] = returnOrder;
          }
        }
        return returnOrder;
      })
      .catch((x: any) => this.gc.handleError(x));
  }

  checkOverOrder(id: number, checkOverRemark: string): Promise<B2iOrder> {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'bti/checkOverOrder/' + id;
    let body = JSON.stringify({checkOverRemark: checkOverRemark});
    return this.http.patch(login_url, body, options)
      .toPromise().then(response => {
        let returnOrder = <B2iOrder>response.json()  ;
        for (let i = 0; i < this.b2iArray.length; i++) {
          if (this.b2iArray[i].id == returnOrder.id) {
            this.b2iArray[i] = returnOrder;
          }
        }
        return returnOrder;
      }) .catch((x: any) => this.gc.handleError(x));
  }
}
