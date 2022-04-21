import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(value: number): number {
    const time = value / 60;
    return Math.floor(time);
  }

}
