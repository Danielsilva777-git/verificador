      // Declarações das varáveis  seletoras do Dom
           const select_volume = document.getElementById("select-volumes");
           const select_rastreio = document.getElementById("select-rastreios");
           const input_volume = document.getElementById("volume");
           const input_rastreio = document.getElementById("rastreio");
           const result = document.getElementById("resultados");
           const etiq_geral = document.getElementById("etiqueta-geral");
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
        function verifica(){
           let aprovado = true;

          for(let i = 0; i < select_volume.options.length; i++){
            const option = select_volume.options[i];
            const partes = option.value.split(" ");
            const  option_rastreio = select_rastreio.options[i];
          
           if(etiq_geral.value !== partes[2] || partes[4] !== option_rastreio.value){
            option.style.color = "red";
            option_rastreio.style.color = "red";
            
            aprovado = false;
           }else{
            option.style.color = "";
            option_rastreio.style.color = "";
              
           }
          
          }
            
          
          result.innerText = aprovado ? "Aprovado" : "Reprovado";
          result.style.color = aprovado ? "blue" : "red";
          
            aprovado ? duplicidade() : ""


        }
        
      function remove(){
      
      if(select_volume.selectedIndex === -1){
                alert("Selecione apenas o volume a sua esquerda para ambos serem removidos")
                return;
      }

        const seleção_volumes = select_volume.selectedIndex;
      
       select_volume.remove(select_volume.selectedIndex)
       select_rastreio.remove(seleção_volumes);
             
       qdt.innerText = select_volume.options.length;  

      }


      function duplicidade(){
           
        const contador = {}; // quardar quantas vezes cada valor aparece

        //Primeiro passo, contar quantas vezes os rastreios aparece
        for(const rastreios of select_rastreio.options){

          const valor = rastreios.value;
          
          contador[valor] = (contador[valor] || 0) + 1;
        }
            let repetido = false;

        // marcar todos os rastreios repetidos 

        for(const rastreios of select_rastreio.options){
          if(contador[rastreios.value] > 1){
            rastreios.style.color= "red";
            repetido = true;
          }else{
            rastreios.style.color= "Black"
          }

        }
        if(repetido){
          result.innerText= "Existem rastreios repitidos na listagem";
          result.style.color= "red";
        }
           

      }