let level = 0
let expToNextLevel = 10
let expGained = 0
let addAmount = 1
let multi = 1.5
let automateAmt = 0

setInterval(function(){
  for(let i = 0; i < automateAmt; i++){
    $("#addExp").click()
  }  
}, 500)

$("#addExp").click(function() {
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

$("#addAutomate").click(function(){
    automateAmt++
    
})