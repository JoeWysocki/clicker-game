let count = 0
let addAmount = 1
let multi = 1.5

$("#button1").click(function() {
    count=count + addAmount
    count=Math.round(count)
    $("#text1").text(count)
}
)

$("#button2").click(function(){
    addAmount=addAmount * multi
})