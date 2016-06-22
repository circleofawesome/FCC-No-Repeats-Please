
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

====================

//takes array of indexes and factorial of that length and returns all possible shuffled combinations in an array

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
//shuffledIndex([0,1,2],6);

======================

//takes an array and another array and checks whether second array is inside the first array
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

//myIncludes([[1,2,3],[4,5,6],[7,8,9]],[6,4,5]);

======================

//takes a string and returns all possible character combinations as a 2d array

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
		retArr.push(tempArr);
	}
	return retArr;
}

permutations('aab');