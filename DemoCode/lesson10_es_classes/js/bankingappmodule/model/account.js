/**
 * account.js
 */
export class Account {
    constructor(cxcaccountNo, customerName, balance) {
        this.paccountNo = cxcaccountNo;
        this.customerName = customerName;
        this.balance = balance;
    }
    // getAccountNo() { return this.accountNo; }

    get paccountNo() { return this._accountNo; }
    get customerName() { return this._customerName; }
    get balance() { return this._balance; }

    set paccountNo(value) {
        this._accountNo = value;
    }
    set customerName(value) {
        this._customerName = value;
    }
    set balance(value) {
        this._balance = value;
    }
}