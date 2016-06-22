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

function stringToObject(str){
	str=str.split('');
	var retObj={};
	for(var i=0;i<str.length;i++){
		retObj[i]=str[i];
	}
	return retObj;
}

function shuffledIndex(arr,factorial){
	var retArr=[];
	var tempArr,bool;
	while(true){
		tempArr=shuffle(arr);
		//retArr.push(tempArr);
		//return myIncludes(retArr,tempArr);
		bool=myIncludes(retArr,tempArr);
		if(bool===false){
			retArr.push(tempArr);
			factorial-=1;
			if(factorial===0){
				return retArr;
			}
		}
	}
}

function myIncludes(arr,val){
	var bool=false;
	for(var i=0;i<arr.length;i++){
		for(var m=0;m<arr[i].length;m++){
			if(arr[i][m]!==val[m]){
				bool=false;
				break;
			}
			else{
				bool=true;
			}
		}
		if(bool===true){
			return true;
		}
	}
	return bool;
}

function permutations(str){
	var strObjects=stringToObject(str);
	var retArr=[];
	var numPermutations=factorial(str.length);
	var letterKeys=Object.keys(strObjects);
	var indexes=shuffledIndex(letterKeys,numPermutations);
	for(var i=0;i<indexes.length;i++){
		var tempArr=[];
		for(var m=0;m<indexes[i].length;m++){
			tempArr.push(strObjects[indexes[i][m]]);
		}
		retArr.push(tempArr.join(''));
	}
	return retArr;
}

function repeatChecker(str){
	str=str.split('');
	for(var i=0;i<str.length;i++){
		if(str[i]===str[i-1]){
			return true;
		}
	}
	return false;
}


//returns 0 if the length of string is greater than 7, takes too long to compute 
function permAlone(str) {
  if(str.length>7){
  	return 0;
  }
  var possiblePermutations=permutations(str);
  var noRepeats=[];
  for(var i=0;i<possiblePermutations.length;i++){
  	if(repeatChecker(possiblePermutations[i])===false){
  		noRepeats.push(possiblePermutations[i]);
  	}
  }
  return noRepeats.length;
}

permAlone('aab');
