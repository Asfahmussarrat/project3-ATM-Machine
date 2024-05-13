#!/usr/bin/env node

import inquirer from "inquirer";
// initialize user balance and pincode
let myBalance = 5000;// dollor
let mypin = 1234;


let pinAnswer = await inquirer.prompt([
  {
    name:"pin",
    type:"number",
    message:"Enter your pin code:",
  }  
]);
if(pinAnswer.pin === mypin){
    console.log("pin is correct,Login Successfully!");
  }


    let operationAns = await inquirer.prompt([
        {
        name:"operation",
        type:"list",
        message:"select an operation!",
        choices:["withDraw Amount","check Balance"],
        }
    ]);
    if(operationAns.operation === "withDraw Amount"){

    
      let withDrawAns = await inquirer.prompt([

        {

          name:"withDrawMethod",
          tyoe:"list",
          message:"select a fast cash Mehod",
          choices:["fastCash","Enter Amount" ],


        
        }
        ])
    
        if(withDrawAns.withDrawMethod === "fastCash"){
          let fastCashAns = await inquirer.prompt([
            {
              name:"fastCash",
              type:"list",
              message:"select Amount",
              choices:[1000,2000,5000,10000],
            
          }
        ])
        if(fastCashAns.fastCash > myBalance)
        {
          console.log("insufficient balance");

        }
        else {
          myBalance -= fastCashAns.fastCash;
          console.log(`${fastCashAns.fastCash} withdraw successfully`);
          console.log(`your remaining balance is:${myBalance}`);
        }
      }
      else if(withDrawAns.withDrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
          {
            name:"amount",
            type:"number",
            message:"Enter the amount to withDraw",

        }
      ])
        if(amountAns.amount > myBalance){
          console.log("insufficient balance! sorry");
        }else{
          myBalance -= amountAns.amount;
          console.log(`${myBalance} withDraw successfully!`);
          console.log(`your remaining balance is:${myBalance}`);
        }
      }else if(operationAns.operation === "check baiance"){
        console.log(`your account balance is:${myBalance}`);}


  else{
    console.log("pin is incorrect,try again");
  }

    }

        

        
