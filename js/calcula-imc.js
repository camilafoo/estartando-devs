
    //Instaciando os pacientes da tabela
    var pacientes = document.querySelectorAll('.paciente');

    //loop que percorre os pacientes da tabela e calcula o imc
    for (var i = 0; i < pacientes.length; i++) {

        //variavel referente ao indice do paciente
        var paciente = pacientes[i];

        //variaveis elementos td
        var tdPeso = paciente.querySelector('.info-peso');
        var tdAltura = paciente.querySelector('.info-altura');
        var tdImc = paciente.querySelector('.info-imc');

        //variaveis dados da tabela
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;
        
       //variaveis de validacao
        var pesoEhValido =  validaPeso(peso);
        var alturaEhValido = validaAltura(altura);


        // validacao de altura e peso
        if (!pesoEhValido) {
            pesoEhValido = false;
            tdImc.textContent = "Peso Inválido";
            paciente.classList.add('paciente-invalido');
        }
        if (!alturaEhValido) {
            alturaEhValido = false;
            tdImc.textContent = "Altura Inválido";
            paciente.classList.add('paciente-invalido');
        }
        //calculo imc
        if (pesoEhValido && alturaEhValido) {
         tdImc.textContent = calculaImc(peso, altura);

        }
    }
   function validaPeso(peso){
       if (peso >=0 && peso <= 200){
           return true;
       }else{
           return false;
       }

   }
function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00){
        return true;
    } else{
        return false;
    }
}

    function calculaImc(peso, altura){
         var imc = 0;
         imc = peso / (altura * altura);
         return imc.toFixed(2);
    }


    
    

    