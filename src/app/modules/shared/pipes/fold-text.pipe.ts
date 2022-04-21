import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "foldText",
})
export class FoldTextPipe implements PipeTransform {

  transform(value: string, maxLength: number = 30): string {
    if (value.length > maxLength) {
      return value.slice(0, maxLength - 3) + "...";
    }
    return value;
  }

}
