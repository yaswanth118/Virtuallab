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
    d.href="/Referlab/anion/Cl"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>Cl<sup>-</sup> + H<sub>2</sub>SO<sub>4</sub> &#8594; HSO<sub>4</sub><sup>-</sup> + HCl</b><br><br>" +
        "The HCl formed reacts with NH<sub>3</sub> as follows<br><br>" +
        "<b>HCl + NH<sub>3</sub> &#8594; NH<sub>4</sub>Cl</b> <br><br>" +
        "The white fumes formed are of ammonium chloride. So the anion may be Cl<sup>-</sup>"
}
function exec2(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/Br"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>2NaBr + 2H<sub>2</sub>SO<sub>4</sub> &#8594; Br<sub>2</sub> + SO<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O</b><br><br>" +
        "<b>2NaBr + MnO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> &#8594; Na<sub>2</sub>SO<sub>4</sub> + MnSO<sub>4</sub> + 2H<sub>2</sub>O + Br<sub>2</sub></b><br><br>" +
        "The following reactions result in the formation of the Br<sub>2</sub> gas which is brown in colour. So the anion may be Br<sup>-</sup>."
}
function exec3(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/I"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>2NaI + 2H<sub>2</sub>SO<sub>4</sub> &#8594; I<sub>2</sub> + SO<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O</b><br><br>" +
        "The raction caues the liberation of I<sub>2</sub> gas. So the anion may be I<sup>-</sup>"
}
function exec4(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/No3"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>NaNO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> &#8594; NaHSO<sub>4</sub> + HNO<sub>3</sub></b><br><br>" +
        "<b>4HNO<sub>3</sub> &#8594; 4NO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O</b><br><br>" +
        "<b>2NaNO<sub>3</sub> + 4H<sub>2</sub>SO<sub>4</sub> + 3Cu &#8594; 3CuSO<sub>4</sub> + Na<sub>2</sub>SO<sub>4</sub> + 4H<sub>2</sub>O + 2NO</b><br><br>" +
        "The copper sulphate formed in the final reaction gives blue coluration. So anion may be NO<sub>3</sub><sup>-</sup>"
}
function exec5(){
    a.style.display="block"
    c.style.display="none"
    d.href="/Referlab/anion/C2o4"
    b.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="<b>(COONa)<sub>2</sub> +  H<sub>2</sub>SO<sub>4</sub> + Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub> + CO</b><br><br>" +
        "From the above reaction the Co<sub>2</sub> liberated turns lime water milky. So anion may be C<sub>2</sub>O<sub>4</sub><sup>2-</sup>"
}
function exec6(){
    a.style.display="block"
    b.style.display="none"
    c.style.display="block"
    x=document.getElementById("para");
    x.innerHTML="Nothing is obesrved implies the anion doesn't react with Conc H<sub>2</sub>SO<sub>4</sub>"
}
