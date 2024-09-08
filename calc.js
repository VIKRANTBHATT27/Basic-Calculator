let inp = document.getElementById('input')
let btn = document.querySelectorAll('button')

for (let i of btn){
    i.addEventListener('click',(e)=>{
        
        let btn_click = e.target.innerText 
        let arr = [inp.value]
        
        if(btn_click=='C'){
            inp.value=''
        }

        else if(btn_click=='X'){
            inp.value+='*'
        }

        else if(btn_click=="BACK"){
            inp.value=inp.value.toString().slice(0,-1)
        }

        else if(btn_click=='%'){
            inp.value/=100
        }

        else if(btn_click=="1/x"){
            inp.value = (1/inp.value)
        }

        else if(btn_click=="x2"){
            inp.value**=2
        }

        else if(btn_click=="2√x"){
            inp.value=Math.sqrt(inp.value)
        }

        else if(btn_click=="( )"){
            inp.value = '(' + inp.value + ')'
        }
        
        else if(btn_click=='=') {
            inp.value=eval(inp.value)
        }

        else if(btn_click=="+/-") {
            let first_char = inp.value.toString().slice(0,1)

            if(first_char=='-'){
                inp.value = inp.value.toString().slice(1)
            }

            else{
                inp.value = '-' + inp.value
            }

        }

        else {
            inp.value+=btn_click
        }

        
        
        
    })
}