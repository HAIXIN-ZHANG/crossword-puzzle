export const readDictionary = (): Array<string> => {
    const rf = require("fs");
    rf.readFileSync('../../public/words.txt', 'utf-8', (err: any, data: any) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
    });
    console.log("READ FILE SYNC END");
}

