import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
// {{ xxx | timestamp:x }}
// x:日期格式 默认:'YYYY.MM.DD HH:mm'
// 例:{{163543486648 | timestamp:'YYYY-MM-DD'}} => '2018-08-32'

@Pipe({
    name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

    transform(timestamp: any, format: string = 'YYYY-MM-DD HH:mm') {
        if (isNaN(Number.parseInt(timestamp)) || Number.parseInt(timestamp) < 0) {
            return '-';
        } else {
            return moment(Number.parseInt(timestamp)).format(format);
        }
    }
}
