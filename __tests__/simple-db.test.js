const fs = require('fs/promises');
const path = require('path');
const SimpleDb = require('../lib/simple-db');


const { CI, HOME } = process.env;
const BASE_DIR = CI ? HOME : __dirname;
const TEST_DIR = path.join(BASE_DIR, 'test-dir');

describe('simple database', () => {

  beforeEach(async () => {
    await fs.rm(TEST_DIR, { force: true, recursive: true });
    await fs.mkdir(TEST_DIR, { recursive: true });
  });

  it('GET:id returns object by id', async () => {
    const newDb = new SimpleDb(TEST_DIR);
    newDb.getById('12345');
    
  });

});
