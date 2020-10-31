import { formatElectionFields } from '../../src/services/electionUtils';

describe('Election services', () => {
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
                dateToClose: undefined,
                open: undefined,
                anonymous: true,
            }
            expect(electionObject).toMatchObject(expectedResult)
        })
    })
});
