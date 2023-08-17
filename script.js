
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

//take empty string to store result
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);//eval is evaluate the string and give us the output
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;//clear all the value
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;//reaturn one less value
        }
        else{
            string += e.target.innerHTML;
        input.value = string;
        }
        
    })
})