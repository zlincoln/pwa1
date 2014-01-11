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

				//PUT FUNCTION HERE

		console.log(fullName('James', 'Bond'));

		//--------------------------------------------------------
		console.log("3. word count");
		var ipsum = "this is test text that is being used as input to a function"

				//PUT FUNCTION HERE

		console.log(wordCount(ipsum));

		//--------------------------------------------------------
		console.log("4. sentence char count");

				//PUT FUNCTION HERE

		console.log(charCount(ipsum));

		//--------------------------------------------------------
		console.log("5. how many vowels in a word");

				//PUT FUNCTION HERE

		console.log(vowelsInWord('JavaScript'));

		//--------------------------------------------------------
		console.log("6. find number and create an array of even or odd numbers");

				//PUT FUNCTION HERE

		console.log(findNum([31,22,4,67,83,6,5,4]));
		console.log(findNum([31,22,4,67,83,6,5,4], false));

})();