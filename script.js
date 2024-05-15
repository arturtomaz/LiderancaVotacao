const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

class Candidato {
    constructor(vila, apartamento, nome) {
        this.vila = vila;
        this.apartamento = apartamento;
        this.nome = nome;
        this.votos = 0;
    }
}

// Função de clique em "Inserir candidato". Insere o candidato e limpa os inputs
c('.botaoInserirCandidatos').addEventListener('click',
function fazerNovoCandidato() {
    if(c('.preencherVila').value == '' || c('.preencherApartamento').value == '' || c('.preencherNome').value == '') {
        alert('PREENCHA TODOS OS CAMPOS ANTES DE ADICIONAR UM CANDIDATO!')
    } else if(candidatosJson.some((candidato) => {
        if(candidato.vila == c('.preencherVila').value && candidato.apartamento == c('.preencherApartamento').value){
            return true
        }
    })) {
        alert('Já há um candidato com essa combinação de vila e apartamento.')
    } else {
        let vila = Number(c('.preencherVila').value)
        let apartamento = Number(c('.preencherApartamento').value)
        let nome = c('.preencherNome').value
        let candidatoNovo = new Candidato(vila, apartamento, nome)

        candidatosJson.push({
            vila: candidatoNovo.vila,
            apartamento: candidatoNovo.apartamento,
            nome: candidatoNovo.nome,
            votos: candidatoNovo.votos
        })
        c('.areaCandidatosAntesVotacao').innerHTML = '';
        candidatosJson.map((item, index)=>{
            let candidatoAntesVotacao = c('.models .candidatoAntesVotacao').cloneNode(true);
            candidatoAntesVotacao.querySelector('.vilaCandidatoAntesVotacao').innerHTML = `Vila: ${item.vila}`;
            candidatoAntesVotacao.querySelector('.apartamentoCandidatoAntesVotacao').innerHTML = `Apartamento: ${item.apartamento}`;
            candidatoAntesVotacao.querySelector('.nomeCandidatoAntesVotacao').innerHTML = `Nome: ${item.nome}`;
        
            c('.areaCandidatosAntesVotacao').append(candidatoAntesVotacao);
        })
        c('.preencherVila').value = '';
        c('.preencherApartamento').value = '';
        c('.preencherNome').value = '';
        }
    }
)

// Função de Iniciar a Votação
c('.botaoIrVotacao').addEventListener('click',
function iniciarVotacao() {
    if (candidatosJson.length < 2) {
        alert('Insira pelo menos 2 candidatos para iniciar a votação.')
    } else {
        c('.tudoColocarCandidatos').style.display = 'none'
        // Inserir template para votar

        
        }
    }

)




/*inserindo Artur em Candidatos
function inserir () {
        candidatosJson.push({
            vila: 2,
            apartamento: 502,
            nome: 'Artur',
            votos: 0
        }) 
}
inserir()*/
