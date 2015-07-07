/*
     This is a test, repeat, this is a test
*/
var possible_answers = [
        {"SurveyNumber": "1", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 1,000,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 4\nMax speed (km per hour)= 100",
         "Nomotorcycle": "No motorcycle"
         },
         
         {"SurveyNumber": "2", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down\t500,000\nmonthly payment (3 years)\t500,000\nFuel price (rupiah per liter and liter equivalent)\t6,000\nMaximum range on single charge (km)\t80\nHow long to charge (hours)\t4\nMax speed (km per hour)\t100",
         "Nomotorcycle": "No motorcycle"
         },
         
         {"SurveyNumber": "3", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 40\nHow long to charge (hours)= 4\nMax speed (km per hour)= 100",
         "Nomotorcycle": "No motorcycle"
         },
         
         {"SurveyNumber": "4", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 2\nMax speed (km per hour)= 100",
         "Nomotorcycle": "No motorcycle"
         },
         
         {"SurveyNumber": "5", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 4\nMax speed (km per hour)= 60",
         "Nomotorcycle": "No motorcycle"
         }
        ];
//Randomize the possible options
var answer1 = new fSON.answer();
var answer2 = new fSON.answer();
var answer3 = new fSON.answer();
var r_index = Math.floor((Math.random() * possible_answers.length) + 0);
answer1.setAnswerText(possible_answers[r_index]["electric"]);
answer2.setAnswerText(possible_answers[r_index]["gas"]);
answer3.setAnswerText(possible_answers[r_index]["Nomotorcycle"]);
var survey_id = possible_answers[r_index]["SurveyNumber"];
answer1.setValue(survey_id + "-electric");
answer2.setValue(survey_id + "-gas");
answer3.setValue(survey_id + "-Nomotorcycle");
// Getting the appropiate chapter, question and answers and randomizing the question.
var c_motorcycle = fSUR.getChapters()[0];
var q = c_motorcycle.getQuestions()[0];
var answers = [answer1, answer2, answer3];
q.setAnswers(answers);
c_motorcycle.setQuestions(new Array(q));
// Getting the demographics chapter
var c_demo = fSUR.getChapters()[1];
var chapters = [c_motorcycle, c_demo];
fSUR.setChapters(chapters);

/* this is a test */

var var_gasp = ["7,000", "8,000", "9,000"];
var var_ecash = ["500,000", "750,000", "1,000,000"];
var var_emont = ["500,000", "750,000", "1,000,000"];
var var_efuel = ["4,000", "5,000", "6,000", "7,000","8,000"];
var var_emaxi = ["40km", "60km", "80km", "100km"];
var var_echar = ["2", "3", "4", "5"];
var var_espee = ["60kph", "70kph", "80kph", "90kph","2100kph"];

function constructAnswerArray(answerTextArray, valuesArray){
    var answers = [];
    for (var i = 0; i < answerTextArray.length; i++) {
        answers[i] = new fSON.answer();
        answers[i].setAnswerText(answerTextArray[i]);
        answers[i].setValue(valuesArray[i]);
    };
    return answers;
}
function getRandomNoRepeat(array){
    var r_index = Math.floor((Math.random() * array.length) + 0);
    if(r_index.indexOf(alreadyUsedRandomNumbers)){
        r_index = getRandomNoRepeat(array);
    }
    // After receiving r_index, add it to alreadyUsedRandomNumbers for it not to repeat.
    return r_index;
}