import { ColorsService } from "./colors.service";
import { ColorEntity, Code } from "./color.entity";
import { v4 as uuid } from 'uuid';
import { Context } from '../share/models/context';

const id: string = uuid();

describe('ColorsService', () => {
    let db: Context;
    let service: ColorsService;

    beforeEach(() => {

        db = {} as Context;
        db.colors = [];
        db.colors.push(
            {
                id: uuid(),
                isActive: true,
                name: "black",
                category: "hue",
                type: "primary",
                code: {
                    rgba: [
                        255,
                        255,
                        255,
                        1
                    ],
                    hex: "#000"
                }
            }
        );

        service = new ColorsService(db);
    });

    afterEach(() => {
        db.colors = [];
    })

    describe('add', () => {
        it('should add new entity to dbContext.colors', () => {
            const arrayIndex = service.add(
                {
                    id: id,
                    category: 'hue',
                    name: 'white',
                    code: { hex: '#fff', rgba: [255, 255, 255, 1] },
                    isActive: true,
                    type: 'primary'
                } as ColorEntity);

            expect(arrayIndex).toBe(2);
            expect(db.colors.length).toBe(2);
            expect(db.colors[db.colors.length - 1].id).toBe(id);
        });
    });

    describe('getAll', () => {
        it('should return array of all colors', () => {
            const result = service.getAll();
            expect(result.length).toBe(1);
            expect(db.colors[0].name).toBe('black')
        });
    });

    describe('get', () => {
        it('should return selected by id color', () => {
            expect(service.get(db.colors[0].id).name).toBe('black');
        });
    });

    describe('find', () => {
        it('should return filtered color', () => {
            expect(service.find(x => x.name === 'black').name).toBe('black');
        });
    });

    describe('update', () => {
        it('should update "name" and "code" properties of the entity', () => {

            let colorEntity = db.colors[0];
            colorEntity.name = 'grey';
            colorEntity.code = {
                rgba: [
                    128,
                    128,
                    128,
                    1
                ],
                hex: "#808080"
            } as Code;

            service.update(colorEntity);

            expect(db.colors[0].name).toBe('grey');
        });
    });

    describe('update', () => {
        it('should update "code.rgba" properties of the entity', () => {
            const colorDto: ColorEntity = {
                id: db.colors[0].id,
                isActive: true,
                category: "hue",
                type: "primary",
                name: 'grey',
                code: {
                    rgba: [
                        128,
                        128,
                        128,
                        1
                    ]
                } as Code
            };

            service.update(colorDto);


            expect(db.colors[0].code.rgba[1]).toBe(128);
            expect(db.colors[0].code.hex).toBeDefined();
        });
    });

    describe('update', () => {
        it('should not update "code" properties of the entity', () => {

            let colorEntity = db.colors[0];
            colorEntity.name = 'grey';

            service.update(colorEntity);

            expect(db.colors[0].code.rgba[1]).toBe(255);
        });
    });

    describe('update', () => {
        it('should not update "code" properties of the entity', () => {

            let colorEntity = db.colors[0];
            colorEntity.name = 'grey';

            service.update(colorEntity);

            const expectedCodeObj: Code = {
                rgba: [
                    255,
                    255,
                    255,
                    1
                ],
                hex: "#000"
            };

            expect(db.colors[0].code).toMatchObject(expectedCodeObj);
        });
    });

    describe('delete', () => {
        it('should delete the entity', () => {
            const colorId = db.colors[0].id;
            const result = service.delete(colorId);
            console.log(result);
            expect(db.colors.length).toBe(0);
        });
    });

});