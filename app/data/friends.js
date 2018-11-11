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


var nerds = [
    {
      name: "Ian Richard",
      photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/268714_10150242813262509_4970049_n.jpg?_nc_cat=100&_nc_ht=scontent-lax3-1.xx&oh=b3743eb46c82b8988d59da97f354731b&oe=5C7A0E90",
      answers: [5,1,3,1,1,1,3,5,5,1],
      matches: []
    },

    {
        name: "Ian Richard",
        photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/268714_10150242813262509_4970049_n.jpg?_nc_cat=100&_nc_ht=scontent-lax3-1.xx&oh=b3743eb46c82b8988d59da97f354731b&oe=5C7A0E90",
        answers: [3,3,3,1,1,1,1,5,5,1],
        matches: []
      },


  ];