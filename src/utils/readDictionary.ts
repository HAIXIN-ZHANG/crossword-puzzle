import dictionary from '../words_dictionary.json';
//read dictionary json file from local catalog
export const readDictionary = () => {
    // Because this dictionary contain over 380,000 object items,
    // for enhance react performance, need to reduce useless data, only left key values are enough for this project.
    const parsedDate: Array<string> = Object.keys(dictionary);
    return parsedDate;
};
