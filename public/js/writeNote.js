window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("logged in as ", user.displayName);
            googleUser = user;
        } else {
            console.log("not logged in");
        }
    });

    const createNoteButton = document.querySelector("#createNoteButton");
    createNoteButton.addEventListener("click", () => {
        const noteTitle = document.querySelector("#noteTitle").value;
        const noteText = document.querySelector("#noteText").value;
        console.log(noteTitle, noteText);
        
        firebase.database.ref().ref(`/users/${googleUser.uid}`).push({
            title: noteTitle,
            text: noteText
        }).catch(error => {
            console.log('something went wrong');
        });
    });
}