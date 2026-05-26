const desconto = (preço, percentual) => {
    return (percentual/100)*preço
}
console.log(desconto( 1560, 80))