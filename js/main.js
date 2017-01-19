$(function(){
    // equivalente ao load de nossa página
    $("#modal01").modal({
        backdrop: false,
        keyboard: false
    });
    
    $("#modal01").modal("show");
    
    setTimeout(function() {
       $("#modal01").modal("hide")
    }, 3000);
    
    $(".ttp").tooltip({
        animation : false,
        delay : {
            show : 1000,
            hide : 5000
        },
        title : "Título padrão",
        trigger : "click"
    });
    
    $(".ppv").popover({
       title : "Título do popover",
        tigger : "hover focus "
    });
});