export default class ElectionMaker {

    constructor(body, momentInstance) {
        this.body = body;
        this.moment = momentInstance
    }

    formatElectionFields() {
        const dateToClose = this.body.dateToClose;
    
        if (dateToClose && !this.moment(dateToClose).isValid()) {
            return new Error('Date to close election is not valid');
        }
        return {
            dateToClose: this.moment(dateToClose).format("YYYY-MM-DD HH:mm:ss") || null,
            name: this.body.name,
            creator: this.body.creator,
            open: this.body.open,
            emailBallots: this.body.emailBallots,
            anonymous: this.body.anonymous || true,
        }
    }
}