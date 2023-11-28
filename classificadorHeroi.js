let nome="", i=0, xp=0;


do{console.log("Diga o nome do heroi");
nome="Tati";
}while(nome===""&&i<=0){
  if(xp<1000){
    
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Ferro "+xp)
  }
  else if(xp===1001 || xp<=2000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Bronze "+xp)

  }
  else if(xp===2001 || xp<=5000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Prata "+xp)
  }
  else if(xp===6000 ||xp<=7000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Ouro "+xp)
  }
  else if(xp===7001 ||xp<=8000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Platina "+xp)
  }
  else if(xp===8001 || xp<=9000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Ascendente "+xp)
  }
  else if(xp===9001 || xp<=10000){
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Imortal "+xp)
  }
  else if(xp>=10001){
    
    console.log("O heroi de nome: "+nome+" Esta no nível de: "+"Radiante "+xp)

  }
    
  }
i++;
