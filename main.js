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

//create function to bring up the appropriate question from var "questions" list at bottom, while creating prompt to type in answer and add or subtract points from players score
//NEW- really a phase 2 but I needed a way to be competitive. after massive trial and error, you can now click "a" for it to prompt player 1s turn
$('#ans1').on('click', function () {
    var mydiv = $('.mydiv');
    $(document).bind('keydown',function(e){
       if(e.keyCode == 65) {
    
    var boxAns1 = prompt(questions[0]);
    if (boxAns1 == "Elon Musk" || boxAns1 == "elon musk" || boxAns1 == "elon" || boxAns1 == "Elon") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
}
    else if(e.keyCode == 76) {
        
    var boxAns1 = prompt(questions[0]);
    if (boxAns1 == "Elon Musk" || boxAns1 == "elon musk" || boxAns1 == "elon" || boxAns1 == "Elon") {
        $(".Player2Points").html(`${score += 100}`)
    }
    else $(".Player2Points").html(`${score -= 100}`)
}
    })



   


$('#ans2').on('click', function () {
    var boxAns2 = prompt(questions[1]);
    if (boxAns2 == "Cabbage" || boxAns2 == "cabbage") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans3').on('click', function () {
    var boxAns3 = prompt(questions[2]);
    if (boxAns3 == "Javascript" || boxAns3 == "javascript" || boxAns3 == "JavaScript") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans4').on('click', function () {
    var boxAns4 = prompt(questions[3]);
    if (boxAns4 == "Mars" || boxAns4 == "mars") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans5').on('click', function () {
    var boxAns5 = prompt(questions[4]);
    if (boxAns5 == "Liberia" || boxAns5 == "liberia") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans6').on('click', function () {
    var boxAns6 = prompt(questions[5]);
    if (boxAns6 == "George Washington" || boxAns6 == "george washington" || boxAns6 == "GW" || boxAns6 == "Washington" || boxAns6 == "washington") {
        $(".Player1Points").html(`${score += 100}`)
    }
    else $(".Player1Points").html(`${score -= 100}`)
})

$('#ans7').on('click', function () {
    var boxAns7 = prompt(questions[6]);
    if (boxAns7 == "Tesla Roadster" || boxAns7 == "Roadster" || boxAns7 == "roadster" || boxAns7 == "tesla roadster") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans8').on('click', function () {
    var boxAns8 = prompt(questions[7]);
    if (boxAns8 == "carrot" || boxAns8 == "Carrot" || boxAns8 == "Carrots" || boxAns8 == "carrots") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans9').on('click', function () {
    var boxAns9 = prompt(questions[8]);
    if (boxAns9 == "Swift" || boxAns9 == "swift") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans10').on('click', function () {
    var boxAns10 = prompt(questions[9]);
    if (boxAns10 == "Elon Musk" || boxAns10 == "elon musk" || boxAns10 == "elon" || boxAns10 == "Elon" || boxAns10 == "Musk") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans11').on('click', function () {
    var boxAns11 = prompt(questions[10]);
    if (boxAns11 == "Flint" || boxAns11 == "flint") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans12').on('click', function () {
    var boxAns12 = prompt(questions[11]);
    if (boxAns12 == "Abraham Lincoln" || boxAns12 == "abraham lincoln" || boxAns12 == "Lincoln" || boxAns12 == "lincoln" || boxAns12 == "abraham" || boxAns12 == "Abraham" || boxAns12 == "Abe" || boxAns12 == "abe" || boxAns12 == "Abe Lincoln") {
        $(".Player1Points").html(`${score += 200}`)
    }
    else $(".Player1Points").html(`${score -= 200}`)
})

$('#ans13').on('click', function () {
    var boxAns13 = prompt(questions[12]);
    if (boxAns13 == "fisker" || boxAns13 == "Fisker" || boxAns13 == "fisker automotive" || boxAns13 == "Fisker Automotive") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})

$('#ans14').on('click', function () {
    var boxAns14 = prompt(questions[13]);
    if (boxAns14 == "cauliflower" || boxAns14 == "Cauliflower") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})

$('#ans15').on('click', function () {
    var boxAns15 = prompt(questions[14]);
    if (boxAns15 == "Java" || boxAns15 == "java") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})

$('#ans16').on('click', function () {
    var boxAns16 = prompt(questions[15]);
    if (boxAns16 == "Richard Branson" || boxAns16 == "richard branson" || boxAns16 == "richard" || boxAns16 == "Richard" || boxAns16 == "Branson" || boxAns16 == "branson") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})

$('#ans17').on('click', function () {
    var boxAns17 = prompt(questions[16]);
    if (boxAns17 == "Qatar" || boxAns17 == "qatar") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})

$('#ans18').on('click', function () {
    var boxAns18 = prompt(questions[17]);
    if (boxAns18 == "William Taft" || boxAns18 == "william taft" || boxAns18 == "Taft" || boxAns18 == "taft" || boxAns18 == "William Howard Taft" || boxAns18 == "william howard taft") {
        $(".Player1Points").html(`${score += 300}`)
    }
    else $(".Player1Points").html(`${score -= 300}`)
})


$('#ans19').on('click', function () {
    var boxAns19 = prompt(questions[18]);
    if (boxAns19 == "Lucid Air" || boxAns19 == "lucid air") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 400}`)
})

$('#ans20').on('click', function () {
    var boxAns20 = prompt(questions[19]);
    if (boxAns20 == "tomato" || boxAns20 == "Tomato") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 400}`)
})

