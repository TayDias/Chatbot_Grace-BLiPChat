function run(statusApiHorarios, responseApiHorarios) {
    var json = JSON.parse(responseApiHorarios);
    var horarios = '';

    if (statusApiHorarios != 200) {

        horarios = "Ops, ocorreu uma falha ao consultar horários."

    } 
    else if (json.length == 0) {

        horarios = "Sinto muito, não há horários cadastrados para atendimento."

    }
    else {

        for(var i = 0; i < json.length; i++){
            horarios += 'Dia: ' + json[i].weekday_name + ' - Horário: ' + json[i].from + '\n';
        }

    }

    return horarios;

}