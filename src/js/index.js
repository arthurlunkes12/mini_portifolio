/*
OBJETIVO: selecionar Aba q esta escondida,e mostrar o 
conteudo dela. e esconder  o conteudo da aba primaria.
*/

const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        };

        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")

        const informacaoSelecionada = document.querySelector(".infos.selecionado")
        informacaoSelecionada.classList.remove("selecionado")

        const idDoElementoDeInformacoesDaAba = `infos-${aba.id}`
        console.log(idDoElementoDeInformacoesDaAba)

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")

    });
});