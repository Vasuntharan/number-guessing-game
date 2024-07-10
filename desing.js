var num=Math.floor(Math.random()*101);
var count=0;
console.log(num);

function findnum()
{
    var guessed_num=parseInt(document.getElementById('n1').value);
    count+=1;
    if(guessed_num==num)
    {
        document.getElementById('result').textContent="உங்கள் யூகம் சரிதான் வாழ்த்துக்கள்!!!!";
    }
    else if(guessed_num>num)
    {
        document.getElementById("result").textContent="சிறிய எண்ணிக்கையில் முயற்சிக்கவும்";
    }
    else{
        document.getElementById("result").textContent="அதிக எண்ணிக்கையில் முயற்சிக்கவும்"
    }
    document.getElementById("count").textContent=count;
}