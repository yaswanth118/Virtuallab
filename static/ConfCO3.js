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
         x.innerHTML="When 0.1 g of the salt is taken in a test tube and 1-2 mL of dilute Sulphuric acid is added, a colourless, odourless gas is evolved with brisk effervescence, which turns lime water milky. On passing the gas for some more time, milkiness disappears."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/ConfCO3.gif'

         var aft=document.getElementById("after");
         aft.src='/static/ConfCO3after.jpg'
}
function open2(){
         x.innerHTML="The salt doesn't react with Sodium nitroprusside."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open3(){
         x.innerHTML= "The salt doesn't react with silver nitrate (AgNO<sub>3</sub>)."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open4(){
         x.innerHTML="The salt doesn't react with Lead acetate."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open5(){
         x.innerHTML="The salt doesn't react with iron (II) sulphate to form a brown ring."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
    var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}