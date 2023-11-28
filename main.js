$(document).ready(function() {
    //Adicionar tarefa ao clicar no botão
    $("form").submit(function(event) {
        event.preventDefault();
        var tarefa = $("#txt").val();
        if (tarefa.trim() !== "") {
            $("#list").append("<li>" + tarefa + "</li>");
            $("#txt").val(""); // Limpa o campo após adicionar a tarefa
        }
})
    $("#list").on("click", "li", function() {
    $(this).toggleClass("completed");
    });
})