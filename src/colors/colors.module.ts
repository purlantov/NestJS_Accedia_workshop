import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { Module } from '@nestjs/common';
import { Context } from 'src/share/models/context';


@Module({
    controllers: [ColorsController],
    providers: [ColorsService, Context]
})

export class ColorsModule { }