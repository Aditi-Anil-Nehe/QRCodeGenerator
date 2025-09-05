const inquirer = require("inquirer");

async function main(){
   const{text} = await inquirer.createPromptModule([
    {type : "input", name:"text",message:"Enter a string/URL to generate QRcode:"}
   ]);
   console.log("you entered:",text);
}

main();