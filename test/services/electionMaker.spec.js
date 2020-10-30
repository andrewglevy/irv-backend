import ElectionMaker from '../../src/services/electionMaker.service';
import moment from 'moment';

describe('ElectionMaker', () => {
    const requestBody = {};
    beforeEach(() => {
        requestBody.name = 'Vote for your local dog catcher';
        requestBody.creator = 'Zeb Towne';   
    });
    describe('formatClosingDate()', () => {
        it('should return null if the date param is falsy', () => {
            const expectedResult = null;
            const electionMaker = new ElectionMaker(requestBody, moment);
            const result = electionMaker.closingDate(undefined);
            expect(result).toEqual(expectedResult);
        })
    });
});
