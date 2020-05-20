let level = 0
let expToNextLevel = 10
let expGained = 0
let addAmount = 1
let multi = 2
let automateAmt = 0
let gold = 0
let goldRate = 1

setInterval(function(){
  for(let i = 0; i < automateAmt; i++){
    $("#addExp").click()
  }  
}, 500)

$("#addExp").click(function() {
    expGained=expGained + addAmount
    gold += goldRate
    
    
    if(expGained>=expToNextLevel){
        expToNextLevel=expToNextLevel*multi
        expGained=0
        level++
        goldRate++
        $("#text1").text(level)
        $("#nextLevel").text(expToNextLevel)
    }

    $("#expNum").text(expGained)
    $("#gold").text(gold)
}
)

$("#addAutomate").click(function(){
    automateAmt++
    
})