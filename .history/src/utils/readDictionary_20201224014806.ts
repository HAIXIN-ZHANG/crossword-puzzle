// import { isEmpty } from 'lodash';
// import fs-react from 'fs-react';

// export const readDictionary = (): Array<string> | any => {
//     let dictionaryData: string[] = [];
//     rf.readFileSync('../../public/words.txt', 'utf-8', (err: any, data: any) => {
//         if (err) {
//           console.error(err)
//           return
//         }
//         console.log(data)
//         dictionaryData = data;
//     });
//     console.log("READ FILE SYNC END");
//     if (!isEmpty(dictionaryData)) {
//         return dictionaryData;
//     }
// }

import { words } from 'lodash';
import dictionary from '../words_dictionary.json';

export const readDictionary = () => {
    const parsedDate = Object.keys(dictionary);
    parsedDate.filter(
        word => word.length = 1
    );
    return parsedDate;
}