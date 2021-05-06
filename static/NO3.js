x=document.getElementById("para");
z=document.getElementById("data")
a=document.getElementById("bluff");
a.style.display="none";
z.style.display="none";
x.style.display="none";
x.style.cursor="pointer"
// document.getElementsByClassName("cursor").style.cursor = " ";
document.getElementById("dilH2SO4").style.cursor="pointer"
document.getElementById("concHCl").style.cursor="pointer"
document.getElementById("concH2SO4").style.cursor="pointer"
document.getElementById("concHNO3").style.cursor="pointer"
function open1(){
         x.innerHTML="The salt doesn't react with dilute H<sub>2</sub>SO<sub>4</sub>"
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open2(){
         x.innerHTML="The salt doesn't react with concentrated HCl"
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open3(){
         x.innerHTML="When 0.1 g of the salt is taken in a test tube and 1-2 mL of conc. H<sub>2</sub>SO<sub>4</sub> is added, brown fumes evolve which become dense upon heating the reaction mixture after addition of copper turnings and the solution acquires blue colour."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/no3after.jpg'
}
function open4(){
         x.innerHTML="The salt doesn't react with with conc. HNO<sub>3</sub>"
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}