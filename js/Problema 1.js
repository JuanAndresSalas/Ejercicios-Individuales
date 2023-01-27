$("#botonConversion").on("click", function(){
    const cambio = 745;
    
    let dolar = $("#inputDolar").val();

    $("#inputPesos").val(Math.floor(dolar * cambio).toLocaleString("es-cl"))
    
} )