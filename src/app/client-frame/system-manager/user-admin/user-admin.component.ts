import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {GlobalService} from "../../../base/global-config.service";
import {DataTable} from "primeng/components/datatable/datatable";
import {SelectItem} from "primeng/components/common/api";

@Component({
  selector: 'http-client-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class LoginUserAdminComponent implements OnInit {
  luList: LoginUser[];
  filterAble: boolean = false;
  paged: boolean = true;
  selectLoginUser: LoginUser;
  loading: true;
  first: number = 0;
  roleSelectItem: SelectItem[];


  constructor(public http: Http, private gc: GlobalService) {

  }

  ngOnInit() {
    let options = this.gc.getRequestOptions();
    let login_url = this.gc.RestBaseUrl + 'loginUsers';

    this.http.get(login_url, options)
      .toPromise().then(response => {
        this.luList = (response.json().content as LoginUser[]);//return this.ls.dispResult(response, this.router)
        //console.info("luList="+JSON.stringify(this.luList));
        return null;
      }
    ).catch((x: any) => {
      return this.gc.handleError(x);
    });

    this.roleSelectItem=[];
    this.roleSelectItem.push({label:'Select City', value:null});
    this.roleSelectItem.push({label:'Select 1', value:null});
    this.roleSelectItem.push({label:'Select 2', value:null});
    this.roleSelectItem.push({label:'Select 3', value:null});
  }

  toggleFilter() {
    this.filterAble = !this.filterAble;
  }

}

class LoginUser {
  name: string;
  password: string;
  empId: string;
  isValid: boolean;
  employee: Employee;
  userRoles: Role[ ];
}


class Employee {
  id: string;
  name: string;
  tele: string;
  depart: Depart
}


class Role {
  id: number;
  name: string;
  shortDesc: string;
}


class Depart {
  id: number;
  departLevel: string;
  dutierId: string;
  name: string;
  departType: string
}
