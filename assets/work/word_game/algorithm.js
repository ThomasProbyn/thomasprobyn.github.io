// Define the rules object; init the process
rules = []
// Create a rules object which the various rules can be added into as the game progresses

function addRule(type, value, position) {
    if (position) {
        rules.push({
            "type": type,
            "value": value,
            "position": position
        })
    } else {
        rules.push({
            "type": type,
            "value": value,
        })
    }
}

function generateResult() {
    // An array for all the possible words (chunked down as the process continues)
    for (let rule = 0; rule < rules.length; rule++) {
        // Loop through every rule in the rules object
        currentRule = rules[rule]
        switch (currentRule.type) {
            case "length":
                wordList = chunkLength(currentRule.value)
                break
                // Hand this off to the function which handles chunking of length; assign this new list to the main array
            case "letterAt":
                wordList = letterAt(currentRule.value, currentRule.position)
                break
            case "doesNotContain":
                wordList = doesNotContain(currentRule.value)
                break
            case "contains":
                wordList = contains(currentRule.value)
                break
            case "letterNotAt":
                wordList = letterNotAt(currentRule.value, currentRule.position)
                break
        }
    }
    probability = (((69903 - wordList.length)/69903*100)-90)*10
    return({"wordList": wordList, "probability":probability})
}

function chunkLength(value) {
    outArray = []
    for (let item = 0; item < wordList.length; item++) {
        if (wordList[item].length == value) {
            outArray.push(wordList[item])
        }
    }
    return outArray
}

function letterAt(value, position) {
    outArray = []
    position = position - 1
    for (let item = 0; item < wordList.length; item++) {
        if(wordList[item].split("")[position].toUpperCase() == value.toUpperCase()) {
            outArray.push(wordList[item])
        }
    }
    return(outArray)
}

function letterNotAt(value, position) {
    outArray = []
    position = position - 1
    for (let item = 0; item < wordList.length; item++) {
        if(wordList[item].split("")[position].toUpperCase() != value.toUpperCase()) {
            outArray.push(wordList[item])
        }
    }
    return(outArray)
}

function doesNotContain(value) {
    outArray = []
    for (let item = 0; item < wordList.length; item++) {
        if (!wordList[item].toUpperCase().includes(value.toUpperCase())) {
            outArray.push(wordList[item])
        }
    }
    return(outArray)
}

function contains(value) {
    outArray = []
    for (let item = 0; item < wordList.length; item++) {
        if (wordList[item].toUpperCase().includes(value.toUpperCase())) {
            outArray.push(wordList[item])
        }
    }
    return(outArray)
}