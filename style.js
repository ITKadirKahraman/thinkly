let notesTitles = [];
let notes = [];
let trashNoteTitles = [];
let trashNotes = [];
let notesContainerLayout = document.getElementById('notesContainer');

function init() {
    textInputOutput();
    renderNotes();
}
addNewNotes();

function renderNotes() {
    let notesRef = document.getElementById('notesContainer');
    notesRef.innerHTML = "";
    for (let notesIndex = 0; notesIndex < notes.length; notesIndex++) {
        notesRef.innerHTML += getCreateCard(notesIndex);
    } 
}

// the second notes input and output, is a experiment
function textInputOutput() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    inputText.addEventListener("input", function(){
        outputText.value = inputText.value;
    });   
}

// create a new notes container
function addNewNotes() {
    getCreateMainCard();
    const button = document.getElementById('addNewCard');
    const createNotes = document.getElementById('notesContainer');
    button.addEventListener("click", function() {
        createNotes.innerHTML += getCreateCard();
    });
}

// save notes in folder
function saveInFolder() {
    let button = document.getElementById('addFolder');
    button.addEventListener("click", function() {
        notes.push(textarea.value);
    });
    if(notes.length > 0){
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    renderNotes();
}

function addNotes() {
    const textarea = document.getElementById('.inputText');
    if(textarea.value != ""){
        notes.push(textarea.value);
    }
    saveInFolder();
    renderNotes();
    textarea.value = "";
}

// save in the local Storage
function saveToLocalStorage() {
    const data = {
        title: notesTitles,
        note: notes,
        trashTitleNote: trashNoteTitles,
        trashNote: trashNotes,
    };
    localStorage.setItem("notesData", JSON.stringify(data));
}

// get from the local storage
function getFromLocalStorage() {
    const data = localStorage.getItem("notesData");
    if(data){
        const parsedData = JSON.parse(data);
        notesTitles = parsedData.title || [];
        notes = parsedData.note || [];
        trashNoteTitles = parsedData.trashNoteTitles || [];
        trashNotes = parsedData.trashNotes || [];
    }
}

// display updated
function initLayout() {
    notesContainerLayout.innerHTML = "";
    for (let index = 0; index < notes.length; index++) {
        notesContainerLayout.innerHTML += getCreateCard(index);
    }
    updateLayout();
}

function updateLayout() {
    if(notes.length > 2){
        notesContainerLayout.classList.add("gridLayout");
    }
}

// delete notes
function deleteTrash(indexNote) {
    let trashButton = document.getElementById('trashDelete');
    trashButton.addEventListener("click", function () {
        let trashNote = notes.splice(indexNote, 1);
        trashNote.push(trashNote[0]);
        let trashNoteTitle = notesTitles.splice(indexNote, 1);
        trashNoteTitle.push(trashNoteTitle[0]); 
    });
    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

// permanently delete notes
function permanentlyDelete(trashDeleteIndex) {
    let trashButton = document.getElementById('trashPermanentlyDelete');
    trashButton.addEventListener("click", function () {
        trashNotes.splice(trashDeleteIndex, 1);
    });
    renderNotes();
    renderTrashNotes();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashContent');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
        trashContentRef.innerHTML += " " +  getTrashNoteTemplate(indexTrashNote); 
    }
}
