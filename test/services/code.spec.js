import Code from '../../src/services/code.service';
import db from '../../src/models/index';

const votersTable = db.voters;

describe('CodeService', () => {
    beforeAll(async done => {
        await db.sequelize.sync({ force: true })
        done();
    });

    afterAll(async done => {
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
            done();
        });
        it('should return true if the code is a duplicate', async done => {
            const code = new Code(votersTable, 'voterCode');
            const result = await code.isDuplicate('QUERTY');
            expect(result).toBe(true);
            done();
        });
        it('should return false if the code is not a duplicate', async done => {
            const code = new Code(votersTable, 'voterCode');
            const result = await code.isDuplicate('ASDFGH');
            expect(result).toBe(true);
            done();
        });
    });
    describe('makeCode', () => {
        it('should generate a random letter code of the length specified', () => {
            const code = new Code();
            const sixLetterCode = code.makeCode(6);
            const allCharsLetters = () => {
                for (let char of sixLetterCode) {
                    if(!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)) return false;
                }
                return true;
            }
            expect(sixLetterCode.length).toEqual(6)
            expect(allCharsLetters()).toBe(true);
        });
    })
});
