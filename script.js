

const canvas = document.getElementById("barcode");
const canvas1 = document.getElementById("barcode1");

const btn = document.querySelector('.container-btn Button')

const barcodeTitle = document.querySelector('#titlulo')
const barcodeData = document.querySelector('#conteudo')
const barcodeGallery = document.querySelector(".barcode-gallerycontainer")




let barcodelist = []




barcodeData.addEventListener('change',()=>{

  codigo = barcodeData.value

})




btn.addEventListener('click', (event) => {
  
  barcopdeTitulo = barcodeTitle.value
  barcodeBody = barcodeData.value

  event.preventDefault();
  facrotyTag(barcodeData.value)

  console.log(typeof(barcodeBody))

})


JsBarcode(".barcode","88888888", {
  width: 2,
  height: 100,
  font: "Arial",
  background: "#fff",
  lineColor: "#000",
  format: "ITF"
});



function facrotyTag(tituloText) {

  const barcodeCard = document.createElement("div");
  barcodeCard.className = "barcode-card"
  
  const barcodeProfile = document.createElement("div");
  barcodeProfile.className = "profile"
  
  const titulo = document.createElement("p");
  titulo.innerText=tituloText
  
  const svgBarcode = document.createElement("svg");
  svgBarcode.className="barcode"
  
  
  barcodeCard.appendChild(barcodeProfile)
  barcodeProfile.appendChild(titulo)
  barcodeCard.appendChild(svgBarcode)

  let barcodeG = document.querySelector('.barcode')
  
  barcodelist.push(barcodeG)

console.log(barcodelist)







}
