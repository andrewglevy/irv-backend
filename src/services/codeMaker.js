export default class CodeMaker {
    constructor(table, property, len) {
        this.table = table;
        this.property = property;
        this.len = len;
    }

    getTable() { return this.table }
    getProperty() { return this.property }
    getLength() { return this.len }

    makeCode() {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < this.getLength(); i++) {
            code += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return code;
    }

    async isDuplicate(code) {
        const checkData = await this.getTable().findOne({ where: { [this.getProperty()]: [code] } });
        if (checkData) return true;
        return false;
    }

    async addCode() {
        let duplicate, code;
        do {
            code = this.makeCode(this.getLength())
            duplicate = await this.isDuplicate(code);
        } while (duplicate);
        return code;

    }
}