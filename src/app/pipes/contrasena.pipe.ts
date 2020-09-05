import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {

    let value2 = value.split('');

    if (active) {
    value2 = value2.map( con => {
      return con.replace(con, '*');
    });
    }else {
      return value;
    }
    return value2.join('');
  }

}
