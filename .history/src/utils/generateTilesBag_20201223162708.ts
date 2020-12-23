const generateTilesBag = (): void => {
    let result = [];
    // To generate 100 tiles (can change n for generating different num of tiles)
    const tilesNum  = 100;

	for(let i = 0; i < tilesNum; i++){
		//random generate 0-25 num
   		let ranNum = Math.ceil(Math.random() * 25);
		//lower case 'a' in ASCII is 97, a~z in ASCII table is 65 + 0~25;
    	result.push(String.fromCharCode(97+ranNum));
	}
	return result;
}

export default generateTilesBag;