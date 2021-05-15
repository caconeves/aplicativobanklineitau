const mascaraTelefone = (telefone) => {
    const textoAtual = telefone.value;
    const isCelular = textoAtual.length === 9;
    let textAjustado;
        if (isCelular) {
            const part1 = textoAtual.slice(0,5);
            const part2 = textoAtual.slice(5,9);
            textoAjustado = `${part1}-${part2}`
        } else {
            const part1 = textoAtual.slice(0,4);
            const part2 = textoAtual.slice(4,8);
            textoAjustado = `${part1}-${part2}`
        }
    telefone.value = textAjustado;
}

const tiraHifen = (telefone) => {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.place(/\-/g, '');

    telefone.value = textoAjustado;
}