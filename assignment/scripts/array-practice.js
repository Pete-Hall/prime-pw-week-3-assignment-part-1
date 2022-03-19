console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoodsArray = ['corn dog', 'grilled cheese', 'BBQ', 'pad see ew']

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('Favorite foods are:', favoriteFoodsArray);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of favorite foods:', favoriteFoodsArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is:', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is:', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal (using array length) is:', animalArray[animalArray.length-1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoodsArray.push('apples');
console.log('Added a new food to the end:', favoriteFoodsArray);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFavoriteFood = favoriteFoodsArray.pop();
console.log('Removed the last food:', removedFavoriteFood);
console.log('The updated favorite foods are:', favoriteFoodsArray);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoodsArray.unshift('bread');
console.log(`Added new food to the beginning: ${favoriteFoodsArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
let removedFirstFavoriteFood = favoriteFoodsArray.shift();
console.log('Removed the first food:', removedFirstFavoriteFood);
console.log('The updated favorite foods are:', favoriteFoodsArray);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favoriteFoodsArray[1] = 'watermelon';
console.log('Updated the 2nd food:', favoriteFoodsArray);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
let abcFavoriteFoods = favoriteFoodsArray.sort(); // to put the array in alphabetical order, referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//console.log('Favorite foods in ABC order:', abcFavoriteFoods); 
let reversedABCFavoriteFoods = abcFavoriteFoods.reverse(); // to reverse the order of the array, referenced https://www.w3schools.com/jsref/jsref_sort.asp and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse 
console.log('Favorite foods in reverse ABC order: ', reversedABCFavoriteFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
let stringFavoriteFoods = favoriteFoodsArray.join(' and '); // referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log('String of favorite foods:', stringFavoriteFoods); // This showed the reversed alphabetical version of the string...I'm guessing some built in methods make permanent changes to the values of the favoriteFoodsArray? Because when I try initializing the foods array using const, the same thing happens. UPDATE - talked to Matt, he explained some differences between 'pass by reference' languages like JavaScript vs 'pass by value'. In this case, the specific memory of the foods array is being altered as we call the different built-in methods that change arrays (like .sort and .reverse). 

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
let foodsAnimals = favoriteFoodsArray.concat(animalArray); // referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
console.log('Foods and dogs in an array:', foodsAnimals);