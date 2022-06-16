const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')
const moreInfoButton = document.querySelectorAll('.moreInfo')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteRapper)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

Array.from(moreInfoButton).forEach((element)=>{
    element.addEventListener('click', moreInfo)
})

async function deleteRapper(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteRapper', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'stageNameS': sName,
              'birthNameS': bName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const age = this.parentNode.childNodes[5].innerText
    const origin = this.parentNode.childNodes[7].innerText
    const tLikes = Number(this.parentNode.childNodes[9].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'stageNameS': sName,
              'birthNameS': bName,
              'ageS': age,
              'originS': origin,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}


function test(){
    const x = document.getElementById('#test')
    const y = x.document.getElementsByTagName('li')

    console.log(y[0])
}
async function moreInfo(){
    const sName= this.parentNode.childNodes[1].innerText
    const moreInfoList = document.querySelector('#moreInfo')
    try{
        const response = await fetch(`api/${sName}`)
        console.log(sName)

        const data = await response.json()
        console.log(data)


        data.forEach(obj => {
            const li = document.createElement('li')
            console.log(obj)
            li.textContent = `Birth Name: ${obj.birthName}`

            moreInfoList.appendChild(li)
        })
    }catch(error){
        console.error(error)
    }   
}