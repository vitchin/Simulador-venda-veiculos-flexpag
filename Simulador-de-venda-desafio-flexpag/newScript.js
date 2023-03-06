
const escolha_veiculo = document.querySelector("#tipoVeiculo");//Variavel que armazena as opcoes do select
let valorOpcao = escolha_veiculo.options[escolha_veiculo.selectedIndex];//Variavel que armazena a opcao escolhida
let valor = valorOpcao.value//o que vou usar na url valorOpcao.value;

let url_codigoMarcas = "https://parallelum.com.br/fipe/api/v1/"+valor+"/marcas";

const marcas = document.getElementById("marcaVeiculo");

async function mudarTipoVeiculo(){

    const request = await fetch(url_codigoMarcas);
    const response = await request.json();

    //console.log(response);

    const options = document.createElement("optgroup");

    response.forEach(function(marcas){
        options.innerHTML += "<option>"+marcas.nome+"</option>";
    });

    marcas.append(options);
}

async function mudarCodigoMarcas(){

    const url_codigoModelos = "https://parallelum.com.br/fipe/api/v1/"+valor+"/marcas/"+marcas.value+"/modelos";

    const request = await fetch(url_codigoModelos);
    const response = await request.json();

    console.log(response);
}
    
escolha_veiculo.addEventListener("change", ()=>{
    mudarTipoVeiculo();
    mudarCodigoMarcas();
});


/*let selectMarcas = document.querySelector("#marcasVeiculo");
let selectModelos = document.querySelector("#modeloVeiculo");
let selectAno = document.querySelector("#anoVeiculo");
let select = document.querySelector("#tipoVeiculo");

const

select.addEventListener("change", ()=>{
    console.log(select.value);
    urlDados = "https://parallelum.com.br/fipe/api/v1/"+select.value+"/marcas";
});

const codigoMarcas = "https://parallelum.com.br/fipe/api/v1/carros/marcas/"+selectMarcas.value+"/modelos";

window.addEventListener("load", async ()=>{
    
    const request = await fetch(urlDados);
    const response = await request.json();

    //console.log(response);

    const options = document.createElement("optgroup");

    response.forEach(function(marcas){
        options.innerHTML += "<option>"+marcas.nome+"</option>";
    });

    marcas.append(options);

});

selectMarcas.addEventListener("change", async function(){

    const urlModelos = "https://parallelum.com.br/fipe/api/v1/carros/marcas/"+codigoMarcas+"/modelos";
    
    const request = await fetch(urlModelos);
    const response = await request.json();

    let options = "";
    response.forEach(function(codigos){
        options += "<option>"+codigos+"</option>";
    });
     codigo.innerHTML = options;

});
*/