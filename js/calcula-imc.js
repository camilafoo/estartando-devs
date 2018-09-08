
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

        var pesoEhValido = true;
        var alturaEhValido = true;


        // validacao de altura e peso
        if (peso >= 200 || peso <= 0) {
            pesoEhValido = false;
            tdImc.textContent = "Peso Inválido";
            paciente.classList.add('paciente-invalido');
        }
        if (altura >= 3.00 || altura <= 0) {
            alturaEhValido = false;
            tdImc.textContent = "Altura Inválido";
            paciente.classList.add('paciente-invalido');
        }
        //calculo imc
        if (pesoEhValido && alturaEhValido) {
         tdImc.textContent = calculaImc(peso, altura);

        }
    }
   


    function calculaImc(peso, altura){
         var imc = 0;
         imc = peso / (altura * altura);
         return imc.toFixed(2);
    }


    
    

    