//on click to get name and email.
$('#continueButton').click(function(event){
    let name = $('#nerdName').val().trim();
    let eMail = $('#nerdEmail').val().trim();
    if((name) && (email)){
        databaseWrite(name,email);
    }
    alert(name + " " + eMail);
});

function databaseWrite(name, email){
    //add ajax call to server...write server.
}