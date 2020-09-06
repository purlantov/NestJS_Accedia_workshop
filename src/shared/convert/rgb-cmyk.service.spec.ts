import { RgbCmykService } from "./rgb-cmyk.service";

describe('RgbCmykService', () => {
    let service: RgbCmykService;

    beforeAll(() => {
        service = new RgbCmykService();
    });

    [
        { hexValue: -2, expectedResult: false }, // TODO: shouldn't allow it
        { hexValue: 0, expectedResult: false },
        { hexValue: 1, expectedResult: false },
        { hexValue: 10, expectedResult: false },
        { hexValue: 100, expectedResult: false },
        { hexValue: 120, expectedResult: false },
        { hexValue: 127, expectedResult: false },
        { hexValue: 128, expectedResult: true },
        { hexValue: 129, expectedResult: true },
        { hexValue: 250, expectedResult: true },
        { hexValue: 255, expectedResult: true },
        { hexValue: 256, expectedResult: false }, // TODO: shouldn't allow it
        { hexValue: 300, expectedResult: false }, // TODO: shouldn't allow it
    ].forEach(({ hexValue, expectedResult }) => {
        it(`getComparatorBooleanValue(${hexValue}) should return ${expectedResult}`, () => {

            const result = service.getComparatorBooleanValue(hexValue);
            expect(result).toBe(expectedResult);
        });
    });

    [
        { hexValue: -2, expectedResult: 0 }, // TODO: shouldn't allow it
        { hexValue: 0, expectedResult: 0 },
        { hexValue: 1, expectedResult: 0 },
        { hexValue: 10, expectedResult: 0 },
        { hexValue: 100, expectedResult: 0 },
        { hexValue: 120, expectedResult: 0 },
        { hexValue: 127, expectedResult: 0 },
        { hexValue: 128, expectedResult: 1 },
        { hexValue: 129, expectedResult: 1 },
        { hexValue: 250, expectedResult: 1 },
        { hexValue: 255, expectedResult: 1 },
        { hexValue: 256, expectedResult: 0 }, // TODO: shouldn't allow it
        { hexValue: 300, expectedResult: 0 }, // TODO: shouldn't allow it
    ].forEach(({ hexValue, expectedResult }) => {
        it(`getComparatorNumValue(${hexValue}) should return ${expectedResult}`, () => {

            const result = service.getComparatorNumValue(hexValue);
            expect(result).toBe(expectedResult);
        });
    });
});
