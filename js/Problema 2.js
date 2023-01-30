$("#btnFormulario").on('click', function(){
    let edad = $("#inputEdad").val();
    let cedula = $('input:radio[name=cedula]:checked').val();
    let ahorro = $("#inputAhorro").val();
    let rsh = $("#rsh").val();
    let nucleoFamiliar = $("#inputNucleoFamiliar").val();
    let ingresoFamiliar = $("#inputIngresoFamiliar").val();
    let minvu = $('input:radio[name=minvu]:checked').val();
    let criterios = [];
    
    if(edad > 18 && edad <= 60 && nucleoFamiliar >= 2){
        criterios.push(true)
    }else if(edad < 18 || edad < 60 && nucleoFamiliar <= 1){
        criterios.push(false)
    }

    switch (cedula) {
        case "si":
            criterios.push(true)
            break;
    
        case "no":
            criterios.push(false)
            break;
    }

    if(ahorro < 4){
        criterios.push(false)
    }else{
        criterios.push(true)
    }
    
    if(rsh > 70){
        criterios.push(false)
    }else{
        criterios.push(true)
    }
    
    if(ingresoFamiliar >= 7 && ingresoFamiliar <= 25){
        criterios.push(true)
    }else{
        criterios.push(false)
    }

    switch (minvu) {
        case "si":
            criterios.push(false)
            break;
    
        case "no":
            criterios.push(true)
            break;
    }

    
  
    if( criterios.length <= 4) {
        alert("Debe llenar los campos del formulario")
    } else {
        if(criterios.indexOf(false) > -1 ){
            alert("No cumple con todos los requisitos" )
        }else {
            alert("Cumple con los requisitos")
        }
    }
    
})

