$(document).ready(function(){
    $('#boto1').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            type: 'get',
            dataType: 'json',
            success: function(dades){accio(dades);},
            error: function(xhr, status, error){
                console.log(`${status} ${error}`);
                console.log(xhr);
            }
        });
    });
});

$(document).ready(function(){
    $('#boto2').click(function (e) {
        e.preventDefault();
        fetch('http://api.icndb.com/jokes/random')
            .then(response => response.json())
            .then(dades => {accio(dades);})
            .catch(err => console.log(err));
    });
});

function accio(dades){
    let id = dades.value.id;
    let categoria = dades.value.categories;
    let acudit = dades.value.joke;
    if (categoria =="") {categoria="no consta";}
    $('#acudit').html(`<b>Id:</b> ${id}<br><b>Categoria:</b> ${categoria}<br><b>Acudit:</b> "${acudit}"`);
}