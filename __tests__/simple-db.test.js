const fs = require('fs/promises');
const path = require('path');
const SimpleDb = require('../lib/simple-db');
// const crypto = require('crypto');


const { CI, HOME } = process.env;
const BASE_DIR = CI ? HOME : __dirname;
const TEST_DIR = path.join(BASE_DIR, 'test-dir');

describe('simple database', () => {

  beforeEach(async () => {
    await fs.rm(TEST_DIR, { force: true, recursive: true });
    await fs.mkdir(TEST_DIR, { recursive: true });
  });

  it('GET:id returns object by id', async () => {
    const newDb = new SimpleDb(BASE_DIR);
    const file = await newDb.getById('12345');
    expect(file).toEqual({ 'name': 'Sebastian' });
  });
  // it('POST should save an object', async () => {
  //   const newObj = {
  //     name: 'stupid',
  //     age: 'always'
  //   };
  //   const newDb = new SimpleDb(TEST_DIR);
    
  // });

});
