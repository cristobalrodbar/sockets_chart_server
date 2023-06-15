const Band = require("./input_value");


class InputValues{
  constructor() {
    this.inputValues = [];
  }

  addInputValue(inputValue = new InputValue()) {
    this.inputValues.push(inputValue);
  }

  getInputValues() {
    return this.inputValues;
  }

  deleteInputValue( id = '' ) {
      this.inputValues = this.inputValues.filter( inputValue => inputValue.id !== id );
      return this.inputValues;
  }

  voteInputValue( id = '' ) {

    this.bands = this.inputValues.map( inputValue => {

        if ( inputValue.id === id ) {
          inputValue.votes++;
            return inputValue;
        } else {
            return inputValue;
        }
    });
  }
}

module.exports = InputValues;
