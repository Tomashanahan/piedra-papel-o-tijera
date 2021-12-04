let usuarioMarcador = 0
let computadoraMarcador  = 0
const usuarioMarcador__span = document.querySelector('.usuario__marcador')
const computadoraMarcador__span = document.querySelector('.computadora__marcador')
const resultado = document.querySelector('.cuerpo--resultado')
const roca = document.querySelector('#roca')
const papel = document.querySelector('#papel')
const tijera = document.querySelector('#tijera')

function getComputadoraEleccion(){
    const opciones = ['roca', 'papel','tijera']
    const opcionRandom = Math.floor(Math.random()*3)
    return opciones[opcionRandom]
}
/* console.log(getComputadoraEleccion()) */

function game(usuarioEleccion){
    const computadoraEleccion = getComputadoraEleccion()
    /* console.log(`la opcion elegida es => ${usuarioEleccion}`) */
    /* console.log(`la opcion elegida por la computadora es => ${computadoraEleccion}`) */
}




roca.addEventListener('click',()=>{
    /* console.log('clickiaste en roca') */
    let computadoraEleccion = getComputadoraEleccion()
    game('roca')  
    papel.style.border = '2px solid white'
    tijera.style.border = '1px solid white'
    if (computadoraEleccion == 'roca'){
        /* console.log(`Hay empate`) */
        resultado.innerHTML = 'Hay empate'
        roca.style.border = '2px solid yellow'
    } else if ((computadoraEleccion) == 'tijera'){
        /* console.log(`Roca le gana a ${computadoraEleccion}`) */
        resultado.innerHTML = `Ganaste, Roca le gana a ${computadoraEleccion}`
        usuarioMarcador++
        usuarioMarcador__span.innerHTML = usuarioMarcador
        roca.style.border = '2px solid green'
    } else{
        /* console.log(`Perdiste contra ${computadoraEleccion}`) */
        resultado.innerHTML = `Perdiste, ${computadoraEleccion} le gana a Roca`
        computadoraMarcador++
        computadoraMarcador__span.innerHTML = computadoraMarcador
        roca.style.border = '2px solid red'
    }
})

papel.addEventListener('click',()=>{
    let computadoraEleccion = getComputadoraEleccion()
    game('papel')
    roca.style.border = '1px solid white'
    tijera.style.border = '1px solid white'
    if (computadoraEleccion == 'papel'){
        resultado.innerHTML= 'Hay empate'
        papel.style.border= '2px solid yellow'
    } else if (computadoraEleccion == 'roca'){
        resultado.innerHTML= `Ganaste, Papel le gana a ${computadoraEleccion}`
        usuarioMarcador++
        usuarioMarcador__span.innerHTML = usuarioMarcador
        papel.style.border='2px solid green'
    } else{
        resultado.innerHTML=`Perdiste, ${computadoraEleccion} le gana a Papel`
        papel.style.border='2px solid red'
        computadoraMarcador++
        computadoraMarcador__span.innerHTML= computadoraMarcador
    }
})

tijera.addEventListener('click',()=>{
    let computadoraEleccion = getComputadoraEleccion()
    game('tijera')
    roca.style.border = '1px solid white'
    tijera.style.border = '1px solid white'
    if (computadoraEleccion == 'tijera'){
        resultado.innerHTML= 'Hay empate'
        tijera.style.border= '2px solid yellow'
    } else if (computadoraEleccion == 'papel'){
        resultado.innerHTML=`Ganaste, Tijera le gana a ${computadoraEleccion}`
        usuarioMarcador++
        usuarioMarcador__span.innerHTML = usuarioMarcador
        tijera.style.border = '2px solid green'
    } else{
        resultado.innerHTML= `Perdiste, ${computadoraEleccion} le gana a Tijera`
        computadoraMarcador++
        computadoraMarcador__span.innerHTML= computadoraMarcador
        tijera.style.border = '2px solid red'
    }
})
