x=document.getElementById("para");
z=document.getElementById("data")
a=document.getElementById("bluff");
a.style.display="none";
z.style.display="none";
x.style.display="none";
x.style.cursor="pointer"
// document.getElementsByClassName("cursor").style.cursor = " ";
document.getElementById("dilH2SO4").style.cursor="pointer"
document.getElementById("nitroprusside").style.cursor="pointer"
document.getElementById("silvernitrate").style.cursor="pointer"
document.getElementById("brown-ring").style.cursor="pointer"
function open1(){
         x.innerHTML="The salt doesn't react with dilute H<sub>2</sub>SO<sub>4</sub>."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open2(){
         x.innerHTML="The salt doesn't react with Sodium nitroprusside."
         x.style.display="block"
    a.style.display="block"
    z.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open3(){
         x.innerHTML= "Take 1 mL of salt in a test tube, acidify it with dil. HNO<sub>3</sub> or take water extract and add silver nitrate solution. A curdy white precipitate is obtained which is soluble in ammonium hydroxide solution."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/curdywhite.jpg'
}
function open4(){
         x.innerHTML="The salt doesn't react with iron (II) sulphate to form a brown ring."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open5(){
         x.innerHTML="The salt doesn't react with Lead acetate."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}