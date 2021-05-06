x=document.getElementById("para");
z=document.getElementById("data")
a=document.getElementById("bluff");
a.style.display="none";
z.style.display="none";
x.style.display="none";
x.style.cursor="pointer"
// document.getElementsByClassName("cursor").style.cursor = " ";
document.getElementById("group-3").style.cursor="pointer"
document.getElementById("group-0").style.cursor="pointer"
document.getElementById("group-2").style.cursor="pointer"
document.getElementById("group-5").style.cursor="pointer"
document.getElementById("group-4").style.cursor="pointer"
function open1(){
         x.innerHTML="The salt does not respond to excess NH<sub>4</sub>OH in presence of NH4Cl."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open2(){
         x.innerHTML="The salt does not respond to Nessler's reagent (K<sub>2</sub>HgI<sub>4</sub>)."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open3(){
         x.innerHTML="The salt does not respond to H<sub>2</sub>S gas in the presence of dilute HCl."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}
function open4(){
         x.innerHTML="The salt gives a white precipitate on treatment with (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> in the presence of excess NH<sub>4</sub>OH and NH<sub>4</sub>Cl " +
             "and the white precipitate is treated with K<sub>2</sub>CrO<sub>4</sub> in presence of </sub>CH<sub>3</sub>COOH and yellow precipitate is formed."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/bacl2_cation.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Bacl2after.jpg'
}
function open5(){
         x.innerHTML="The salt does not react with H<sub>2</sub>S in presence of NH<sub>4</sub>OH."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}