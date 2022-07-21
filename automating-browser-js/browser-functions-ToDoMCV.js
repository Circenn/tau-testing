function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector('#toggle-all').click();
}

function selectItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
}

function deleteItemX(x) {
    document.querySelector("ul.todo-list li:nth-child(" + x + ") button.destroy").click()
}

function clearComplete() {
    document.querySelector("button.clear-completed").click();
}

function filterCompleted() {
    location.hash = "/completed";
}

function filterAll() {
    location.hash = "/";
}

function filterActive() {
    location.hash = "/active";
}

function createTodo(name) {
    document.querySelector(".new-todo").value = name;
    document.querySelector(".new-todo").dispatchEvent(new Event('change',{
        'bubbles': true
    }));
}

function amendTodo(x, amendedValue) {
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick',{
        'bubbles': true
    }));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = amendedValue;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}

// In order to not interfere with the native fuctions of any app we can use OBJECTS to use our custom functions.
// the object above contains the functions clickItem and toggleAll 

var autoTodo = new function() {

    this.clickItem = function(item) {
        item.click();
    }

    this.toggleAll = function() {
        document.querySelector('#toggle-all').click();
    }

    this.selectItemX = function(x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
    }

    this.deleteItemX = function(x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy').click()
    }

    this.clearCompleted = function() {
        document.querySelector('button.clear-completed').click();
    }

    this.filterCompleted = function() {
        location.hash = "/completed";
    }

    this.filterAll = function() {
        location.hash = "/";
    }

    this.filterActive = function() {
        location.hash = "/active";
    }

    this.createTodo = function(name) {
        document.querySelector('input.new-todo').value = name;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

    this.amendTodo = function(x, amendedValue) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = amendedValue;
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
    }

}


//setTimeout says, "I will run this block of code in this number of time, and I'll do it once."
//setInterval keeps going. Every 500 milliseconds, if that's what we set it to, it keeps running the same block of code.

// Generate 100 toDos with setTimeout simulating the time an user will take to do it. SETTIMEOUT creates after the set amount of time.
for (let x = 1; x <= 100; x++) {
    setTimeout(autoTodo.createTodo, x * 100, "todo " + x)
}

// We can also use the createTodo functions in the same snippet and writte it with the setTimeout so we don't have to run a lot of the snippets at the same time.

for (let x = 1; x <= 100; x++) {
    const timeoutId = setTimeout(function(name) {
        document.querySelector(".new-todo").value = name;
        document.querySelector(".new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));

        clearTimeout(timeoutId)

    }, x * 100, "todo " + x)
}

// Create an interval. Hello written on the console every 1000 milisecon.

var intervalId = setInterval(function(){console.log("hello")},1000);

// To clear that

clearInterval(intervalId)

// Create Todos with a bot using setInterval. SETINTERVAL Creates every "x" milliseconds.

var botTodoCount = 0;

var creatorBot = setInterval(function() {
            document.querySelector(".new-todo").value = "todo " + botTodoCount;
            document.querySelector(".new-todo").dispatchEvent(new Event('change',{'bubbles': true }));
        
            botTodoCount++;

            if(botTodoCount>=100){
                clearInterval(creatorBot);
            }
        }, 500)

// We can use bookmarklets from the browser to activate functions when testing. Is a method to easly and quickly use custom functions.
// We just have to create a new bookmarklet with the javascript: on the beggining of the code.

// this is the formula

// javascript: (fucntions(){

//    //some code 

// })()

javascript: (function() {
    for (let x = 1; x <= 100; x++) {
        setTimeout(function(name) {
            document.querySelector(".new-todo").value = name;
            document.querySelector(".new-todo").dispatchEvent(new Event('change',{'bubbles': true}));
        }, x * 100, "todo " + x)
    }
    })()

// Combine prompt and if statement to generate todos using the value that the user puts on the prompt. This means that if we need to test just 5 values, we can just write it down on the prompt.

javascript: (function() {

    max = prompt("how many?");
    if(max){
        for (let x = 1; x <= max; x++) {
            setTimeout(function(name) {
                document.querySelector(".new-todo").value = name;
                document.querySelector(".new-todo").dispatchEvent(new Event('change',{'bubbles': true
                }));
            }, x * 100, "todo " + x)
        }
    }     
}
)()
