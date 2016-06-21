//takes a string and returns all possible permutations with the letters as an array
function permutation(str){
	var retArr=[];
	str=str.split('');

}

permutation('aab');

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