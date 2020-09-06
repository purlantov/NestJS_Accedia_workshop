import { Injectable } from '@nestjs/common';

@Injectable()
export class RgbCmykService {
    rgbMax = 255;
    
    getComparatorBooleanValue(hexValue: number): boolean {
        return !!this.getComparatorNumValue(hexValue);
    }

    getComparatorNumValue(hexValue: number): number {
        return Math.round(hexValue / this.rgbMax);
    }

    calculateBlack(redPrime: number, greenPrime: number, bluePrime: number): number {
        return 1 - Math.max(redPrime, greenPrime, bluePrime);
    }

    calculateCyan(redPrime: number, black: number): number {
        return (1 - redPrime - black) / (1 - black);
    }

    calculateMagenta(greenPrime: number, black: number): number {
        return (1 - greenPrime - black) / (1 - black);
    }

    calculateYellow(bluePrime: number, black: number): number {
        return (1 - bluePrime - black) / (1 - black);
    }
}
