a=document.getElementById("clear");
a.style.display="none"
b=document.getElementById("blk1");
b.style.display="none";
c=document.getElementById("blk2");
c.style.display="none"
d=document.getElementById("blk11");
e=document.getElementById("blk21");
function exec1(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/Co3"
    b.style.display="block"
    x=document.getElementById("para");
    // x.innerHTML="Anion may be CO<sub>3</sub><sup>2-</sup>"
    x.innerHTML="<b>H<sub>2</sub>SO<sub>4</sub> + CO<sub>3</sub><sup>2-</sup> &#8594; CO<sub>2</sub> + H<sub>2</sub>O + SO<sub>4</sub><sup>2-</sup><br><br></b>" +
        "The released CO<sub>2</sub> gas will turn lime water milky by the following reaction<br><br>" +"<b>Ca(OH)<sub>2</sub> + CO<sub>2</sub> &#8594; CaCO<sub>3</sub> + H<sub>2</sub>O</b><br><br>"+
        "As the calcium corbonate is a white precipitate the lime water when reacted with CO<sub>2</sub> turned milky. "+
        "So the anion may be CO<sub>3</sub><sup>2-</sup>."
}
function exec2(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/S"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>H<sub>2</sub>SO<sub>4</sub> + S<sup>2-</sup>  &#8594; H<sub>2</sub>S + SO<sub>4</sub><sup>2-</sup><br><br></b> "+
        "H<sub>2</sub>S gas gives the smell of rotten eggs and turn lead acetete paper black. So the anion may be S<sup>2-</sup>"
}
function exec3(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/So3"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + SO<sub>3</sub><sup>2-</sup> + H<sub>2</sub>SO<sub>4</sub> &#8594; Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + SO<sub>4</sub><sup>2-</sup> + K<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O</b><br><br>" +
        "The violet colour solution of potassium permanganate dissappeares and green colour appeares due to presence of Cr<sup>+3</sup> ions. So the Anion may be SO<sub>3</sub><sup>-</sup>"
}
function exec4(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/No2"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>2NO<sub>2</sub><sup>-</sup> + I<sub>2</sub> &#8594; 2I<sup>-</sup> + 2NO<sub>2</sub></b><br><br>" +
        "Brown gas is eveolved due to formation of NO<sub>2</sub>. So the anion may be NO<sub>2</sub><sup>-</sup>"
}
function exec5(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/Ch3coo"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="Acetate ion shows the smell of vinegar and acidic in nature. So the anion may be CH<sub>3</sub>COO<sup>-</sup>"
}
function exec6(){
    a.style.display="block"
    b.style.display="none"
    c.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="Nothing is observed implies the anion doesn't react with dil H<sub>2</sub>SO<sub>4</sub>"
}
