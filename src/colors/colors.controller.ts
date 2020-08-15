import { ColorsService } from './colors.service';
import { Controller, Get, Param, ParseIntPipe, Post, Body, ParseUUIDPipe } from "@nestjs/common";
import { ColorEntity } from 'src/colors/color.entity';
import { v4 as uuid } from 'uuid';

@Controller('colors')
export class ColorsController {
    constructor(private readonly dbService: ColorsService) { }

    @Get()
    getAll(): ColorEntity[] {
        return this.dbService.getAll();
    }

    @Get(':color')
    find(@Param('color') color: string): ColorEntity {
        return this.dbService.find(x => x.name == color);
    }

    @Get(':id')
    public getById(@Param('id', ParseUUIDPipe) id: string): ColorEntity {
        return this.dbService.get(id);
    }

    @Post()
    addColor(@Body() color: ColorEntity): number {
        return this.dbService.add(color);
    }
}