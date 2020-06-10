count=0;
function pushButton(buttonValue){
    
    
    if(buttonValue== 'AC'){
        document.getElementById("input_num").value='';
        count=0;
    }
    else{
        count++;
        document.getElementById("input_num").value+= buttonValue; 
    }
    if(count>20){
        document.getElementById("input_num").value='Limit exceeded';
    }
}

function calculate(equation){
    var arr=[];
    var arr2=[];
    var arr3=[];
  
   var symbols=["+","-","*","/"];
   for(i=0;i<equation.length;i++)
   {
       arr.push(equation[i]);
   }
   console.log(arr);

   for(i=0;i<equation.length;i++)
   {
    if(!(symbols.includes(arr[i])))
    {
        if(arr2.length==0)
        {
            arr2.push(arr[i]);
        }
        else{    
            var elem = arr2.pop();
            elem+= arr[i]; 
            arr2.push(elem);
            
        }
    }
    else if(symbols.includes(arr[i]))
       { arr2.push(arr[i]);
        arr2.push("");
       }
    }
    console.log(arr2);

    for(j=0;j<arr2.length;j++)
    {
        if(!(symbols.includes(arr2[j]))){
            arr3.push(arr2[j]);
            
        }
        else{
            var elem_new=arr3.pop();
            if(arr2[j]=='+'){
                var ans = Number(elem_new) + Number(arr2[j+1]);
                arr3.push(ans);
            }
           else if(arr2[j]=='-'){
                var ans = Number(elem_new) - Number(arr2[j+1]);
                arr3.push(ans);
            }
           else if(arr2[j]=='*'){
                var ans = Number(elem_new) * Number(arr2[j+1]);
                arr3.push(ans);
            }
           else if(arr2[j]=='/'){
                var ans = Number(elem_new) / Number(arr2[j+1]);
                arr3.push(ans);
            }
             j++;

        }
    }
    console.log(ans);

   
    if(arr3=="NaN"){
        document.getElementById("input_num").value= "Error"; 
    }
    else{
     document.getElementById("input_num").value= arr3;
    }
}