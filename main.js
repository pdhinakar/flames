function calc(){
              var ans;
             var count=0;
		var flame="flames";
		 var name1 = document.getElementById("name1").value;
                 var name2 = document.getElementById("name2").value;
var i;
var j;
                       for(i=0;i<name1.length;i++){
			for(j=0;j<name2.length;j++){
				if(name1.charAt(i)==name2.charAt(j)){
                                name1=name1.substring(0,i)+name1.substring(i+1,name1.length);
                                name2=name2.substring(0,j)+name2.substring(j+1,name2.length);
					i--;
					break;
				}
			}
		}

count=name1.length+name2.length;

		var len=6;
		var count1=count;
		while(flame.length!=1){
			if(count1>len){
				count=count1%len;
			
			}
			if(count==0){
				flame=flame.substring(0,len-1);
			}
			else{
			flame=flame.substring(count)+flame.substring(0,count-1);
			}
			len--;
		}
		switch(flame.charAt(0)){
		case 'f':
			ans="Friends";
		    break;
		case 'l':
			ans="Love";
		    break;
		case 'a':
			ans="Affection";
		    break;
		case 'm':
			ans="Marriage";
		    break;
		case 'e':
			ans="Enemy";
		    break;
		case 's':
			ans="Sister";
		    break;
		}
//ans="hai";
document.getElementById("demo").innerHTML=ans;
} 
