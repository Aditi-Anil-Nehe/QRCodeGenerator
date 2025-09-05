const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");
const { Console } = require("console");

const uploadDir = path.join(__dirname,"uploads");
if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

async function generateQRCode(text) {
   const fileName = `qrcode_${Date.now()}.png`;
   const filePath = path.join(uploadDir,fileName);
   await QRCode.toFile(filePath,text);
   return filePath;
}

async function main(){
   const{text} = await inquirer.prompt([
    {type : "input", name:"text",message:"Enter a string/URL to generate QRcode:"}
   ]);
    
   if(!text.trim()){
      console.log("No text Provided. Exiting.")
      return;
   }
   const filePath = await generateQRCode(text.trim());
   console.log("QR code saved at:", filePath);
}

main();
