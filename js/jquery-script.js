//efeito de esconder formulário de cadastro
$(document).ready(function () {
    $("#botao-cadastrar").click(function () {
        $("#form-cadastrar").slideToggle();
        $("#section-cadastrar").slideToggle();
        $("#botao-cadastrar").hide();
    })
})
