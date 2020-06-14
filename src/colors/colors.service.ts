import { ColorEntity } from './color.entity';
import { Injectable } from "@nestjs/common";
import fs = require('fs');
import { Entities } from 'src/share/models/entity';

@Injectable()
export class ColorsService {
    dbRecords: Entities;

    constructor() {
        const jsonString = fs.readFileSync('src/db/database.json', 'UTF8');
        this.dbRecords = JSON.parse(jsonString);
    }

    add(entity: ColorEntity): number {
        return this.dbRecords.colors.push(entity);
    }

    getAll(): ColorEntity[] {
        return this.dbRecords.colors;
    }

    get(index: number): ColorEntity {
        return this.dbRecords.colors[index];
    }

    find(filter: (value: ColorEntity, index?: number, Array?: ColorEntity[]) => boolean) {
        return this.dbRecords.colors.find(filter);
    }

    update(): any {
        return 1;
    }

    delete(): any {
        return 1;
    }
}