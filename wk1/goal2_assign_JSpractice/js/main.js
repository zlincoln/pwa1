// self-executing function
(function(){

		console.log('------ Goal2: Assignment: JavaScript Practice ----------');

		console.log("1. avg of an array of numbers");
		var avgNumbers = function(arr){
			var sum = 0;
			for(var i = 0; i < arr.length; i++){
				sum += arr[i];
			}
			return sum/arr.length;
		};

		console.log('avg number = ', avgNumbers([1,2,3,4,5]));

		//--------------------------------------------------------
		console.log("2. concat first and last name");

		function fullName(firstname, lastname){
			return firstname+" "+lastname;
		}

		console.log(fullName('James', 'Bond'));

		//--------------------------------------------------------
		console.log("3. word count");
		var ipsum = "this is test text that is being used as input to a function"

		function wordCount(string){
			string2array = string.split(' ');
			return string2array.length;
		}

		console.log(wordCount(ipsum));

		//--------------------------------------------------------
		console.log("4. sentence char count");

		function charCount(string){
			string2array = string.split('');
			return string2array.length;
		}

		console.log(charCount(ipsum));

		//--------------------------------------------------------
		console.log("5. how many vowels in a word");

		function vowelsInWord(string){
			var count = 0;
			count += string.match(/a/gi);
			count += string.match(/e/gi);
			count += string.match(/i/gi);
			count += string.match(/o/gi);
			count += string.match(/u/gi);
			return count;
		}

		console.log(vowelsInWord('JavaScript'));

		//--------------------------------------------------------
		console.log("6. find number and create an array of even or odd numbers");

		function findNum(arr, bool){
			var output_even = (typeof bool === 'undefined') ? true : bool;
			var even_array = [],
					odd_array = [];
			for(var i = 0; i < arr.length; i++){
				if(arr[i] % 2 == 0){
					even_array.push(arr[i]);
				}else{
					odd_array.push(arr[i]);
				}
			}
			return (output_even) ? even_array : odd_array;
		}

		console.log(findNum([31,22,4,67,83,6,5,4]));
		console.log(findNum([31,22,4,67,83,6,5,4], false));

})();