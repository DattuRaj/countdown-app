
const input=document.querySelectorAll('input')
const endDate=document.getElementById('enddate')
//const date=prompt("enter date month_name year")
const date="17 march 2023 00:05 AM"
endDate.innerHTML=date


function countdown()
{
    const Edate =new Date(date);
    const Cdate =new Date();
    const diff= Edate-Cdate
   
    if(diff<0)
    {
        input[0].value=0
        input[1].value=0
        input[2].value=0
        input[3].value=0  

    }

    else
    {
    input[0].value=Math.floor(diff/86400000)
    input[1].value=Math.floor((diff%86400000)/3600000)
    input[2].value=Math.floor(((diff%86400000)%3600000)/60000)
    input[3].value=Math.floor((((diff%86400000)%3600000)%60000)/1000)
  }
    
}
countdown()
setInterval(countdown,1000)
