<template>
  <!-- PRODUTO ESPECIFICAÇÕES-->
  <div id="prod-espe">
    <div id="prod-name">
      Camisa Slim Em Algodão Com Manga Curta E Bolso Azul Escuro
    </div>
    <!-- CLASSIFICAÇÃO CLIENTES -->
    <div id="rate">
      <div id="rate-note">7,5</div>
      <div id="rate-star">
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- VISUALIÇÃO DO PRODUTO -->
  <div id="prod-container">
    <div id="prod-img">
      <div class="prod-arrow-container prod-arrow-container-left">
        <div id="prod-arrow">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#868686"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div class="prod-arrow-container">
        <div id="prod-arrow">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#868686"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="prod-pagi">
      <div class="prod-pagi-dots"></div>
      <div class="prod-pagi-dots selected"></div>
      <div class="prod-pagi-dots"></div>
      <div class="prod-pagi-dots"></div>
      <div class="prod-pagi-dots"></div>
    </div>
  </div>

  <!-- BOTÃO COMPRAR -->
  <div id="button-comprar">
    <div>COMPRAR</div>
  </div>

  <!-- PREÇO -->
  <div id="preco-container">
    <div id="preco-container-valor">R$179,90</div>
    <div id="preco-container-parcelas">
      ou 7x de 34,46 no cartão de crédito*
    </div>
  </div>

  <!-- COR -->
  <div id="cor-container">
    <div id="cor-container-texto">
      <div>Cor:</div>
      <div>Azul</div>
    </div>
    <div id="cor-container-cores">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <!-- TAMANHO -->
  <div id="tamanho-container">
    <div id="tamanho-container-texto">Tamanho:</div>
    <div id="tamanho-container-tamanhos">
      <div>P</div>
      <div>M</div>
      <div>G</div>
      <div>GG</div>
    </div>
  </div>

  <!-- DESCRIÇÃO -->
  <div id="desc-container">
    <div>DESCRIÇÃO DO PRODUTO</div>
    <div>Após reorganização interna para melhor refletir o estilo dos nossos clientes, ficamos felizes em anunciar que a Preston Field foi incorporada pela Marfinno, que agora também contará com um segmento especial ("Marfinno Social"). Nessa fase de transição, é possível que você receba produtos com o nome antigo da marca. Não se preocupe, os produtos permanecem os mesmos e todas as referências já estão em processo de atualização pelo nosso time. Agradecemos pela compreensão e estamos à disposição para esclarecer quaisquer dúvidas</div>
  </div>

  <!-- TEMPORÁRIO, NO FUTURO SERÁ UM COMPONENT APENAS: -->
  <div id="rodape-container">
    <div>Início</div>
    <div>Produtos</div>
    <div>Contato</div>
  </div>
  <div id="rodape-container2">
    <div>Copyright Felipe Produções - 2023</div>
    <div>Todos os Direitos Reservados</div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>

#prod-espe {
  margin: 10px;
  margin-top:70px ;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
#prod-name {
  font-weight: 700;
  font-size: 20px;
  width: 70%;
}
#rate div {
  margin: 5px;
}
#rate-note {
  font-weight: 600;
  color: rgb(161, 158, 158);
}

#prod-img {
  margin-top: 30px;
  height: 400px;
  width: 100%;
  background-color: #f1f1f1;
}
#prod-container {
  position: relative;
}
.prod-pagi {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.prod-pagi-dots {
  border-radius: 100%;
  height: 8px;
  width: 8px;
  margin: 3px;
  background-color: #e0e0e0;
  cursor: pointer;
}
.selected {
  background-color: #929292;
}

.prod-arrow-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: rgba(61, 54, 54, 0.05);
  border-radius: 100%;
  transition: ease-in-out 2s;
  top: 43%;
  right: 0px;
  margin-left: 5px;
  cursor: pointer;
}
.prod-arrow-container-left {
  left: 0px;
  transform: rotate(180deg);
}
#prod-arrow {
  margin-top: 3px;
  margin-left: 3px;
}

#button-comprar {
/* Em uma determinada parte da tela ele deirará de ser fixo */
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: #3acda1;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  cursor: pointer;
}
#button-comprar div {
  font-weight: 550;
  font-size: 20px;
  color: #fff;
}
@font-face {
  font-family: "Berkshire Swash";
  src: url("~@/assets/fonts/BerkshireSwash-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#preco-container-valor {
    font-family: 'Berkshire Swash';
    font-size: 32px;
}
#preco-container div{
    margin: 10px;
}
/* Cores */
#cor-container-texto{
    display: flex;
    margin: 5px;
}
#cor-container-texto div{
    margin-top: 10px;
    margin-bottom: 10px;
}
#cor-container-texto div:nth-child(1){
    color: grey;
}
#cor-container-texto div:nth-child(2){
    font-weight: bolder;
    margin-left: 5px;
}

#cor-container-cores{
    display: flex;
    align-items: center;
}
#cor-container-cores div{
    height: 37px;
    width: 37px;
    background-color: black;
    border-radius: 100%;
    margin-right:10px;
}
#cor-container-cores div:nth-child(2){
background-color: rgb(49, 85, 140);
border: 2px solid #fff;
outline: 2px solid black;
height: 35px;
width: 35px;
    
}
#cor-container-cores div:nth-child(3){
background-color: rgb(140, 49, 49);
}
/* TAMANHO */
#tamanho-container-texto{
    margin-left: 10px;
}
#tamanho-container-tamanhos{
    display: flex;
    margin: 5px;
}
#tamanho-container-tamanhos div{
 margin-left: 10px;
 height: 42px;
 width: 42px;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 1px #989898 solid;
}
#tamanho-container-tamanhos div:nth-child(3){
    background-color: #000;
    border: 2px #000 solid;
    color:#fff;
    font-weight: 500;
}
#tamanho-container-tamanhos div:nth-child(){}

/* DESCRIÇÃO */

#desc-container{
    margin-top: 50px;  
}
#desc-container div{
    margin: 10px;
}
#desc-container div:nth-child(1){
    font-size: 24px;
    font-weight: 600;
}
#desc-container div:nth-child(2){
    color: #626262;
    margin-top: 20px;
    font-size: 20px;
}

/* TEMPORÁRIO: */
#rodape-container{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: #eeee;
    height: 180px;
    margin-bottom: -15px;
}
#rodape-container div{
    font-size: 22px;
    color: #4E4C4C;
    padding: 7px;
}
#rodape-container2{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: #000;
    height: 80px;
}
#rodape-container2 div{
    font-size: 14px;
    color: #f9f9f9;
    padding: 7px;
}

</style>