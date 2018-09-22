var pacientes = document.querySelectorAll('.paciente');


var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event){
  console.log(this);
  console.log(event.target);
});
//pacientes.forEach(function(paciente){
  //    paciente.addEventListener('dblclick', function(){
//this.remove();
  //    });
//});
