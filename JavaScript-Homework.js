//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names) {
    //Your code goes here
    new_dog_string = dog_string.split(" ").join(",").split(",").join(" ").split("  ").join(" ").split(" ")
    for(x in dog_names) {
        if(x in new_dog_string) {
            console.log("Matched " + dog_names[x])
        }
        else {
            console.log("No Matches")
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (i=0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = "even index"
        }
    }
    return arr
}

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]