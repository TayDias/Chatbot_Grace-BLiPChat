function run(statusApiDisponibilidade, responseApiDisponibilidade) {
    
    if (statusApiDisponibilidade != 200) {

        result = "failed"

        return result
    }

    else {
        var disponibilidade = responseApiDisponibilidade;
        return disponibilidade;
    }
    
    return null;
}