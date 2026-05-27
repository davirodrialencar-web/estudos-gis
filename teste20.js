const desconto = (preço, percentual) => {
    return (percentual/100)*preço
}
console.log(`O desconto é de ${desconto(130, 70)} reais.`)