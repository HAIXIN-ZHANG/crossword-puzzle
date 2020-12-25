export const generateTilesArray = (): Array<string> => {
    let result: Array<string> = [];
    // To generate 100 tiles (can change n for generating different num of tiles)
    const tilesNum: number = 100;
	for(let i: number = 0; i < tilesNum; i++){
		//random generate 0-25 num
   		let ranNum: number = Math.ceil(Math.random() * 25);
		//lower case 'a' in ASCII is 97, a~z in ASCII table is 65 + 0~25;
    	result.push(String.fromCharCode(97+ranNum));
	};
	return result;
};