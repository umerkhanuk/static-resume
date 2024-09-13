
let button = document.getElementById("myButton") as HTMLButtonElement;
let div = document.getElementById("skills") as HTMLDivElement;

function showskills(){
    // div.style.display = div.style.display === 'none' ? 'block' : 'none';
}


button.addEventListener("click",showskills)

let p1 = document.getElementById("pname") as HTMLInputElement;
let quan = document.getElementById("quan") as HTMLInputElement;
let price = document.getElementById("price") as HTMLInputElement;
let printButton = document.getElementById("printbtn") as HTMLButtonElement;

let printValue = document.getElementById("data") as HTMLOutputElement;
let printValue2 = document.getElementById("data2") as HTMLOutputElement;
let printValue3 = document.getElementById("data3") as HTMLOutputElement;


function addproduct():void{
    const product = p1.value;
    const qunatity = quan.value;
    const pri = price.value;
    let pvalue = printValue.textContent = product;
    let qvalue = printValue2.textContent = qunatity;
    let privalue = printValue3.textContent = pri;


    let save:string[] = []
    save.push(pvalue);
    save.push(qvalue);
    save.push(privalue)

    console.log(save);
    
}
printButton.addEventListener("click",addproduct)

