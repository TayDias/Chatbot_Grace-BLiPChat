function run(entidadesClassificadoras, classificacaoProblema) {
    var entidades = entidadesClassificadoras
    var retorno = {
        emocao: "incerta",
        problema: "Não identificado",
        agressao: false,
        autor: false,
        local: false,
        frequente: false,
        precisao: 0
    }


    if (classificacaoProblema != null) {
        retorno = JSON.parse(classificacaoProblema)
    }


    if (entidades.includes("emocao-negativa")) {
        retorno.emocao = "negativa"
        retorno.precisao = retorno.precisao + 0.05
    }
    if (entidades.includes("emocao-indicadora")) {
        retorno.emocao = "indicadora"
        retorno.precisao = retorno.precisao + 0.10
    }


    if (entidades.includes("o-que-vdomestica") && !retorno.agressao) {
        retorno.agressao = true
        retorno.precisao = retorno.precisao + 0.25
    }
    if (entidades.includes("quem-vdomestica") && !retorno.autor) {
        retorno.autor = true
        retorno.precisao = retorno.precisao + 0.25
    }
    if (entidades.includes("onde-vdomestica") && !retorno.local) {
        retorno.local = true
        retorno.precisao = retorno.precisao + 0.25
    }
    if (entidades.includes("quando-vdomestica") && !retorno.frequente) {
        retorno.frequente = true
        retorno.precisao = retorno.precisao + 0.20
    }

    if (entidades.includes("o-que-vdomestica") && !retorno.agressao && 
        entidades.includes("quem-vdomestica") && !retorno.autor) {
        retorno.precisao = retorno.precisao + 0.10
    }


    if (retorno.precisao >= 0.70) {
        retorno.problema = "violência doméstica"
    }

    if (retorno.precisao > 1) {
        retorno.precisao = 1
    }

    return retorno
}
