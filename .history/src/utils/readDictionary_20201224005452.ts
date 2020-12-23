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

import dictionary from '../words_dictionary.json';

export const readDictionary = () => {
   console.log(dictionary);

}
