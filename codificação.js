var inscricao = true
var data = 6
var idade = 20
var vagas = 99

if (data != 6) {
  console.log('Não há possibilidade de cadastrar! Data inválida')
  inscricao = false
}

if (idade < 18) {
  console.log('Não há possibilidade de cadastrar! Menor de idade')
  inscricao = false
}

if (vagas > 100) {
  console.log('Não há possibilidade de cadastrar! Vagas esgotadas')
  inscricao = false
}

if (inscricao) {
  console.log('Cadastro efetuado com sucesso!')
} else {
  console.log('Houve problemas para efetuar a inscrição')
}