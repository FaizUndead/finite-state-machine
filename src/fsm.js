class FSM {
    constructor(config) {

        this.events = [];
        var t;
        this.history = [];
        this.passStates = [];
        this.config = config;


        this.state = config.initial;





        for (var key in config.states) {
            t = config.states[key].transitions;
            for (var item in t) {
                this.events.push(item);
            }
        }
        this.history.push(this.state);
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {

        if (!this.config.states[state]) {
            throw new Error('No state');
        }

    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {

    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {

    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this.history.length <= 1) {
            return false;
        } else {
            this.passStates.push(this.history.pop());
            this.state = this.history[this.history.length - 1];
            this._redo = true;
            return true;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {

    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.history = [];
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
