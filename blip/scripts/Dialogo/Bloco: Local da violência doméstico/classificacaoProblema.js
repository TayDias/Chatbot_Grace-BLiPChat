function run(classificacaoProblema) {
    var response = JSON.parse(classificacaoProblema)

    response.local = true
    response.precisao = response.precisao + 0.2

    return response
}