$('#ans21').on('click', function () {
    var boxAns21 = prompt(questions[20]);
    if (boxAns21 == "React Native" || boxAns21 == "react native") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 400}`)
})

$('#ans22').on('click', function () {
    var boxAns22 = prompt(questions[21]);
    if (boxAns22 == "Jeff Bezos" || boxAns22 == "jeff bezos" || boxAns22 == "Bezos" || boxAns22 == "bezos" || boxAns22 == "Jeff" || boxAns22 == "jeff") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 400}`)
})

$('#ans23').on('click', function () {
    var boxAns23 = prompt(questions[22]);
    if (boxAns23 == "Venezuela" || boxAns23 == "venezuela") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 400}`)
})

$('#ans24').on('click', function () {
    var boxAns24 = prompt(questions[23]);
    if (boxAns24 == "George Washington" || boxAns24 == "GW" || boxAns24 == "Washington" || boxAns24 == "washington" || boxAns24 == "george washington") {
        $(".Player1Points").html(`${score += 400}`)
    }
    else $(".Player1Points").html(`${score -= 00}`)
})

$('#ans25').on('click', function () {
    var boxAns25 = prompt(questions[24]);
    if (boxAns25 == "rivian" || boxAns25 == "Rivian") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

$('#ans26').on('click', function () {
    var boxAns26 = prompt(questions[25]);
    if (boxAns26 == "chia" || boxAns26 == "Chia" || boxAns26 == "chia seeds" || boxAns26 == "chia seed" || boxAns26 == "Chia Seeds" || boxAns26 == "Chia Seed") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

$('#ans27').on('click', function () {
    var boxAns27 = prompt(questions[26]);
    if (boxAns27 == "Python" || boxAns27 == "python") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

$('#ans28').on('click', function () {
    var boxAns28 = prompt(questions[27]);
    if (boxAns28 == "NASA" || boxAns28 == "nasa" || boxAns28 == "Nasa") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

$('#ans29').on('click', function () {
    var boxAns29 = prompt(questions[28]);
    if (boxAns29 == "Haiti" || boxAns29 == "haiti") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

$('#ans30').on('click', function () {
    var boxAns30 = prompt(questions[29]);
    if (boxAns30 == "Nixon" || boxAns30 == "nixon" || boxAns30 == "Richard Nixon" || boxAns30 == "richard nixon") {
        $(".Player1Points").html(`${score += 500}`)
    }
    else $(".Player1Points").html(`${score -= 500}`)
})

var questions = ["PLAYER 1: This person is the founder, CEO, and lead designer of Tesla Motors?", "PLAYER 2: This person is the founder, CEO, and lead designer of Tesla Motors?", "This leafy green vegetable starts with the word Cab?", "This programming language can be used on the frontend and on the backend with Node.js?","What planet are humans currently aiming to colonize?","Which country is the poorest in the world and similar to Central Africa Republic by GDP?", "Who was the first President of the United States?", "This vehicle was the first production electric vehicle to travel more than 200mph?", "Bugs Bunny loved this vegetable, and it also helps your eyesight", "This programming language is similar to Objective-C, but newer, and also used to develop iPhone apps?", "This person is the foudner of Space Exploration Technologies Inc?", "This city in Michigan of the United States has a water crisis?", "This President is on the $5 bill?", "This luxury EV maker suffered a setback in 2012 due to Hurrican Sandy destroying their entire European shipment, leading to bankruptcy?", "This vegetable resembles broccoli but is white in color?", "Which language is the primary Android development language?", "This entrepreneur is the founder of the Virgin Group and plans to offer space flights by 2020?", "This small country often ranks as the richest country in the world?", "This President was stuck in a bathtub?", "This electric vehicle with the initials LA is set to possibly become Tesla's #1 competitor?", "This food item has long been debated to be either a fruit or vegetable, and is said to be both according to studies?", "This framework allows you to use Javascript to build native like mobile apps?", "This super billionaire entrepreneuer is the founder of Blue Origin space-launch company and has become amongst the top competitors of SpaceX?", "This South American country's school system is crashing because of their terrible economic crisis, along with the average worker becoming very poor?", "As a myth, this President's dentures were made of wood?", "Amazon recently led a $700 million dollar investing round in this electric truck startup?", "These seeds comes from the plant Salvia hispanica and deliver a massive amount of nutrients with very few calories?", "This language is known to be the leader in all AI development and machine learning?", "SpaceX has flown 16 resupply missions to the International Space Station under a partnership with which company?", "This country has the highest level of hunger in the Western Hemisphere and was recently devastated by Hurricane Matthew?", "This president resigned before he could be impeached in 1974"]
})

