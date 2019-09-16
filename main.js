const container = $('<div class="container"> </div> ');
const done = $('<input type="checkbox" class="done" > ');
const title = $('<div class="title"></div> ');
const description = $('<div class="description"></div> ');
const control = $('<div class="control"></div> ');
const read = $('<button class="read">Read</button>');
const delet = $('<button class="delete">Delete</button>');

function createForm()  {
    control.append(read.clone());
    control.append(delet.clone());
    container.append(done.clone());
    container.append(title.clone());
    container.append(description.clone());
    container.append(control.clone());
    $("#wrapp").append(container.clone());
}

// createForm() 