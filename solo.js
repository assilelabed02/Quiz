var dataBase = [];

// Create a data object to store the question, choices, and correct answer
function CreateObjectQuestion(question, choices, correctAnswer) {
  return {
    question: question,
    choices: choices,
    correctAnswer: correctAnswer
  };
}

// Create the question objects and add them to the database
var o1 = CreateObjectQuestion('What is the most popular sport?', ['Football', 'Basketball', 'Handball', 'Boxing'], 0);
dataBase.push(o1);
var o40 = CreateObjectQuestion("Which term refers to a situation where ther price of currency falls in relation to other currencies ?",['Exchange rate','Deprication','Appreciation','Devaluation'],1)
dataBase.push(o40)
var o30 = CreateObjectQuestion("Which river is the longest in Europe ?",['Rhine','Danube','Thames','Volga'],3)
dataBase.push(o30)
var o20 = CreateObjectQuestion('What was the name of the first country to legalize abortion ?',['United States','Sweden','Soviet Union','China'],2)
dataBase.push(o20)
var o10 = CreateObjectQuestion('When did Mickel Jordan win his first NBA championship ?',['1994','1988','1998','1984'],3)
dataBase.push(o10)
var o39 = CreateObjectQuestion("Which economic concept refers to the additional benefit gained from consuming one more unit of a good or service ?",['Opportunity cost','Price floor','Elasticity of demand','Marginal utility'],3)
dataBase.push(o39)
var o29 = CreateObjectQuestion("Which country is known as 'The Land Of  theRising Sun' ?",['Japan','China','South Corea','Thailand'],0)
dataBase.push(o29)
var o19 = CreateObjectQuestion('What was the name of the first female pharao of Egypt',['Nefertiti','Tutankhamun','Cliopatra','Hatshepsut'],3)
dataBase.push(o19)
var o2 = CreateObjectQuestion("Who hold the record for most scored in a single FIFA World Cup tournament ?",['Pelé','Cristiano Ronaldo','Miroslav Close','Lionel Messi'],2)
dataBase.push(o2)
var o3 = CreateObjectQuestion('Who is the current world record holder for the 100-meter dash ?',['Carl lewis','Jesse Owens','Usain Bolt','Asafa Powell'],2)
dataBase.push(o3)
var o4 = CreateObjectQuestion('What is the name of the most prestigous tennistournament in the world ?',['Franch Open','Wimbeldon','Australian Open','Us Open'],1)
dataBase.push(o4)
var o5 = CreateObjectQuestion ('What is the name of the most famous football stadium in the world ?',['Maracana','Old Trafford','Santiago Birnabéu','Camp Nou'],3)
dataBase.push(o5)
var o6 = CreateObjectQuestion('What is the name of the most popular tennis player in the world ?',['Rafael Nadal','Roger Federer','Novak Djokovic','Sirina Willams'],1)
dataBase.push(o6)
var o7 = CreateObjectQuestion('What is the NBA point scoring record in a one game ?',['98 points','100 points','105 points','95 points'],1)
dataBase.push(o7)
var o8 = CreateObjectQuestion('What is the world record off 100 meter dash running ?',['8,97 seconds','9,58 seconds','9.98 seconds','8.58 seconds'],1)
dataBase.push(o8)
var o9 = CreateObjectQuestion('Where was the first NBA final was played ?',['Chicago Stadium','Detroit Olympia','Boston Garden','Madison Square Garden'],2)
dataBase.push(o9)
var o11 = CreateObjectQuestion('What was the name of the first emperor of China ?',['Qin Shi Huang','Kublai Khan','Genghis Khan','Meo Zedong'],0)
dataBase.push(o11)
var o12 = CreateObjectQuestion('What was the name of the ship that Cristopher Colombus sailed on when he discoverd America ?',['The Nina','The Pinta','The Santa Maria','The Mayflower'],2)
dataBase.push(o12)
var o13 = CreateObjectQuestion('Who was the leader of the American Revolution ?',['Benjamin Franclin','Thomas Jefferson','Alexander Hamilton','George Washington'],3)
dataBase.push(o13)
var o14 = CreateObjectQuestion('What is the name of the longest river in the world ?',['Amazon River','Nile River','Yellow River','Yangtze River'],0)
dataBase.push(o14)
var o15 = CreateObjectQuestion ('What was the name of the woman that first win Nobel Peace Prize ?',['Malala Yousafzai','Mother Teresa','Bertha Von Suttner','Aung San Suu Kyi'],2)
dataBase.push(o15)
var o16 = CreateObjectQuestion('What was the name of the first country to abolish slavery ?',['South Africa','Argentina','France','Haiti'],3)
dataBase.push(o16)
var o17 = CreateObjectQuestion('What was the name of the first country to abolish the death penalty ?',['Portugal','Spain','France','England'],0)
dataBase.push(o17)
var o18 = CreateObjectQuestion('What was the name of the first person to climb Mount Everest ?',['Edmund Hillary','Tenzing Norgay','George Mallory','John Hunt'],0)
dataBase.push(o18)
var o21 = CreateObjectQuestion('Which is the largest ocean in the world ?',['Pacific Ocean','Atlantic Ocean','Indian Ocean','Arctic Ocean'],0)
dataBase.push(o21)
var o22 = CreateObjectQuestion('Which is the capital of Canada ?',['Montreal','Toronto','Ottawa','Vancouver'],2)
dataBase.push(o22)
var o23 = CreateObjectQuestion('Which country is home to the Amazon rainforest ?',['Peru','Cuba','Colombia','Brazil'],3)
dataBase.push(o23)
var o24 = CreateObjectQuestion('Which country is home to the Taj Mahal ?',['Iran','Pakistan','India','Afghanistan'],2)
dataBase.push(o24)
var o25 = CreateObjectQuestion('Which country is home to the Dead Sea ?',['Jordan','Bahrain','Oman','Isreal'],3)
dataBase.push(o25)
var o26 = CreateObjectQuestion('Which country is home to Sahara Desert?',['Mali','Madagascar','Algeria'],3)
dataBase.push(o26)
var o27 = CreateObjectQuestion("Which country is home to the world's largest lake by volume ?",["Canada",'Russia','Brazil','Chiana'],1)
dataBase.push(o27)
var o28 = CreateObjectQuestion("Which country is home to the world's highest waterfall ?",['Nicaragua','Colombia','Venezuela','Guyana'],2)
dataBase.push(o28)
var o31 = CreateObjectQuestion('What is inflation ?',['Increase in the value of money','Decrease in the general price level','Rise in unemployement rate','Increase in the general price level'],3)
dataBase.push(o31)
var o32 = CreateObjectQuestion('What is GDP stand for ?',["General Devolopment Plan",'Goverment Dept Payment','Global Demand Projection','Gross Domestic Product'],3)
dataBase.push(o32)
var o33 = CreateObjectQuestion('What is a recession ?',['A period of economic growth and expansion','A sustained period of high inflation','A decline in economic activity characterized by negative GDP growth for two consecutive quarters','An increase in consumer spending'],2)
dataBase.push(o33)
var o34 = CreateObjectQuestion('What is the economic term for the total market value for all goods and services produced by a country in a given year, including its exports and imports ?',['Gross National Product','Gross Domestic Product','Net National Product','Gross World Product'],3)
dataBase.push(o34)
var o35 = CreateObjectQuestion("What is a fiscal deficit ?",['The excess of goverment revenues over goverment expenditures','The amount of money owed by the goverment to its citizens','The excess of goverment expenditures over goverment revenues',"The differnce between a country's imports and exports"],2)
dataBase.push(o35)
var o36 = CreateObjectQuestion('What does NAFTA stand for ?',["North Atlantic Free Trade Agreement","North American Free Trade Agreement","North American Financial Association",'National Asdsociation of Free Trade Areas'],1)
dataBase.push(o36)
var o37 = CreateObjectQuestion("Which economic concept refers to the idea that resources are limited, while human wants and needs are unlimited ?",["Opportunity cost","sccarcity","Comparative advantage",'Demand and supply'],1)
dataBase.push(o37)
var o38 = CreateObjectQuestion("Which term refers to the total value of a company's outstanding shares of stock ?",['Market capitalization','Revenue','Gross profit','Net worth'],0)
dataBase.push(o38)


