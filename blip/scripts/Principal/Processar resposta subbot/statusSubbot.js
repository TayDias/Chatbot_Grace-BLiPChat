function run(inputContent) {
    var int = JSON.parse(inputContent)
    var result = ""

    if (int != "teste") {
        result = int.status
    }

    return result
}