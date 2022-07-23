


//a.print odd numbers in an array

const result1=()=>{
    var arr=[],arr1=[];
    var Lenofarray=parseInt(prompt("Enter the length of array"));    
    for (var i=0;i<Lenofarray;i++){    
        arr.push(parseInt(prompt("Enter the Numbers till Exit"))); 
    } 
    console.log(arr)  ;  
    for (var i=0;i<arr.length;i++){   
        if (arr[i]>0 && arr[i]%3==0){
            arr1.push(arr[i]);            
        }     
        
        
    }
    console.log(arr1);    
    
}


//b. Convert all the strings to tile caps in a string array

let result2=()=>{
    var arr=[],e=[];
    var Lenofarray=parseInt(prompt("Enter the size of array"));    
    for (var i=0;i<Lenofarray;i++){    
        arr.push(prompt("Enter the Uppercase string till Exit")); 
    }    
    for (var i=0;i<arr.length;i++){                  
            let First_char=arr[i].toLowerCase().slice(0,1).toUpperCase();
            let rest_char=arr[i].toLowerCase().slice(1,arr[0].length);
            e.push(First_char+rest_char);
            
        
    }
    console.log(e);         
}



//c. Sum of all numbers in an array
let result3=()=>{
    var sum=0;
    var arr=[];
    var Lenofarray=parseInt(prompt("Enter the length of array"));    
    for (var i=0;i<Lenofarray;i++){    
        arr.push(parseInt(prompt("Enter the Numbers till Exit")));  
    }   
    for (var i=0;i<arr.length;i++){ 
        sum+=arr[i];
    }  
    console.log("Sum of all numbers: "+sum);  
}

//Return all the prime numbers in an array

let result4=()=>{
    var Lenofarray=parseInt(prompt("Enter the length of array"));    
    for (var i=0;i<Lenofarray;i++){    
        arr.push(parseInt(prompt("Enter the Numbers till Exit")));        
    }
    for(var num=0;num<arr.length;i++){
        //console.log("First loop",num);
        if (num>1){
            for (var j=2;j<num;j++){
                console.log(num,j);

            }
        }

    }
   



}
            
//Return all the palindromes in an array

let result5=()=>{  
    var myinputarr = [],out=[];  
    var size=parseInt(prompt(" Enter the size of the array: "));
    for (var i=0;i<size;i++){            
        myinputarr.push(prompt("Enter the string till Exit"));        
    }
    for (var i=0;i<myinputarr.length;i++){
        var reverse=myinputarr[i].split("").reverse().join("");        
        if (myinputarr[i]==reverse){
            out.push(myinputarr[i]);
        console.log(out);
            
        }    
    
       
    }
    
}              

//Remove duplicates from an array

let result6=()=>{
    var unquie=[],arr=[];
    var Lenofarray=parseInt(prompt("Enter the size of array"));

    for (var i=0;i<Lenofarray;i++){
         arr.push(parseInt(prompt("Enter the positive numbers till Exit: ")));
    }    
    for(var i=0;i<arr.length;i++){  
        if (!unquie.includes(arr[i])){
            unquie.push(arr[i]);
        }

    }
    console.log("unquie Array:"+unquie);


}
// Rotate an array of k times
//Rotate the array to right Side
//K=3
//sample_input_arr=[1,2,3,4,5,6,7]

let result7=()=>{
    var arr=[],arr1=[];
    var k=parseInt(prompt(" Enter the Positive  Rotate number"));
    var Lenofarray=parseInt(prompt("Enter the size of array"));

    for (var i=0;i<Lenofarray;i++){
         arr.push(parseInt(prompt("Enter the numbers till Exit: ")));
    }
    arr1=arr.reverse().slice(0,k);
    arr1=arr1.reverse()+","+arr.slice((k+1)).reverse();
    
    console.log(arr1);
}





result1();
result2();
result3();
result5();   
result6(); 
result7();




