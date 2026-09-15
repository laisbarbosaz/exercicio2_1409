let OpcaoGenero = prompt(

    "Qual seu gênero musical favorito? \n" + 
    "1 - Rock \n" +
    "2 - Pop \n" +
    "3 - Hip Hop \n" +
    "4 - Eletrônica \n" +
    "5 - Jazz \n" +
    "6 - Clássica \n"
);

OpcaoGenero = number(OpcaoGenero);

let GenerosMusicais;

switch (OpcaoGenero) {
  case 1:
    estilo = "Rock";
    break;
  case 2:
    estilo = "Pop";
    break;
  case 3:
    estilo = "Hip Hop";
    break;
  case 4:
    estilo = "Eletrônica";
    break;
  case 5:
    estilo = "Jazz";
    break;
  case 6:
    estilo = "Clássica";
    break;
  default:
    estilo = null;
}

if (FilmeEstilo === null) {
    document.write("<h2>Selecione uma opção!</h2>");
} else {
    document.write("<h2>Seu estilo de filme favorito é: " + GenerosMusicais + "</h2>");
}