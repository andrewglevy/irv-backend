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