function run(statusWatson,responseWatson, score) {
    var body = JSON.parse(responseWatson)
    var entidades = ["default"]

    if (statusWatson != 200) {

        entidades = ["exception"]

        return entidades
    }


    if (body.entities.length == 0) {

        entidades = ["exception"]

        return entidades

    }

    if (body.entities[0].confidence >= score) {

        for(var i = 0; i < body.entities.length; i++){
            entidades.push(body.entities[i].entity)
        }

    } else {
        entidades = ["exception"]
    }

    return entidades
}