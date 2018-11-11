const object = {
    myArr : [1,2,3,4,5,1,2,3,4,5]
}

const objectArr = [
    arr0 = [5,5,5,5,5,5,5,5,5,5],
    match = [1,2,3,4,5,1,2,3,4,5],
    arr2 = [4,2,1,5,1,3,1,2,3,3],
    arr3 = [4,4,5,5,5,5,4,4,3,1],
]

//function for looping through arrays

function nerdTest(object){
    let variance =0;
    let matchArray = [];
    //loop through each nerd record object
    objectArr.forEach(function(element) {
        //console.log(element);
        //loop through each nerd record answer
        for(let i = 0; i <= 9; i++){
                variance += (element[i] > object.myArr[i]) ? (element[i] - object.myArr[i]) : (object.myArr[i] - element[i]);
            
        }
        //console.log(variance);
        matchArray.push(variance);
        variance = 0;
    });
    console.log(matchArray);
    let lowestNumber = 40;  //assuming max variance of 40, if an element is lower than this, it becomes low number.
    let pick = 0;
    for(let j = 0; j <= matchArray.length; j++){
        if(matchArray[j] < lowestNumber){
            lowestNumber = matchArray[j];
            pick = j -1;
        }
    }
    console.log("Lowest number is: " + lowestNumber + "\nMatch is: " + object.myArr[pick]);
    return pick;
}

nerdTest(object);