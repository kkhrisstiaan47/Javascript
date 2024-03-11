function findFirstRepeated(gifts) {
	let winner = gifts.length;
	let finded;

	for(let i = 0;i < gifts.length; i++){
		let idrp = gifts.indexOf(gifts[i],(i + 1));
		if (idrp > 0){
			winner = idrp < winner ? idrp : winner;
			finded = true;
		}
	}

	if (finded){
		return gifts[winner];
	} else {
		return -1;
	}
}
