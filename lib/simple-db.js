const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto-js');


class SimpleDb {
  constructor(dirPath) {
    this.dirPath = dirPath;
  }

  getById(id) {
    console.log(id);
  }

}


module.exports = SimpleDb;


