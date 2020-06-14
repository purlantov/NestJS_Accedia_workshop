import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { Module } from "@nestjs/common";


@Module({
    controllers: [ColorsController],
    providers: [ColorsService]
})

export class ColorsModule { }