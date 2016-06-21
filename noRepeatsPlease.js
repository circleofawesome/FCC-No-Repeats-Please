function shuffle(arr){
	var retArr=[];
	var randoms=[];
	for(var i=0;i<arr.length;i++){
		var num=Math.floor((Math.random() * arr.length) + 0);
		while(randoms.includes(num)){
			num=Math.floor((Math.random() * arr.length) + 0);
		}
		randoms.push(num);
	}
	for(var i=0;i<arr.length;i++){
		retArr.push(arr[randoms[i]]);
	}
	return retArr;
}

function factorial(num){
	if((num===0)||(num===1)){
		return 1;
	}
	var fact=1;
	while(true){
		fact*=num;
		num-=1;
		if(num===1){
			break;
		}
	}
	return fact;
}

function permutations(str){
	var retArr=[];
	str=str.split('');
	var count=factorial(str.length);
	while(count>0){
		//count-=1;
		var tempStr=shuffle(str).join('');
		if(retArr.includes(tempStr)===false){
			retArr.push(tempStr);
			count-=1;
		}
	}
	return retArr;
}

permutations('aab');

//******TURN EACH STRING CHARACTER INTO A NUMBER THEN PUT THEM IN AN OBJECT AND THEN SHUFFLE THE OBJECT {1:'a',2:'a',3:'b'}, THEN PUT EACH SHUFFLED OBJECT INTO AN ARRAY
//THAT WILL BE THE PERMUTATIONS OF THE ORIGINAL STRING 