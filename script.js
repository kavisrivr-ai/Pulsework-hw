// async function getDatas()
// {
//     return "HelloWorld"
// }
// getDatas().then((res)=>
// {
//     console.log(res)
// })
// console.log(getDatas())
    



function getDatas(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("delayed time")
            resolve()
        })
    })
}
// getDatas()
// getDatas().then((res)=>{
//     console.log(res)
// })

async function display()
{
    console.log("Start");
    await getDatas();
    console.log("end")
}
display()