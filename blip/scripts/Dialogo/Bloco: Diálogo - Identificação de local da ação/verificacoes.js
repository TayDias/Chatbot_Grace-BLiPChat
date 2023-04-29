function run(verificacoes) {
    var response = JSON.parse(verificacoes)

    response.local = true

    return response
}