import { readFile } from 'fs';

export const createReadFilePromise = (path) => (
  new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      err && console.error(err);
      const json = JSON.parse(data.toString());
      resolve(json);
    })
  })
)