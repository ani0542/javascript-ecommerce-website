function decrease()
{
     var text=document.getElementById('textbox');
      var inc=document.getElementById('itemval')
     // console.log(itemval)
     // text--
     if(text.value<=0)
     {
          text.value=0
     }
     else{
          text.value=parseInt(text.value)-1
          text.style.background='#fff'
          text.style.color='#000'
          
     }
}

function increase()
{
     var text=document.getElementById('textbox');
     if(text.value>=5)
     {
          text.value=5
          text.style.background='red'
          text.style.color='#fff'
     }
     else
     {
          text.value=parseInt(text.value)+1
         
     }
}




////////////////////////second part/////////////////////////////////////////////







function decrease1()
{
     var text1=document.getElementById('textbox1');
     
     // console.log(itemval)
     // text--
     if(text1.value<=0)
     {
          text1.value=0
     }
     else{
          text1.value=parseInt(text1.value)-1
          text1.style.background='#fff'
          text1.style.color='#000'
     }
}


function increase1()
{
     var text1=document.getElementById('textbox1');
     if(text1.value>=5)
     {
          text1.value=5
          text1.style.background='red'
          text1.style.color='#fff'
     }
     else
     {
          text1.value=parseInt(text1.value)+1
         
     }
}


///////////////amount part/////////////////////////

