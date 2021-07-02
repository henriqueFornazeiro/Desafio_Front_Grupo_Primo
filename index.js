$('.btn-subscription-end').click(function(){
    var nome = $('#name').val();
    var email = $('#email').val();

    $('#resultName').text(nome);

    if(nome == '' || email == ''){
        $('#msgValidation').removeAttr('hidden');
        return false
    }

    $('#msgValidation').attr('hidden',true);

    $('#modalFormSubscription').modal('hide');
    
    $('#alertMsg').modal('show');

    setInterval(function(){ $('#alertMsg').modal('hide'); }, 1700);
    
})