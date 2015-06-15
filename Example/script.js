/*
     This is a test, repeat, this is a test
*/
var possible_answers = [
        {"SurveyNumber": "1", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 1,000,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 4\nMax speed (km per hour)= 100"
         },
         
         {"SurveyNumber": "2", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down\t500,000\nmonthly payment (3 years)\t500,000\nFuel price (rupiah per liter and liter equivalent)\t6,000\nMaximum range on single charge (km)\t80\nHow long to charge (hours)\t4\nMax speed (km per hour)\t100"
         },
         
         {"SurveyNumber": "3", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 40\nHow long to charge (hours)= 4\nMax speed (km per hour)= 100"
         },
         
         {"SurveyNumber": "4", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 2\nMax speed (km per hour)= 100"
         },
         
         {"SurveyNumber": "5", 
         "gas": "Conventional Motorcycle\nCash down= 500,000 \nMonthly payment (3 years)= 500,000 \nFuel price (rupiah per liter equivalent)= NA\nand How long to charge (hours)= NA\nMax speed (km per hour)=100",
         "electric": "Electric Motorcycle\nCash down= 500,000\nmonthly payment (3 years)= 500,000\nFuel price (rupiah per liter and liter equivalent)= 8,000\nMaximum range on single charge (km)= 80\nHow long to charge (hours)= 4\nMax speed (km per hour)= 60"
         }
        ];
//Randomize the possible options
var answer1 = new fSON.answer();
var answer2 = new fSON.answer();
var r_index = Math.floor((Math.random() * possible_answers.length) + 0);
answer1.setAnswerText(possible_answers[r_index]["electric"]);
answer2.setAnswerText(possible_answers[r_index]["gas"]);
var survey_id = possible_answers[r_index]["SurveyNumber"];
answer1.setValue(survey_id + "-electric");
answer2.setValue(survey_id + "-gas");
// Getting the appropiate chapter, question and answers and randomizing the question.
var c = fSUR.getChapters()[0];
var q = c.getQuestions()[0];
var answers = [answer1, answer2];
q.setAnswers(answers);
c.setQuestions(new Array(q));
fSUR.setChapters(new Array(c));