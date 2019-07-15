// Practice: Function Arguments
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, punctuation, times) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // If the current word's place (not index) in the array is evenly divisible by 3, add an exclamation point to the end of the word and then concatenate it to `buildMeUp`.
        if ((i + 1) % 3 === 0) {
            buildMeUp += ` ${theWordArray[i]}${punctuation.repeat(times)}`
        }
            // Otherwise, just concatenate the word itself.
            else {
            buildMeUp += ` ${theWordArray[i]}`
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
}
addExcitement(sentence, "*", 4)