function each (a,f){
  for (var i = 0 ; i < a.length ; i++){
    f(a[i],i)
  }
}

// Display the question and choices
function display() {
  var currentQuestion = dataBase[currentQuestionIndex];
  $('#question-text').text(currentQuestion.question);
  $('#choices-list').empty();

  each(currentQuestion.choices, function(choice, index) {
    var choiceButton = $('<button></button>').text(choice);
    choiceButton.on('click', function() {
      checkAnswer(index);
    });

    var choiceListItem = $('<li></li>').append(choiceButton);
    $('#choices-list').append(choiceListItem);
  });
}

// Check the selected answer and update the score
function checkAnswer(choiceIndex) {
  var currentQuestion = dataBase[currentQuestionIndex];

  if (choiceIndex === currentQuestion.correctAnswer) {
    score += 10;
    alert('Correct answer!');
  } else {
    alert('Wrong answer! The quiz is finished. Your score is ' + score);
    currentQuestionIndex = 0; // Reset the question index for future quizzes
    return; // Add return statement to exit the function
  }

  if (currentQuestionIndex < dataBase.length - 1) {
    currentQuestionIndex++;
  } else {
    alert('The quiz is finished. Your score is ' + score);
    currentQuestionIndex = 0; // Reset the question index for future quizzes
    score = 0; // Reset the score for future quizzes
    return; // Add return statement to exit the function
  }

  display();
}

// Initialize variables and start the quiz
var currentQuestionIndex = 0;
var score = 0;

$(document).ready(function() {
  display();
  $('#next').on('click', function() {
    display();
  });
});