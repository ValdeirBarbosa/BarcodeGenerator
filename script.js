
        
const canvas = document.getElementById("barcode");
const canvas1 = document.getElementById("barcode1");





JsBarcode("#barcode", "0000000000", {
  width: 2,
  height: 100,
  font: "Arial",
  background: "#fff",
  lineColor: "#000",
  format: "ITF"
});

