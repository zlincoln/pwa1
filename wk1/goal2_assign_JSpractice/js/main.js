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
			return string.length;
		}

		console.log(charCount(ipsum));

		//--------------------------------------------------------
		console.log("5. how many vowels in a word");

		function vowelsInWord(string){
			return string.match(/[aeiou]/gi).length;
		}

		console.log(vowelsInWord('JavaScript'));

		//--------------------------------------------------------
		console.log("6. find number and create an array of even or odd numbers");

		function findNum(arr, bool){
			var output_even = (typeof bool === 'undefined') ? false : bool;
			var array = [];
			for(var i = 0; i < arr.length; i++){
				if(output_even){
					if(arr[i] % 2 == 0){
						array.push(arr[i]);
					}
				}else{
					if(arr[i] % 2 != 0){
						array.push(arr[i]);
					}
				}
			}
			return array;
		}

		console.log(findNum([31,22,4,67,83,6,5,4]));
		console.log(findNum([31,22,4,67,83,6,5,4], false));

})();