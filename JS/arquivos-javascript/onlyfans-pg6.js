function acesso() {var recnome=document.formudados.camponome.value;
    var recidade=document.formudados.campoidade.value;
    // Para tornar os dados recebidos de um campo de input em uma variável, é necessário colocar o caminho como está acima.;
    // Recnome e recidade são abreviações de recebe o nome e recebe a idade;
    if (recidade<=18) 
        {alert (recnome+ ", Você tem "+recidade+" anos.\nPode entrar :)");
        window.open("http://fecalfunny.com/");
    }

    else {
        alert (recnome+ ", Você tem "+recidade+" anos.\nVocê é muito velho para entrar neste site, imaturidade mental é um requisito necessário.");
    }
}