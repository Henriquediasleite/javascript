function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#d1af55'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde 
        img.src = 'fototarde.png'
        document.body.style.background = '#b24001'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1d325f'
    }

}
