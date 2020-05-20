let level = 0
let expToNextLevel = 10
let expGained = 0
let addAmount = 1
let multi = 1.5

$("#button1").click(function() {
    expGained=expGained + addAmount
    
    
    if(expGained>=expToNextLevel){
        expToNextLevel=expToNextLevel*multi
        expGained=0
        level++
        $("#text1").text(level)
    }

    $("#expNum").text(expGained)
}
)

$("#button2").click(function(){
    addAmount=addAmount * multi
})