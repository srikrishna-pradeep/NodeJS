// console.log('Client side javascript file is loaded')




const locationData = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#error')
const message = document.querySelector('#message')




locationData.addEventListener('submit', (e)=>{
    e.preventDefault()

    // console.log('testing')
    // console.log(search.value)

    errorMessage.textContent = ''
    message.textContent = ''
    const url = '/weather?address=' + search.value


    // console.log(url)

    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            errorMessage.textContent = data.error
            
        }else{
            message.textContent = 'Location is ' + data.location + '. Weather Report is '+ data.forecast
        }
    })
})
})