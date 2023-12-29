function main() {
    const vitorias = parseInt(prompt("Digite o número de Vitórias:"));
    const derrotas = parseInt(prompt("Digite o número de Derrotas:"));
    
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldo);

    console.log("O herói tem saldo de" + saldo "vitórias e está no nível" + nivel.);
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function determinarNivel(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 10 && saldo < 20) {
        return "Bronze";
    } else if (saldo >= 20 && saldo < 50) {
        return "Prata";
    } else if (saldo >= 50 && saldo < 80) {
        return "Ouro";
    } else if (saldo >= 80 && saldo < 90) {
        return "Diamante";
    } else if (saldo >= 90 && saldo < 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

main();
