function registrar(){
var registra = document.getElementById ('visitante').value;
var numeroVisitante = document.getElementById ('numeroVisitante').value

if (registra !== '' && numeroVisitante !== '') {
    alert("Será sempre um prazer te receber por aqui!")
    location.href = "https://github.com/Moyses-Zerbieti"
}
    else{
        alert('Preencha os campos para continuar.')
    }
}
