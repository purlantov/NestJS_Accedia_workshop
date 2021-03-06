import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { Module } from '@nestjs/common';
import { Context } from 'src/shared/models/context';
import { ConvertModule } from 'src/shared/convert/convert.module';


@Module({
    controllers: [ColorsController],
    providers: [ColorsService, Context],
})

export class ColorsModule { }