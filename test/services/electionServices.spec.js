import { electionFactory, formatElectionFields } from '../../src/services/electionServices';
import db from '../../src/models/index';

describe('Election services', () => {
    beforeAll(async done => {
        await db.sequelize.sync({ force: true })
        done();
    });
    afterAll(done => {
        db.sequelize.close();
        done();
    });
    describe('formatElectionFields()', () => {
        const name = 'Mayoral election for Dinosaur, CO';
        const creator = 'Stegosaurus Jones';
        const input = {
            name,
            creator,
            emailBallots: false,
            irrelevantData: 'The mitochondria is the powerhouse of the cell!'
        }
        it('should correctly create a new object based on the object it receives', () => {
            const electionObject = formatElectionFields(input);
            const expectedResult = {
                name,
                creator,
                emailBallots: false,
                open: undefined,
                anonymous: true,
            }
            expect(electionObject).toStrictEqual(expectedResult)
        })
    });
    describe('electionFactory()', () => {
        const reqBody = {
            name: 'Presidental Election',
            creator: 'James Madison',
            open: false,
            emailBallots: false,
            anonymous: true,
        }
        it('should create an instance of the election model with the correct properties', async done => {
            const result = await electionFactory(db.elections, reqBody);
            const expectedResult = {
                name: 'Presidental Election',
                creator: 'James Madison',
                open: false,
                emailBallots: false,
                anonymous: true,
            }
            expect(result.dataValues).toMatchObject(expectedResult);
            done();
        });
    });
});