const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');


class SimpleDb {
  constructor(dirPath) {
    this.dirPath = dirPath;
  }

  getById(id) {
    return fs.readFile(`${this.dirPath}/${id}.json`)
      .then((bufferPromise) => JSON.parse(bufferPromise.toString()))
      .catch((error) => console.error(error));
  }



}


module.exports = SimpleDb;


