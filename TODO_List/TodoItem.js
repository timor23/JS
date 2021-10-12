class TodoItem {
    constructor(subject, details, isActive, startDate, endDate) {
        this._id = this.generateId();
        this._isComplete = false;
        this._subject = subject;
        this._details = details;
        this._isActive = isActive;
        this._startDate = startDate;
        this._endDate = endDate;
    }
    generateId() {
        return Math.floor(Math.random() * 9999) + 1;
    }

    get id() {
        return this._id;
    }
    get subject() {
        return this._subject;
    }

    set subject(value) {
        this._subject = value;
    }

    get details() {
        return this._details;
    }

    set details(value) {
        this._details = value;
    }

    get isActive() {
        return this._isActive;
    }

    set isActive(value) {
        this._isActive = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

    get isComplete() {
        return this._isComplete;
    }

    set isComplete(value) {
        this._isComplete = value;
    }
}
// module.exports = TodoItem;