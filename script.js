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
    const descr= document.querySelector("#descricao-img")
    let target = e.target;
    switch (target.id){
        case "opt1":
            texto.innerHTML= `
            <li>Olá,  sou um estudante de desenvolvimento Web que decidiu fazer uma transição de carreira
            !!! Amo sair para comer kkk e nos momentos livres gosto de uma boa 
               série ou filme.</li>
            `
            foto.src = "./imagem/sushi.jpg"
            descr.textContent= "Minha comida preferida é sushi, claro !"
            break;

        case "opt2":
            texto.innerHTML=`
            <li>Olá,  sou um estudante de desenvolvimento Web que decidiu fazer uma transição de carreira
            !!! Amo sair para comer kkk e nos momentos livres gosto de uma boa 
               série ou filme.</li>
            
            <li>
            Trabalhei como consultor e gerente de projetos por 2 anos em uma empresa jr, lá desenvolvi projetos 
            de estruturação de equipe comercial, gestão financeira, 
            controle de custos, definição de layout fabril, implementação de CRMs e sistema de informações.
            </li>
            
            `
            foto.src = "./imagem/ciclo2.jpg"
            descr.textContent= "Comemoração de mais um projeto fechado com essa equipe S2"            
            break;
        case "opt3":
            texto.innerHTML= `
            <li>Olá,  sou um estudante de desenvolvimento Web que decidiu fazer uma transição de carreira
            !!! Amo sair para comer kkk e nos momentos livres gosto de uma boa 
               série ou filme.</li>
            
            <li>
            Trabalhei como consultor e gerente de projetos por 2 anos em uma empresa jr, lá desenvolvi projetos 
            de estruturação de equipe comercial, gestão financeira, 
            controle de custos, definição de layout fabril, implementação de CRMs e sistema de informações.
            </li>
            
            <li>
            Já me aventurei no mundo do empreendedorismo, eu e mais 3 amigos no auge da pandemia criamos um software de 
            gestão logística para pequenas transportadoras. Se ficou curioso, <a  target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiNWQ3MGU0YmYtYTcxNy00N2JiLTk4ZjMtN2U5MTdhZjY2NTZhIiwidCI6IjA0MjRmNjc4LWJkNWUtNDNhMC1iZmZlLWYzYTYxMWE0MmRhNiJ9&pageName=ReportSectiona13988eec2f68737ffcc">acesse nossa solução aqui</a>

            </li>
            `
            foto.src = "./imagem/provecto.png"
            descr.textContent= "Capa do sistema desenvolvido para as transportadoras" 
            break;

        case "opt4":
            texto.innerHTML= `
                    <li>Olá,  sou um estudante de desenvolvimento Web que decidiu fazer uma transição de carreira
            !!! Amo sair para comer kkk e nos momentos livres gosto de uma boa 
               série ou filme.</li>
            
            <li>
            Trabalhei como consultor e gerente de projetos por 2 anos em uma empresa jr, lá desenvolvi projetos 
            de estruturação de equipe comercial, gestão financeira, 
            controle de custos, definição de layout fabril, implementação de CRMs e sistema de informações.
            </li>
            
            <li>
            Já me aventurei no mundo do empreendedorismo, eu e mais 3 amigos no auge da pandemia criamos um software de 
            gestão logística para pequenas transportadoras. Se ficou curioso, <a  target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiNWQ3MGU0YmYtYTcxNy00N2JiLTk4ZjMtN2U5MTdhZjY2NTZhIiwidCI6IjA0MjRmNjc4LWJkNWUtNDNhMC1iZmZlLWYzYTYxMWE0MmRhNiJ9&pageName=ReportSectiona13988eec2f68737ffcc">acesse nossa solução aqui</a>
            </li>
            
            <li>Fui líder do time de dados em uma ONG chamada ROUTE, tinha como função tratar, armazenar e processar dados de diversos projetos como o 100Resíduos (Doação de cestas básicas e itens de higiene com destinação correta dos resíduos para 900 famílias em mais de 20 comunidades no Brasil durante o período de pandemia) , e o Clean Up Day onde foram coletados mais de 1 tonelada de resíduos e 
            destinados a centros de coleta seletiva, deseja saber mais ?<a  target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiYmIyMzlkZjUtNTFiZi00MDY5LTkyNDItZTFiOTVkN2NiYmFmIiwidCI6IjA0MjRmNjc4LWJkNWUtNDNhMC1iZmZlLWYzYTYxMWE0MmRhNiJ9">Acessa o relatório com os resultados</a>
            </li>
            `
            foto.src = "./imagem/cleanupday2.png"
            descr.textContent= "Quantidade só de sandálias encontradas na praia do Maraú no projeto Clean Up Day" 
            break;
        break;

        case "opt5":
            texto.innerHTML= `
                    <li>Olá,  sou um estudante de desenvolvimento Web que decidiu fazer uma transição de carreira
            !!! Amo sair para comer kkk e nos momentos livres gosto de uma boa 
               série ou filme.</li>
            
            <li>
            Trabalhei como consultor e gerente de projetos por 2 anos em uma empresa jr, lá desenvolvi projetos 
            de estruturação de equipe comercial, gestão financeira, 
            controle de custos, definição de layout fabril, implementação de CRMs e sistema de informações.
            </li>
            
            <li>
            Já me aventurei no mundo do empreendedorismo, eu e mais 3 amigos no auge da pandemia criamos um software de 
            gestão logística para pequenas transportadoras. Se ficou curioso, <a  target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiNWQ3MGU0YmYtYTcxNy00N2JiLTk4ZjMtN2U5MTdhZjY2NTZhIiwidCI6IjA0MjRmNjc4LWJkNWUtNDNhMC1iZmZlLWYzYTYxMWE0MmRhNiJ9&pageName=ReportSectiona13988eec2f68737ffcc">acesse nossa solução aqui</a>
            </li>
            
            <li>Fui líder do time de dados em uma ONG chamada ROUTE, tinha como função tratar, armazenar e processar dados de diversos projetos como o 100Resíduos (Doação de cestas básicas e itens de higiene com destinação correta dos resíduos para 900 famílias em mais de 20 comunidades no Brasil durante o período de pandemia) , e o Clean Up Day onde foram coletados mais de 1 tonelada de resíduos e 
            destinados a centros de coleta seletiva, deseja saber mais ?<a  target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiYmIyMzlkZjUtNTFiZi00MDY5LTkyNDItZTFiOTVkN2NiYmFmIiwidCI6IjA0MjRmNjc4LWJkNWUtNDNhMC1iZmZlLWYzYTYxMWE0MmRhNiJ9">Acessa o relatório com os resultados</a>
            </li>

            <li>
            Durante meu estágio, conseguir automatizar utilizando RPA
            metade das minhas funções reduzindo meu tempo em tarefas manuais, repetitivas e chatas em 50%. 
            </li>
            `
            foto.src = "./imagem/celpe.jpg"
            descr.textContent= "Vísita de campo para identificar pontos quentes na rede" 
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