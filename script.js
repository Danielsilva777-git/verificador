      // Declarações das varáveis  seletoras do Dom
           const select_volume = document.getElementById("select-volumes");
           const select_rastreio = document.getElementById("select-rastreios");
           const input_volume = document.getElementById("volume");
           const input_rastreio = document.getElementById("rastreio");
            let qdt = document.getElementById("qtd");


function ler(event,next){
  // Se a minha tecla pressionada não for "Enter", ele não executará nada
  
            if(event.key !=="Enter") { 
                    return;
            }
                   event.preventDefault()
                 // 1. Obtém a string do próprio campo onde o Enter foi pressionado.
                        //    (Assumindo que esta função está ligada a um campo de entrada) não precisamos usar um prompt para  obter as infomrações 
           const inputElement = event.target;
           const userInput = inputElement.value

          

            // Outra forma de verificar se o campo de entrada não está vazio

          if(!userInput){
          return alert("Informo o número do volume no campo da etiqueta geral")
          }
          // Dividindo em partes por espaço em branco
          const valor = userInput.split(" ");
         
          const etiq_geral = document.getElementById("etiqueta-geral");
       
          // Verificar se o elemento etiq_geral existe  
          if(etiq_geral){
            etiq_geral.value = valor[0];
          }  
       
          // Movendo o foco para o próximo elemento com validação da existencia do id do próximo input

          const inputnext = document.getElementById(next);
          if(inputnext){
            inputnext.focus();
          }


        } // fim da função ler

        function onEnter(event,nextinput){
          if(event.key !=="Enter"){
            return; 
          }

           event.preventDefault();
           // nextid a variável que armazena o próximo input 
           const nextid = document.getElementById(nextinput)

           if(nextinput ==="rastreio"){
             if(input_volume.value.trim() ===""){
               alert("Preencha o campo volume")
               return;
              }
                 //  Número baseado na quantidade atual de options 
                 const numero = select_volume.options.length + 1;
                 const texto = `${numero} - ${input_volume.value}`;

                // Adicionando valores do input volume  no select_volume 
               let option = new Option(texto, texto);
               select_volume.appendChild(option);
               input_volume.value = "";
                
                
                if(nextid){
                  nextid.focus()
                }
                qdt.innerText = select_volume.options.length;

             }if(nextinput ==="volume"){
                 if(input_rastreio.value.trim() ===""){
                   alert("Preencha o campo rastreio")
                   return;
                 }

                 let option2 = new Option(input_rastreio.value, input_rastreio.value);
                 select_rastreio.appendChild(option2);
                 input_rastreio.value ="";

               if(nextid){
                  nextid.focus();
               }
             } 

          
        
        }     

        function verificar(){
        
        }