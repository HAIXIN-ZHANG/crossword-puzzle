import dictionary from '../words_dictionary.json';

export const readDictionary = () => {
    const parsedDate = Object.keys(dictionary);
    return parsedDate;
}
