let groceries = document.getElementsByClassName("groceries")[0];
let pencil = document.getElementById("pencil");
let allitems = document.getElementById("allitems");
let userinput = document.getElementById("userinput");

pencil.addEventListener("click",function(){
    allitems.innerHTML = ""
})

userinput.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    additem();
})

const additem = ()=> {
    let h2 = document.createElement("h2");
    h2.innerHTML = "-" +userinput.value;

    console.log(h2)
    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allitems.insertAdjacentElement("beforeend", h2)

    userinput.value=""
}
