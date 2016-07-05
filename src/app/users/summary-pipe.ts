import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "summary"})
export class SummaryPipe implements PipeTransform {

    transform(value: string, args: string[]){
        //if we have args and args has an element
        //we parse that element to an integer and return it
        //otherwise we use 50
        var limit = (args && args[0]) ? parseInt(args[0]) : 10;

        if (value)
            return value.substring(0, limit) + "...";
    }
}