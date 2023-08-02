let one =document.getElementById('display')

function multiloopone(){
    one.innerHTML=''
   const inputOne =document.getElementById('inputOne').value
    for (let i=1; i<=inputOne;i++){
    let line = ''
    for (let j=1; j<=inputOne;j++){
        line += `*`
    }
    one.innerHTML+= line +"<br>"}
}

function multilooptwo(){
    one.innerHTML=''
   const inputTwo =document.getElementById('inputTwo').value
    for (let i=1; i<=inputTwo;i++){
    let line = ''
    for (let j=1; j<=i;j++){
        line += `*`
    }
    one.innerHTML+= line +"<br>"}
    
}
