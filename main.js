function calc() 
{
    var fname = document.getElementById('yname').value;
    var sname = document.getElementById('pname').value;
    if (fname=='') {
        alert("Please Enter Your Name");
    }
    else if (sname=='') {
        alert("Please Enter Crush Name");
    }
    var r = /\s+/g;
    var orfirst = document.first.name.value.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
    if(orfirst!="")
    {
            var count = 0;
            var first = orfirst;    
            second = eval("document.first.name"+1).value.toUpperCase();
            var names=second;
            second = second.replace(r,"");  
            if(second != "")
            {
                    for(var xx=0; xx<first.length; xx++)
                    {
                            for(var yy=0; yy<second.length; yy++)
                            {
                                    if(first[xx] == second[yy])
                                    {
                                            var a1 = first.substring(0,xx);
                                            var a2 = first.substring(xx+1,first.length);
                                            first = a1+a2;
                                            xx=-1;
                                            var b1 = second.substring(0,yy);
                                            var b2 = second.substring(yy+1,second.length);
                                            second = b1+b2;
                                            yy=-1;
                                            break;
                                    }
                            }
                    }          
                    var ss=(first+second);
                    var l=ss.length;
                    var ar = new Array("F", "L", "A", "M", "E", "S");
                    var stp=1;
            
                    for(var x=6; x>1; x--)
                    {
                            var g=((l%x)+stp)-1;
                            if(g>x)
                            {
                                    g=g%x;
                            }
                            if(g==0)
                            {
                                    g=ar.length;
                            }
                            ar.splice(g-1,1);
                            stp=g;
                    }
                  
                    if(ar=="F")
                    {
                            document.getElementById("msg").innerHTML = 'FRIENDS';
                            document.getElementById("msg").style.color='white';                  
                    }
                    else if(ar=="L")
                    {
                            document.getElementById("msg").innerHTML = 'LOVER';
                            document.getElementById("msg").style.color='white';
                    }
                    else if(ar=="A")
                    {
                            document.getElementById("msg").innerHTML = 'AFFECTION';
                            document.getElementById("msg").style.color='white';
                    } 
                    else if(ar=="M")
                    {
                            document.getElementById("msg").innerHTML = 'MARRIAGE';
                            document.getElementById("msg").style.color='white';
                    }
                    else if(ar=="E")
                    {   
                            document.getElementById("msg").innerHTML = 'ENEMY';
                            document.getElementById("msg").style.color='white';
                    }
                    else if(ar=="S")
                    {
                            document.getElementById("msg").innerHTML = 'SIBLING';
                            document.getElementById("msg").style.color='white';
                    }                   
            }        
    }
    else
    {
            return false;
    }
}
