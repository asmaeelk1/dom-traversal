let i = 0
function color_change(e){
    let a=e.parentElement.parentElement.children[0]
        console.log(i)
        if(i == 9)
        {
            i=0
            Array.from(a.children).forEach(e => {
                e.style.backgroundColor = "red"
            })
        }
        else {
            a.children[i].style.backgroundColor="black"
            i++
        } 
    }
