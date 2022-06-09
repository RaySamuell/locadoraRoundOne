
const cep = document.querySelector('#cep')

// aqui evento perde o foco e busca os valores do cep e preprara para envio

cep.addEventListener("blur", (e)=> 
{  //arrow function

    let search = cep.value.replace(".", "")
    const options = {
        methoad: 'GET', //solicitação
        mode: 'cors', //acesso externo
        Cache: 'default'
    }

    //aqui envia o cep digitado para a via cep e retona

    fetch(`https://viacep.com.br/ws/${search}/json`, options)

    //quando se acessa uma URL com fatch api retorna se uma promessa
    //se der certo .then()
    //se dar errado . catch()

    .then(Responde => {Responde.json() 
        .then(data => mostrarDados(data))
    })

    .catch(e => console.log('Erro Inesperado' + ' ' + e,message ))

})

//alimentar todos os campos do fomulário

const mostrarDados = (result) => { //aqui busco o retorno na variavel campo
    for(const campo in result){ //aqui armazenos todo o retono na variavel campo
        if (document.querySelector("#" + campo)){//verifico se o ncampo existe
            document.querySelector("#" + campo).value = result [campo]
        }
    }
}