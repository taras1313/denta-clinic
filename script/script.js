window.onload = function(){
    let main = document.querySelector('main');
    let counter = 2;
    setInterval(function(){
        if(counter===5){
            main.classList.remove('parallax-bg-v2','parallax-bg-v3','parallax-bg-v4')
            counter = 1;
            main.classList.add('parallax-bg-v'+counter);


        } else {
            main.classList.add('parallax-bg-v'+counter);
            counter++
        }
    },7000)

    let btns = document.querySelectorAll('.card a');
    let fastHelp = document.querySelector('.contact a');
    let commentar = document.querySelector('textarea')
    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function(){
            let linker = this.parentElement.children[0].innerText;
            commentar.innerText = 'Доброго дня, мене цікавить '+linker;
        }
    }
    fastHelp.onclick = function(){
        let text = this.innerText;
        commentar.innerText = 'Доброго дня, мені потрібен ' +text;
    }

    $('.carousel').carousel({
        interval: 2000
    })

}