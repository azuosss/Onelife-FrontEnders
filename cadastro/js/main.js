const cadastrar = document.querySelector('#cadastrar');
const campo_cep = document.querySelector('#cep');

cadastrar.addEventListener('click', (conferir) => {
    let campos = [document.forms['formulario']['nome'].value, 
    document.forms['formulario']['email'].value, 
    document.forms['formulario']['senha'].value, 
    document.forms['formulario']['c_senha'].value,
    document.forms['formulario']['rg'].value,
    document.forms['formulario']['cep'].value,
    document.forms['formulario']['uf'].value,
    document.forms['formulario']['cidade'].value,
    document.forms['formulario']['bairro'].value,
    document.forms['formulario']['rua'].value,
    document.forms['formulario']['numero'].value,
    document.forms['formulario']['complemento'].value,
    ]

    if (campos.includes('')){
        alert('formulario incompleto!');
    } else {
        alert('formulario completo!');
    }
})


campo_cep.addEventListener('change', (busca_cep) =>{
    if (campo_cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${campo_cep.value}/json/`).then(data => {
            return data.json();

        }).then(get => {
            let resultado = JSON.stringify(get);
            let resultado_uf = get.uf;
            let resultado_cidade = get.localidade;
            let resultado_bairro = get.bairro;
            let resultado_rua = get.logradouro;

            let campo_uf = document.querySelector('#uf');
            let campo_cidade = document.querySelector('#cidade');
            let campo_bairro = document.querySelector('#bairro');
            let campo_rua = document.querySelector('#rua');
            
            console.log(resultado);
            campo_uf.value = resultado_uf;
            campo_cidade.value = resultado_cidade;
            campo_bairro.value = resultado_bairro;
            campo_rua.value = resultado_rua;
        })
    } else {
        console.log('ainda não');
    }
})