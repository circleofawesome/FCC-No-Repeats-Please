//takes a string and returns all possible permutations with the letters as an array
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

//permutation('aab');

===================

//takes an array and returns it shuffled 

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

//shuffle([1,2,3,4,5]);

//shuffle([7,2,3]);

==================

//takes a number and returns it's factorial

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

//factorial(7);

==================

//takes string and turns it into an object with each key(a number) representing each character of the string 

function stringToObject(str){
	str=str.split('');
	var retObj={};
	for(var i=0;i<str.length;i++){
		retObj[i]=str[i];
	}
	return retObj;
}

//stringToObject('aab');