export const readDictionary = (): Array<string> => {
    const rf = require("fs");
    const data = rf.readFileSync("test","utf-8");
    console.log(data);
    console.log("READ FILE SYNC END");
}

