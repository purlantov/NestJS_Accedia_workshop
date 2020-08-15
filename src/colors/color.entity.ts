import { EntityOptions } from "src/share/models/entity-options.entity";

export class ColorEntity extends EntityOptions {
    category: string;
    type: string;
    code: Code;
}

export interface Code {
    rgba: number[];
    hex: string;
}
