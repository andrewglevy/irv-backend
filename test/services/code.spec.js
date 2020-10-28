import Code from '../../src/services/code.service';
import db from '../../src/models/index';

const votersTable = db.voters;
const codeInstance = new Code(votersTable, 'voterCode', 6)

describe('Code service', () => {
    beforeAll(async done => {
        await db.sequelize.sync({ force: true })
        done();
    });

    afterAll(done => {
        db.sequelize.close();
        done();
    });

    describe('isDuplicate()', () => {
        beforeAll(async done => {
            await votersTable.create({
                name: 'George',
                email: 'george@example.com',
                voterCode: 'QWERTY'
            });
            await votersTable.create({
                name: 'Paul',
                email: 'paul@example.com',
                voterCode: 'YTREWQ',
            })
            done();
        });
        it('should return true if the code is a duplicate', async done => {
            const result = await codeInstance.isDuplicate('QWERTY');
            expect(result).toBe(true);
            done();
        });
        it('should return false if the code is not a duplicate', async done => {
            const result = await codeInstance.isDuplicate('ASDFGH');
            expect(result).toBe(false);
            done();
        });
    });
    describe('makeCode', () => {
        it('should generate a random letter code of the length specified', () => {
            const sixLetterCode = codeInstance.makeCode();
            const allCharsLetters = () => {
                for (let char of sixLetterCode) {
                    if (!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char.toUpperCase())) return false;
                }
                return true;
            }

            expect(sixLetterCode.length).toBe(codeInstance.getLength());
            expect(allCharsLetters()).toBe(true);
        });
    });
    describe('addCode()', () => {
        it('should return a code that is not already in this.table', async done => {
            const codeResult = await codeInstance.addCode();
            const checkResult = await votersTable.findOne({where: { voterCode: codeResult }});
            expect(checkResult).toBeFalsy();
            done();
        });
    });
});
