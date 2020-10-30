export default class ElectionMaker {
    constructor(body, momentInstance) {
        this.body = body;
        this.moment = momentInstance
    }

    closingDate(date) {
        if (!date) return null;
        const dateIsValid = this.moment(date).isValid();
        if (dateIsValid) return this.moment(date).format('YYYY-MM-DD HH:mm:ss');
        throw new Error('Date is not valid');
    }

    formatElectionFields() {
        const dateToClose = this.closingDate(this.body.dateToClose);
        console.log(dateToClose);

        const electionObj = {
            dateToClose,
            name: this.body.name,
            creator: this.body.creator,
            open: this.body.open,
            emailBallots: this.body.emailBallots,
            anonymous: this.body.anonymous || true,
        }
        return electionObj;
    }
}