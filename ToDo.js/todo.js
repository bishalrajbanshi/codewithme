let todoinfo = [];
let prop = prompt("enter request [add,list,delete,quit]")


while (true) {
    //this is to qi=uit app
    if (prop == "quit") {
        console.log("-----quiting-----");
        break;
    }

    // all info or task
    else if (prop == "add") {
        let info = prompt("enter the task")
        todoinfo.push(info)
    }


    //list the addaddaddtaks
    else if (prop == "list") {
        console.log("----------------");
      for(let i = 0; i<todoinfo.length; i++){
        console.log(i,todoinfo[i]);
        
      }
        console.log("----------------");
    }

    //delete task
   else if (prop == "delete") {
    let idx = prompt("enter the index to delete task")
        todoinfo.splice(idx,1)
        console.log("deleted");  
    }
    prop = prompt("enter add,list,delete,quit")

}



