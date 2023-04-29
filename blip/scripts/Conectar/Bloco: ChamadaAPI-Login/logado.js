function run(statusCadastro, responseCadastro) {
    var json = JSON.parse(responseCadastro);
    var result;

    if (statusCadastro != 200) {

        result = "falha";

    }
    
    else {

        if(json.isRescuer) {
            result = 'atendente';
        }

        else {
            result = 'sucesso';
        }

    }

    return result
}