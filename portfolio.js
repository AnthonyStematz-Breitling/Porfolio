$( document ).ready( function(){
    console.log("hit start")
    $("#quiz-carousel").carousel('pause')


$("#openQuiz").on("click", function(){
    $("#quizDescription").attr("style", "height:100%")
})

$("#closeQuiz").on("click", function(){
    console.log("click")
    $("#quizDescription").attr("style", "height:0")
})
$("#quiz-body").mouseenter( function(){
    console.log("hit in")
    
    $("#quiz-carousel").carousel('next')
    $("#quiz-carousel").carousel('cycle')

})
$("#quiz-body").mouseleave(function(){
    console.log("hit out")

    $("#quiz-carousel").carousel('pause')
  
})
})