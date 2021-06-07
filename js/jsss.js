
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const msgone=document.querySelector('#m1')
const msgtwo=document.querySelector('#m2')

msgone.textContent="loading"
msgtwo.textContent=""


weatherform.addEventListner('submit', (e)=>{
    e.preventDefault()

    const location= search.value

    fetch('/weather?address='+ location ).then((response=>{
    response.json().then((data)=>{
        if (data.error){
            msgone.txtContent=data.error

        }else{
            msgone.txtContent=data.location,
            msgone.txtContent=data.forecast
        }

    })
    
}))

})