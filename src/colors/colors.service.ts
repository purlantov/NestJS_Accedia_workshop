import { ColorEntity, Code } from './color.entity';
import { Injectable } from '@nestjs/common';
import { Context } from '../shared/models/context';
import { ConverterService } from '../shared/convert';

@Injectable()
export class ColorsService {

    constructor(private dbRecords: Context, private converterService: ConverterService) { }

    add(entity: ColorEntity): number {
        return this.dbRecords.colors.push(entity);
    }

    getAll(): ColorEntity[] {
        console.log(this.dbRecords.dbRecords);
        return [...this.dbRecords.colors];
    }

    get(id: string): ColorEntity {
        return this.dbRecords.colors.find(x => x.id === id);
    }

    find(filter: (value: ColorEntity, index?: number, Array?: ColorEntity[]) => boolean): ColorEntity {
        return this.dbRecords.colors.find(filter);
    }

    update(color: ColorEntity) {
        let colorEntity = this.dbRecords.colors.find(x => x.id == color.id);
        colorEntity.category = color.category || colorEntity.category;
        colorEntity.name = color.name || colorEntity.type;
        colorEntity.code = {
            hex: color.code.hex || colorEntity.code.hex,
            rgba: color.code.rgba || colorEntity.code.rgba
        };
    }

    delete(colorId: string): any {
        const index = this.dbRecords.colors.findIndex(x => x.id === colorId)
        return this.dbRecords.colors.splice(index, 1);
    }

    convert(red: number, green: number, blue: number): number[] {
        return this.converterService.convertRgbToCmyk(red, green, blue,);
    }
}