const titleBarcode = document.querySelector('.input-wrapper #titulo')
const dataBarcode = document.querySelector('.input-wrapper #conteudo')
const btnBarcode = document.querySelector('.container-btn button')
const barcodeList = document.querySelector('.data-container .barcode-table')

let print = document.querySelector('header svg')


const teste = document.querySelector('.form-container')
const teste2 = document.querySelector('.data-container')

const barcodeGallery = document.querySelector('#barcode-gallerycontainer')

// let barcodes = []
let pagecount = 0

btnBarcode.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(titleBarcode.value, String(dataBarcode.value).padStart(8, "0"))
  barcodeList.innerHTML += ` <div class="data-row">
    <div class="title">${titleBarcode.value}</div>
    <div class="barcode-data" id=${String(dataBarcode.value).padStart(8, "0")}>${String(dataBarcode.value).padStart(8, "0")}</div>
</div>`

  let barcodes = [
    {
      titulo: String(titleBarcode.value),
      itf: String(dataBarcode.value).padStart(8, "0")
    }
  ]

  
  for (let bar of barcodes) {
    const el = document.createElement("canvas");
    el.setAttribute("id", bar.titulo.split(' ').join('') + bar.itf);

    const card = document.createElement("div")
    card.classList.add("barcode-card")
    const cardProfile = document.createElement("div")
    cardProfile.classList.add("barcode-profile")
    const barUserName = document.createElement("h1")
    barUserName.textContent = bar.titulo

    card.appendChild(cardProfile)
    cardProfile.appendChild(barUserName)
    barcodeGallery.appendChild(card);
    card.appendChild(el)
    // pagecount++
    // if(pagecount%21==0){
    //   card.className.add('breakPage')
    // }

    JsBarcode(`#${bar.titulo.split(' ').join('')}${bar.itf}`, bar.itf, {
      width: 2,
      height: 50,
      font: "Arial",
      background: "#f5f5f5",
      lineColor: "#000",
      format: "ITF",
    });
  }
})



print.addEventListener('click',()=>{

  const main = document.querySelector('main')
  const printPage = document.createElement('div')
  printPage.textContent= pagecount

  // main.appendChild(printPage)
  printPage.setAttribute('id','print-page')

  printJS({printable: 'barcode-gallerycontainer', type: 'html', css: 'style.css', properties: {
    marginTop: '90mm',
    marginBottom: '90mm',
    marginLeft: '10mm',
    marginRight: '10mm'
  }})
  let barcodeArr = document.querySelectorAll(".barcode-card")
  for (let bcode of barcodeArr){
    // console.log(bcode)
  }

})


