var opcao1 = document.querySelector("#opt1")
var opcao2 = document.querySelector("#opt2")
var opcao3 = document.querySelector("#opt3")
var opcao4 = document.querySelector("#opt4")
var opcao5 = document.querySelector("#opt5")
var opcao6 = document.querySelector("#opt6")
var docu = document.querySelector("body")


opcao1.addEventListener("change",texto())



docu.addEventListener("click",function(e){
    const texto = document.querySelector("#texto-informativo")
    const foto = document.querySelector("#sobremim-img")
    let target = e.target;
    switch (target.id){
        case "opt1":
            texto.innerHTML= "Me chamo Italo, meu principal principal hobbie é comer (kkk) e gosto de fazer isso acompanhado."
            foto.src = "./imagem/sushi.jpg"
            break;

        case "opt2":
            texto.innerHTML="Me chamo Italo, meu principal principal hobbie é comer (kkk) e gosto de fazer isso acompanhado. Ainda durante a graduação de curso finalmente entrei no mercado através de uma empresa jr de gestão e comecei a descobrir que minha missão como profissional é resolver problemas. )"
            foto.src = "./imagem/ciclo.jpg"            
            break;
        case "opt3":
            texto.innerHTML= `
            Me chamo Italo, meu principal principal hobbie é comer (kkk) e gosto de fazer isso
             acompanhado. Ainda durante a graduação de curso finalmente entrei no mercado através
             de uma empresa jr de gestão e comecei a descobrir que minha missão como profissional é
             resolver problemas. <br> <br>
            Neste periodo que atuei no mercado, percebi a carência das empresa em conectar seus processos com o mundo da tecnologia,     
            
            `
            foto.src = "./imagem/eu.png" 
            break;

    }



})


function texto(){

    console.log(this.value)
}









/*
function texto(){
    const tex = document.querySelector("#texto-informativo")

    for (var j = 0; j<opcao.length;j++){
        if (opcao[j].checked===true){
            console.log(opcao[j])
        }
    }
}

for(var i =0 ; i < opcao.length;i++){
        opcao[i].addEventListener("click",function(op){
            if (op.value ==="2"){
                console.log("verdadeiro")
            }
        
        })
    }
*/