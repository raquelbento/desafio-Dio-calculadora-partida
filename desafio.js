function start(victories, defeats){
    let result = victories - defeats
    return result
}

function rank() {
    let resultRank = start(100, 20)
    let level = ""
    if (resultRank <= 10) {
      level = "Ferro"
    } if (resultRank <= 20) {
      level = "Bronze"
    } if (resultRank <= 50) {
      level = "Prata"
    } if (resultRank <= 80) {
      level = "Ouro"
    } if (resultRank <= 90) {
      level = "Diamante"
    } if (resultRank <= 100) {
      level = "Lendário"
    } if (resultRank >= 100) {
      level = "Imortal"
    }
    return `O Herói tem o saldo de ${resultRank} e está no nível  ${level}`
  }
  
  console.log(rank())
