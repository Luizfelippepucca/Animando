const section = document.querySelector('section');

let elemento  = document.createElement('div');

let imgUrso = document.createElement('img');
imgUrso.setAttribute('src','https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png');

section.appendChild(elemento);
elemento.appendChild(imgUrso);

function contagem (){

    let regressiva = 3;
    let min = 0;

    let intervalo = setInterval(()=>{
        if(regressiva>=3){
           regressiva--;

           imgUrso.setAttribute('src','https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png');
          
           // elemento.innerHTML = regressiva;
        }else if(regressiva==2){
            regressiva--;
            imgUrso.setAttribute('src','https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png');
           
        }else if(regressiva==1){
            regressiva--;
            imgUrso.setAttribute('src','https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png');
        }else{
            regressiva = 3;
           
        }
      
        
    },100);
   
   
};


window.addEventListener('load',contagem);




