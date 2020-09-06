import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { RgbCmykService } from './rgb-cmyk.service';

@Module({
    providers: [ConverterService, RgbCmykService],
})
export class ConvertModule { }


