const fs=require("fs")


// sync
// fs.writeFileSync("./test.txt","Hey there")

// async
// fs.writeFile("./test.txt","Hey",(err)=>{})



// sync
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)


// async
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)

//     }
// })


// fs.appendFileSync("./test.txt", `Hey There\n`)

// fs.cpSync("./test.txt","./copy.txt",)

// fs.unlinkSync("./copy.txt")

// fs.mkdirSync("mydocs")