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
         x.innerHTML="The salt forms a brown precipitate on reacting with excess NH<sub>4</sub>OH in presence of NH4Cl which dissolves in hydrochloric acid. " +
             "On adding potassium ferrocyanide (K<sub>4</sub>[Fe(CN)<sub>6</sub>]), a blue precipitate/colouration appears."
         x.style.display="block"
         z.style.display="block"
            a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/fe2so43_cation.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Fe2so43after.jpg'
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
         x.innerHTML="The salt does not respond to (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> in the presence of excess NH<sub>4</sub>OH and NH<sub>4</sub>Cl."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
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