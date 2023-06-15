const { v4: uuidv4 } = require('uuid');


class InputValue{
  constructor(name = 'no-name'){
    this.id = uuidv4();//identificador único
    this.name = name;
    this.votes = 0;
  }
}

module.exports = InputValue;