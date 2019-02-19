//$(document).ready(function() {
//  alert("Make sure you click on and read the Instructions before playing");
//});

$('.category').on('click', function () {
    $('.category').hide();
})

//define player1 points for js to read and also score 
let Player1Points = ('.Player1Points');
let score = 0;


//make box black out after it is answered to know that question is now done 
$('.box').on('click', function () {
    $(this).css('background-color', 'black');
    $(this).css('color', 'white');
})

//create function to bring up the appropriate question from var "questions" list at bottom, while creating prompt to type in answer and add or subtract points

$('#ans1').on('click', function () {
    var boxAns1 = prompt(questions[0]);
    if (boxAns1 == "Elon Musk" || boxAns1 == "elon musk" || boxAns1 == "elon" || boxAns1 == "Elon") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans2').on('click', function () {
    var boxAns2 = prompt(questions[1]);
    if (boxAns2 == "Cabbage" || boxAns2 == "cabbage") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

var questions = ["This person is the founder, CEO, and lead designer of Tesla Motors?", "This leafy green vegetable starts with the word Cab?", "This programming language can be used on the frontend and on the backend with Node.js?","What planet are humans currently aiming to colonize?","What country is the poorest in the world by GDP?", "Who was the first President of the United States?", "This vehicle was the first production electric vehicle to travel more than 200mph?", "Bugs Bunny loved this vegetable, and it also helps your eyesight?", "This programming language is similar to Objective-C, but newer, and also used to develop iPhone apps?", "This person is the foudner of Space Exploration Technologies Inc?", "This city in Michigan of the United States has a water crisis?", "This President is on the $5 bill?", "This luxury EV maker suffered a setback in 2012 due to Hurrican Sandy destroying their entire European shipment, leading to bankruptcy?", "This vegetable resembles broccoli but is white in color?", "Which language is the primary Android development language?", "This entrepreneur is the founder of the Virgin Group and plans to offer space flights by 2020?", "This small country often ranks as the richest company in the world?", "This President was stuck in a bathtub?", "This electric vehicle with the initials LA is set to possibly become Tesla's #1 competitor?", "This food item has long been debated to be either a fruit or vegetable, and is said to be both according to studies?", "This framework allows you to use Javascript to build native like mobile apps?", "This super billionaire entrepreneuer is the founder of Blue Origin space-launch company and has become amongst the top competitors of SpaceX?", "This South American country's school system is crashing because of their terrible economic crisis, along with the average worker becoming very poor?", "As a myth, this President's dentures were made of wood?", "Amazon recently led a $700 million dollar investing round in this electric truck startup?", "This seed comes from the plant Salvia hispanica and deliver a massive amount of nutrients with very few calories?", "This language is known to be the leader in all AI development and machine learning?", "SpaceX has flown 16 resupply missions to the International Space Station under a partnership with which company?", "This country has the highest level of hunger in the Western Hemisphere and was recently devastated by Hurricane Matthew?"]
