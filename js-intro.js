// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

var mantra = "Be the dev "

// 1a. Write the code that returns 'B' from mantra.

    var bobbyBaratheon = mantra.charAt([0])
    console.log(bobbyBaratheon)

// 1b. Write the code that determines if there is an 'x' in mantra.
    
    var theXFile = mantra.toLowerCase().includes('x')
    console.log(theXFile)
    

// 1c. Write the code that determines if there is a 'v' in mantra.

    var vForVenData = mantra.toLowerCase().includes('v')
    console.log(vForVenData)

// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.

    var givenString = " Friday, August second, two-thousand-nineteen"
    
    function anyLettersForMe(letterIsHere) {
        if (givenString.includes(letterIsHere)) {
            return "Includes the letter you are looking for."
        } else {
            return "Does not include the letter you are looking for, consider capitalization as well."
        } 
    }
    
    console.log(anyLettersForMe("G"))
// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

    function longerBoiOrGurl() {
        if (myDog.length > myCat.length) {
            return myDog + " is a longer boi (or gurl)."
        } else {
            return myCat + " is a long boi (or gurl)."
        }
    }
    console.log(longerBoiOrGurl())

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

    function superArrayDeluxe3000() {
        var theSuperArrayDeluxe3000 = []
        
        theSuperArrayDeluxe3000[0] = myDog
        theSuperArrayDeluxe3000[1] = myCat
        
        return theSuperArrayDeluxe3000
    } 
    console.log(superArrayDeluxe3000())

// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.

    function superArrayDeluxe4000() {
        
        // The Super Array Deluxe 4000 now gets rid of those pesky capital letters! Who needs em? 
        var theSuperArrayDeluxe4000 = []
        
        theSuperArrayDeluxe4000[0] = myDog.toLowerCase()
        theSuperArrayDeluxe4000[1] = myCat.toLowerCase()
        
        return theSuperArrayDeluxe4000
    }
    console.log(superArrayDeluxe4000())


// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

    function eachLearningLetter() {
        for(let i = 0; i < myMessage.length; i++){
            return myMessage.split().join()
        }
    }
    console.log(eachLearningLetter())

// 4b. Stretch: Write the code that logs each letter of the message using a while loop.
    function whileEachLearningLetter() {
        let i = 0;
        while (i < myMessage.length){
            i++
            return myMessage.split().join()
            
        }
    }
    console.log(whileEachLearningLetter())
// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().
    


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

function disemVowel(noVowels) {
    return testString.replace(/[aeiou]/gi, '')
}

console.log(disemVowel())

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ----------------------------------------------
// Consider the following variable:

var toonimals = [    {name: "Itchy", animal: "mouse"}, 
                     {name: "Stimpy", animal: "cat"}, 
                     {name: "Daffy", animal: "duck"}, 
                     {name: "Scratchy", animal: "cat"}, 
                     {name: "Ren", animal: "dog"},  
                     {name: "Felix", animal: "cat"}
                ]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
function meowzOnly(cats){
    
    let newArr = []
    for (let i = 0; i < cats.length; i++) {
        if (cats[i].animal === "cat") {
            newArr.push(cats[i])
        }
        
    }
    return newArr
}
console.log(meowzOnly(toonimals))

//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function noCats(noncats){
    
    let newerArr = []
    for (let i = 0; i < noncats.length; i++) {
        if (noncats[i].animal != "cat") {
            newerArr.push(noncats[i].name)
        }
        
    }
    return newerArr.join(', ')
}
console.log(noCats(toonimals))

//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
