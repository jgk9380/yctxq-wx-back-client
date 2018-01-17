import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longToDate'
})
export class LongToDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("longToDate:"+value)
   let date=new Date(value);
   let reult=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
   return reult;
   // return new Date(value).toDateString();
  }

}
