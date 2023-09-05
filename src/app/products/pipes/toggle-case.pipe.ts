import { Pipe, PipeTransform } from "@angular/core"

// andres | toggleCase = 'ANDRES'
// ANDRES | toggleCase = 'andres'

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, toUpper: boolean = false): string {

        return (toUpper)
            ? value.toUpperCase()
            : value.toLowerCase();
    }

}