var sum = 0;
function execute(){
    for (var i = 1; i <= 25 ; i++) {
        var z= document.getElementById('q+'+i.toString());
        if(!z){
            //element doesn't exist.
        }else{
            var answer = parseInt(z.lang);
            // console.log(answer)
            var op1 = document.getElementById(i.toString()+".1");
            var op2 = document.getElementById(i.toString()+".2");
            var op3 = document.getElementById(i.toString()+".3");
            var op4 = document.getElementById(i.toString()+".4");
            // var k=document.getElementById(i.toString()+".1.0")
            // if(k){
            //     console.log("sucess\n");
            // }
            // console.log(answer);
                if(answer == 1){
                    document.getElementById(i.toString()+".1.0").style.display="none";
                    document.getElementById(i.toString()+".1.1").style.display="block";
                     if(op1.checked){
                        sum= sum + 1;
                     }else if(op2.checked){
                         document.getElementById(i.toString()+".2.0").style.display="none";
                         document.getElementById(i.toString()+".2.2").style.display="block";
                     }else if(op3.checked){
                         document.getElementById(i.toString()+".3.0").style.display="none";
                         document.getElementById(i.toString()+".3.2").style.display="block";
                     }else if(op4.checked){
                         document.getElementById(i.toString()+".4.0").style.display="none";
                         document.getElementById(i.toString()+".4.2").style.display="block";
                     }
                }
                else if(answer == 2){
                    document.getElementById(i.toString()+".2.0").style.display="none";
                    document.getElementById(i.toString()+".2.1").style.display="block";
                     if(op2.checked){
                         sum= sum + 1;
                     }else if(op1.checked){
                         document.getElementById(i.toString()+".1.0").style.display="none";
                         document.getElementById(i.toString()+".1.2").style.display="block";
                     }else if(op3.checked){
                         document.getElementById(i.toString()+".3.0").style.display="none";
                         document.getElementById(i.toString()+".3.2").style.display="block";
                     }else if(op4.checked){
                         document.getElementById(i.toString()+".4.0").style.display="none";
                         document.getElementById(i.toString()+".4.2").style.display="block";
                     }
                }else if(answer == 3){
                    document.getElementById(i.toString()+".3.0").style.display="none";
                    document.getElementById(i.toString()+".3.1").style.display="block";
                     if(op3.checked){
                        sum= sum + 1;
                     }else if(op2.checked){
                         document.getElementById(i.toString()+".2.0").style.display="none";
                         document.getElementById(i.toString()+".2.2").style.display="block";
                     }else if(op1.checked){
                         document.getElementById(i.toString()+".1.0").style.display="none";
                         document.getElementById(i.toString()+".1.2").style.display="block";
                     }else if(op4.checked){
                         document.getElementById(i.toString()+".4.0").style.display="none";
                         document.getElementById(i.toString()+".4.2").style.display="block";
                     }
                }else{
                    document.getElementById(i.toString()+".4.0").style.display="none";
                    document.getElementById(i.toString()+".4.1").style.display="block";
                     if(op4.checked){
                         sum= sum + 1;
                     }else if(op2.checked){
                         document.getElementById(i.toString()+".2.0").style.display="none";
                         document.getElementById(i.toString()+".2.2").style.display="block";
                     }else if(op3.checked){
                         document.getElementById(i.toString()+".3.0").style.display="none";
                         document.getElementById(i.toString()+".3.2").style.display="block";
                     }else if(op1.checked){
                         document.getElementById(i.toString()+".1.0").style.display="none";
                         document.getElementById(i.toString()+".1.2").style.display="block";
                     }
                }
        }
    }
    document.getElementById("score").innerHTML="You Score is "+sum.toString()
    document.getElementById("score").style.display="block"
}