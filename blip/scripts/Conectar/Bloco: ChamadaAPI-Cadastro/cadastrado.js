function run(statusCadastro, responseCadastro) {
    var int = JSON.parse(responseCadastro);
    var result;

    if (statusCadastro != 200) {

        result = "falha";

        return result;
    }
    
    else {

        result = 'sucesso';

        return result;
    }

    return result
}