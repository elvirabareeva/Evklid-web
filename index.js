window.addEventListener('DOMContentLoaded', function(){
    

    
    document.querySelector('#button').addEventListener('click', function(){
        document.querySelector('#nav-list__header').classList.toggle('active')
    })


    document.querySelector('#button').addEventListener('click', function(){
        document.querySelector('#ham').classList.toggle('line1')
    })

    document.querySelector('#button').addEventListener('click', function(){
        document.querySelector('#bur').classList.toggle('line2')
    })

    document.querySelector('#button').addEventListener('click', function(){
        document.querySelector('#ger').classList.toggle('line3')
    })

   
})

