x=document.getElementById("para");
z=document.getElementById("data");
a=document.getElementById("bluff");
a.style.display="none";
z.style.display="none";
x.style.display="none";
x.style.cursor="pointer";
// document.getElementsByClassName("cursor").style.cursor = " ";
document.getElementById("dilH2SO4").style.cursor="pointer"
document.getElementById("concHCl").style.cursor="pointer"
document.getElementById("concH2SO4").style.cursor="pointer"
document.getElementById("concHNO3").style.cursor="pointer"
function open1(){
         x.innerHTML="Salt when added with 1-2 mL of dilute Sulphuric acid is added, a colourless, odourless gas is evolved with brisk effervescence, which turns lime water milky"
         x.style.display="block"
         z.style.display="block"
         a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/CO3gif.gif'
         var aft=document.getElementById("after");
         aft.src='/static/CO3after.jpg'
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
         x.innerHTML="The salt doesn't react with with conc. H<sub>2</sub>SO<sub>4</sub>"
         x.style.display="block"
         z.style.display="block"
            a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'
         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
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