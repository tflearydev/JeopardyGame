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

var questions = ["This person is the founder, CEO, and lead designer of Tesla?"]
