// this loop is gonna give us all the functions we crated in the browser for the app. In this case, the autoTodos functions por de Todo MCV web.

for(var prop in autoTodo){
    if(typeof autoTodo[prop] == 'function')
        {console.log(prop)
      }
  }
  
// This function will give us the possibility to use the autoTodos functions randomly. But we have to activate it.

var rando = new function(){

    function getRandomInt(x){
        return Math.floor(Math.random() * x);
    }

    function getRandomItemIndex(){
        max = document.querySelectorAll("ul.todo-list li").length;
        if(max===0){
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max)+1;
        return x;
    }

    this.toggleAll = function(){
        console.log("toggle all");
        autoTodo.toggleAll();
    }

    this.selectRandomItem = function () {    
        x = getRandomItemIndex();
        if(x>0){    
            console.log("select item " + x);
            autoTodo.selectItemX(x);
        }
    }

    this.deleteRandomItem = function () {        
        x = getRandomItemIndex();
        if(x>0){    
            console.log("delete item " + x);
            autoTodo.deleteItemX(x);
        }
    }

    this.clearCompleted = function () {    
        console.log("clear completed");   
        autoTodo.clearCompleted();
    }

    this.filterAll = function () {   
        console.log("filter all");        
        autoTodo.filterAll();
    }

    this.filterActive = function () {        
        console.log("filter active");   
        autoTodo.filterActive();
    }

    this.filterCompleted = function () {      
        console.log("filter completed");     
        autoTodo.filterCompleted();
    }

    this.createRandomTodo = function(){
        console.log("create todo");   
        autoTodo.createTodo("random todo " +  Date.now());
    }

    this.amendRandomTodo = function(){
        x = getRandomItemIndex();
        if(x>0){  
            console.log("amend todo" + x);   
            autoTodo.amendTodo(x, "amended random todo " +  Date.now());
        }
    }
}

// Next is to create a BOT to randomly use any of the autotodo functions.

var randoBot = setInterval(function(){

	var theFunctions = [];

	for(var prop in rando){
        if(typeof rando[prop]== 'function'){
            theFunctions.push(prop)
        }
	}

	var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);

	rando[theFunctions[randomFunctionIndex]]();

},1000);


//clearInterval(randoBot) on the console to stop.