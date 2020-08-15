import { ColorEntity } from "src/colors/color.entity";
import { EntityOptions } from "./entity-options.entity";
import * as fs from 'fs';
import { Injectable } from "@nestjs/common";

@Injectable()
export class Context {
    dbRecords: [];

    constructor() {
        const jsonString = fs.readFileSync('src/db/database.json', 'UTF8');
        this.dbRecords = JSON.parse(jsonString);
    }

    colors: ColorEntity[];
    clients: EntityOptions[];
}
