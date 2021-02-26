$(document).ready(() => {

    $("#enviar").click(() => {
        console.log("Funcionando");
        alert("Funcionou")
    });

    $("#dataI").mask("00/00/0000");

});

$("#padrao").change(() => {
    $('#camposx').empty()
    $('#camposx').prepend(
        " <div class=' col-md-4 form' >"
        + "<input id='dataI' class='form-control' type='text' placeholder='Data Inicio'>"
        + "</div>"
        + "<div class=' col-md-4 form'>"
        + "<input class='form-control' type='text' placeholder='campo2'>"
        + "</div>"
        + "<div class=' col-md-4 form'>"
        + "<input class='form-control' type='text' placeholder='campo3'>"
        + "</div>"
        + "</div>"
    );
});

$("#faixaH").change(() => {
    $("#camposx").empty()
    $('#camposx').prepend(
        "<div class='form'>"
        + "<input id='dataI' class='form-control'type='text' placeholder='Data Inicio'>"
        + "</div>"
        + "<div class='form'>"
        + "<input id='dataF' class='form-control'type='text' placeholder='Data Fim'>"
        + "</div>"
        + "<div class='form'>"
        + "<input id='campo-p' class='form-control'type='text' placeholder='Bla'>"
        + "</div>"
        + "<div class='form'>"
        + "<input id='campo-p' class='form-control'type='text' placeholder='Ble'>"
        + "</div>"
        + "</div>")
    //$('#dataI').hide()
    $('.form1').remove()
    $('.form').addClass("col-md-2");
    $("#dataF").mask("00/00/0000");
    $("#dataI").mask("00/00/0000");
});
