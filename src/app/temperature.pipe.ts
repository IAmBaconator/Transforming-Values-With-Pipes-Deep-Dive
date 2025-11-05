import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {
    transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
        // First argument (required) to accept string or number to convert to number.
        let val: number;

        if(typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }
        // Second argument (required) accepts either 'cel' or 'fah' to determine the temperature type.
        // Third argument (optional) accepts either 'cel' or 'fah' to convert arg1 to arg3 tempurater type.
        let outputTemp: number;

        if(inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;
        }
        // Adds the appropriate temperature symbol after the converted number.
        let symbol: '°C' | '°F';

        if (!outputType) {
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        //const outputTemp = val * (9 / 5) + 32;

        return `${outputTemp} ${symbol}`;
    }
}