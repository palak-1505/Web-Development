let string="";
let numbers = document.querySelectorAll(".number");
Array.from(numbers).forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                string = eval(string);
                document.querySelector('input').value=string;
            }
            catch(error){
                document.querySelector('input').value = "Error";
                string = "";
                console.error("Invalid Expression:", error);
            }
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='D'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string+=e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})

// function clear(){
//     document.querySelector('input').value="";
// }
