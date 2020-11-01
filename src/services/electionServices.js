import CodeMaker from './codeMaker';
import { codeProperty, codeLength } from '../lib/props';
import { v4 as uuid } from 'uuid';

export const electionFactory = async (tableInstance, body) => {
    const electionFields = formatElectionFields(body)
    const codeMaker = new CodeMaker(tableInstance, codeProperty[tableInstance.name], codeLength);
    electionFields[codeProperty[tableInstance.name]] = await codeMaker.addCode();
    electionFields.id = uuid();
    return await tableInstance.build(electionFields);
}

export const formatElectionFields = (body) => {
    const electionObj = {
        dateToClose: body.dateToClose,
        name: body.name,
        creator: body.creator,
        open: body.open,
        emailBallots: body.emailBallots,
        anonymous: body.anonymous || true,
    }
    return electionObj;
}