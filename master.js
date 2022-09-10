//variables
let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.querySelector('.value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');
let clear = document.querySelector('.clear');
// let audio = document.getElementById('audio');


//ONLOAD
window.onload = () =>{
    value.innerHTML = '0';
}

//for loop at spans
// for(let i = 0; 1 < btn.length; i++){
//     btn[i].addEventListener('click', () =>{

//         if(this.innerHTML === "="){
//             value.innerHTML = eval(value.innerHTML); 
//         }else{
//             if(this.innerHTML === 'clear'){
//                 value.innerHTML = '';
//             }
//         }
//     })
// }

let j = 0;

btn.forEach(button => {
    button.addEventListener('click', () => {
        // value.innerHTML = '';
        if(button.innerHTML == '='){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(button.innerHTML == 'clear'){
                value.innerHTML = '';
            }else{
                if(j === 0){

                    clear.click();
                    j++;
                }
                value.innerHTML += button.innerHTML;
            }
        }
        // audio.play();
    })
})

toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}































































































































































