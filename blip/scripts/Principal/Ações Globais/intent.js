function run(statusWatson,responseWatson, score) {
    var body = JSON.parse(responseWatson)
    var intent

    if (statusWatson != 200) {

        intent = "failed"

        return intent
    }


    if (body.intents.length == 0) {

        intent = "exception"

        return intent

    }


    if (body.intents[0].confidence >= score) {

        intent = body.intents[0].intent

    } else {

        intent = "exception"
    }

    return intent
}