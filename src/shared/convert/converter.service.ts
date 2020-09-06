import { Injectable } from "@nestjs/common";
import { RgbCmykService } from "./rgb-cmyk.service";

@Injectable()
export class ConverterService {
    constructor(private rgbCmykService: RgbCmykService) { }

    convertRgbToCmyk(red: number, green: number, blue: number): number[] {
        const redPrime = this.rgbCmykService.getComparatorNumValue(red);
        const greenPrime = this.rgbCmykService.getComparatorNumValue(green);
        const bluePrime = this.rgbCmykService.getComparatorNumValue(blue);

        const black = this.rgbCmykService.calculateBlack(redPrime, greenPrime, bluePrime);
        const cyan = this.rgbCmykService.calculateCyan(redPrime, black);
        const magenta = this.rgbCmykService.calculateMagenta(greenPrime, black);
        const yellow = this.rgbCmykService.calculateYellow(bluePrime, black);

        return [cyan, magenta, yellow, black];
    }
}
