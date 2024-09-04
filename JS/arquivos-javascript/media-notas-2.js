function media() {let NO=document.nome_notas.aluno.value;
    let N1=document.nome_notas.nota1.value;
    let N2=document.nome_notas.nota2.value;
    let N3=document.nome_notas.nota3.value;
    // Para o nome dos elementos que fazem parte do caminho para uma variável, não se pode usar o hífen (-), mas underline funciona

    let M3T=(Number (N1) + Number (N2) + Number (N3))/3;

    if (M3T>=7)
        {alert (NO+ ", sua média trimestral é "+M3T+". Você está aprovado!");
    }

    else if (M3T>=4)
        {alert (NO+ ", sua média trimestral é "+M3T+". Você está em recuperação...");
    }

    else {
        alert (NO+ ", sua média trimestral é "+M3T+". Você está reprovado! :(");
    }
}