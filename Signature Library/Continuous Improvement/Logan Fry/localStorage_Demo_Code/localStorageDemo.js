// getting item 
var Item = localStorage.getItem('youritem');

// getting all items
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

// pulling all from localStorage
var pull=JSON.parse(localStorage.getItem('data'))
for(var i=0; i<pull.length; i++){
    new arrayName(pull[i].AnyName, pull[i].AnyName, pull[i].AnyName)
}

// setting item
localStorage.setItem("tech", "JavaScript");


// removing item
localStorage.removeItem("tech");

// clear all items
localStorage.clear();

// search for key
for (let i = 0; i < localStorage.length; i++) {
    let storedValue = localStorage.key(i);
    console.log(`Item at ${i}: ${storedValue}`);
}

// Display query 
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));

// pulling all from localStorage
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}