//var nome = "Lucian Cardoso";
//var frase = "Japão e o melhor time do mundo";


//alert("Bem vindo" + nome);
//alert(frase.replace("Japão" , "Brasil"));

/*
var lista = ["maça" , "pêra" , "laranja"];
lista.push("uva");
//lista.pop();
alert(lista);

alert(lista.join(" - "));
*/

/*
var fruta = {nome:"maça", cor:"vermelha"};
alert(fruta.nome);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count++;
};
*/
 /*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
alert(d.getDate());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar = true;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://www.google.com"); // abre em outra aba
    //window.location.href = "https://www.google.com"; // abre na mesma janela.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}