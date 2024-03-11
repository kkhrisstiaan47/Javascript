function manufacture(gifts, materials) {
	let makeable = [];
	let canYou = false;
	
	gifts.forEach(a => {
		for (let b of a){
			canYou = materials.search(b) >= 0 ? true : false;
			if(!canYou){
				break;
			}
		}
		if(canYou){
			makeable.push(a);
		}
	});
	return makeable;
}
