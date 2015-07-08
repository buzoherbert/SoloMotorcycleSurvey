var fSUR = FTproject.getSurveyProject().getSurvey();
var variables = {
    "gasp":
    {"name": "gasp",
     "options": ["7,000", "8,000", "9,000"]
    },
    "eemont":
    {"name": "eemont",
     "options": ["500,000", "750,000", "1,000,000"]
    },
    "emont":
    {"name": "emont",
     "options": ["500,000", "750,000", "1,000,000"]
    },
    "efuel":
    {"name": "efuel",
     "options": ["4,000", "5,000", "6,000", "7,000","8,000"]
    },
    "emaxi":
    {"name": "emaxi",
     "options": ["40km", "60km", "80km", "100km"]
    },
    "echar":
    {"name": "echar",
     "options": ["2", "3", "4", "5"]
    },
    "espee":
    {"name": "espee",
     "options": ["60kph", "70kph", "80kph", "90kph","210kph"]
    }
};

function replaceText(text, changesSet){
    for (property in changesSet) {
        if (changesSet.hasOwnProperty(property)) {
            text = text.replace(property, changesSet[property]);
        }
    }
    return text;
}

function constructAnswerValue(text, valueSet){
    var randomValues = "";
    for (property in valueSet) {
        if (valueSet.hasOwnProperty(property)) {
            var valueAndRandomSelection = property.concat("-", valueSet[property]);
            if (randomValues == ""){
                randomValues = valueAndRandomSelection;
            } else {
                randomValues = randomValues.concat("_", valueAndRandomSelection);
            }
        }
    }
    text = randomValues.concat("_", text);
    return text;
}

function getRandomSet(){
    var answerSet = {};
    for (property in variables) {
        if (variables.hasOwnProperty(property)) {
            var options = variables[property]["options"];
            var alength = Math.floor(Math.random() * options.length);
            var name = variables[property]["name"];
            answerSet[name] = options[alength];
        }
    }
    if(isItAlreadyChosen(answerSet)){
        getRandomSet();
    }
    return answerSet;
}

function isItAlreadyChosen(set){
    if(answerRandomSets.length == 0){
        return false;
    }
    for (var i = 0; i < answerRandomSets.length; i++) {
        for (property in set) {
            if (set.hasOwnProperty(property)) {
                if(!(set[property] == answerRandomSets[i][property])){
                    break;
                }
            }
        }
        return false;
    };
    return true;
}

var chapter = fSUR.getChapters()[1];
var questions = chapter.getQuestions();
var answers = [];
var answerRandomSets = [];
for (var i = 0; i < questions.length; i++) {
    answerRandomSets[i] = getRandomSet();
    answers[i] = questions[i].getAnswers();
    for (var j = 0; j < answers[i].length; j++) {
        var aText = answers[i][j].getAnswerText();
        aText = replaceText(aText, answerRandomSets[i]);
        var valueText = answers[i][j].getValue();
        valueText = constructAnswerValue(valueText, answerRandomSets[i]);
        answers[i][j].setAnswerText(aText);
        answers[i][j].setValue(valueText);
|       console.log(aText);
        console.log(valueText);
    };
};