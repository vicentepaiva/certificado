function gerar() {
  num=0;
  
  while(num<1000000) {
    HTMLDoCertificado = emitirCertificado(inputNome.value);
    num+=1;
  }
  
  listaLink = [
    "https://codepen.io/vicentepaiva/pen/KKdwaLO?editors=1010",
    "https://codepen.io/vicentepaiva/pen/gOaOKba",
    "https://codepen.io/vicentepaiva/pen/WNQePdz",
    "https://codepen.io/vicentepaiva/pen/ExVYgpd",
    "https://codepen.io/vicentepaiva/pen/XWmrJEB",
    "https://codepen.io/vicentepaiva/pen/yLNmLgO",
    "https://codepen.io/vicentepaiva/pen/oNXRdGj",
    "https://codepen.io/vicentepaiva/pen/VwLOxjL",
    "https://codepen.io/vicentepaiva/pen/gOpJvWj",
    "https://codepen.io/vicentepaiva/pen/jOPJgjg",
  ];
  listaNome = [
    "Certificado",
    "Appaula 09",
    "Botão Like",
    "Cálculo maçã",
    "Loteria app",
    "Ficha academia",
    "Bandeira Japão",
    "Pokebola",
    "Curriculo",
    "Informe Idade",
  ];
  
  listaLinkHtml = "";
  nLink = 0;
  while(nLink < 10) {
    
    listaLinkHtml = `<li><a href="${listaLink[nLink]}" target="_blank">${listaNome[nLink]}</a></li>`+listaLinkHtml;
    nLink+=1;
  }
  
  document.body.innerHTML = ` ${HTMLDoCertificado}
    <ol>
      ${listaLinkHtml}
    </ol>
  `
  
  window.print();
}
  



  