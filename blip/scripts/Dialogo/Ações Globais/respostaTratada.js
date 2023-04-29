function run(intentDetection) {

    var texto = intentDetection
    
    texto = texto.replace(/\n/g, " ").replace(/\r/g, "").replace(/\t/g, " ")

    return texto;
}