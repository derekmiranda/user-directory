import nock from 'nock';
import * as actions from './actions';

const readFilePromise = new Promise((resolve, reject) => {
  readFile(`${__dirname}/sample_data.json`, (err, data) => {
    err && console.error(err);
    const json = JSON.parse(data.toString());
    resolve(json);
  })
})

beforeAll(done => {
  readFilePromise
    .then(json => fetchedData = json)
    .then(done);
});

describe('fetchUsers', () => {
  nock('https://randomuser.me')
    .get(`/api/?results=${NUM_USERS}&exc=login,nat,registered,id&noinfo`)
    .reply(200, fetchedData);
})