/**
 * Created by jianggk on 2017/8/18.
 */
export class  B2iOrder{
  id:number                   ;// number primary key,                                      --订单ID
  type:string                ;// varchar2(10) check(type in ('dwk','mxek')),              --dwk，腾讯大王卡。mxek:梦想E卡
  deviceNumber:string      ;// varchar2(11),                                            --订单号码    d
  certName:string           ;// varchar2(40)，                                           --姓名
  certId:string             ;// varchar2(18),                                            --身份证号码。
  orderRemark:string        ;// varchar2(200),                                           --订单备注
  loginUserId:string       ;// references login_user,                                   --登录工号
  orderTime:Date             ;// date default sysdate,
  status:number               ;// number default  0 check(status in (0,1,2)),              --0：待审核状?
  checkerLoginUserId:string  ;// varchar2(20),                                            --审核人登录IDchecker             ;// varchar2(20),
  checkTime:Date             ;// date,                                                    --审核时间?1：审核处耄
  checkOverTime:Date        ;// date,                                                    --审核完成时间
  checkOverRemark:string       ;// varchar2(200)                                            --处理备注
}
