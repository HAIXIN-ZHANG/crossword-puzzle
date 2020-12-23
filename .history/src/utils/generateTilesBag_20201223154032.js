const generateTilesBag = () => {
    let result = [];
    // To generate 100 tiles (can change n for generating different num of tiles)
    const tilesNum  = 100;

	for(let i = 0; i< tilesNum; i++){
		//random generate 0-25 num
   		let ranNum = Math.ceil(Math.random() * 25);
		//大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
		//然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
    	result.push(String.fromCharCode(65+ranNum));
	}
	return result.join('');
}

export default generateTilesBag;