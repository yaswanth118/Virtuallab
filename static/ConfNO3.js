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
         x.innerHTML="By taking 1 mL of salt solution in water in a test tube, add 2 mL conc. of H<sub>2</sub>SO<sub>4</sub> and mix thoroughly. Cool the mixture under the tap. Add freshly prepared ferrous sulphate along the sides of the test tube without shaking. A dark brown ring is formed at the junction of the two solutions."
         x.style.display="block"
         z.style.display="block"
    a.style.display="block"
         var y=document.getElementById("giffy");
         y.src='/static/Noreaction.gif'

         var aft=document.getElementById("after");
         aft.src='/static/Noreaction.jpg'
}