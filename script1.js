const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VOLUMEN = document.getElementById('volumen');
const FLUJO = document.getElementById('flujo');
const FLUJO_MEDIO = document.getElementById('flujo_medio');
const ID= document.getElementById('id');

CALCULAR.addEventListener('click', () => {
    const PESO = parseFloat(document.getElementById('peso').value); 
    if (PESO > 30) {
        let volumen= Math.round(calcularSuperficie(PESO))
        let volumenB= Math.round(calcularSup(PESO))
        let flujoA= Math.round(volumen/24)
        let flujoB= Math.round(volumenB/24)
        let flujo_medioA= Math.round(flujoA*1.5)
        let flujo_medioB= Math.round(flujoB*1.5)

        ERROR.style.display = 'none';
        VOLUMEN.style.display= 'block';
        FLUJO.style.display = 'block';
        FLUJO_MEDIO.style.display = 'block';
        ID.style.display= 'block';

        ID.innerHTML= "Por 1500" + " | " +"Por 2000"
        VOLUMEN.innerHTML= volumen + 'cc' + " | "+ volumenB+'cc';
        FLUJO.innerHTML = flujoA + 'cc/hr'+" | " + flujoB + 'cc/hr';
        FLUJO_MEDIO.innerHTML = flujo_medioA + 'cc/hr'+ " | "+ flujo_medioB + 'cc/hr'; 

     } else if (PESO>0){
        let volumen = Math.round(calcularHolliday(PESO));
        let flujo = Math.round(volumen / 24);
        let flujo_medio = Math.round(flujo * 1.5);

        ERROR.style.display = 'none';
        VOLUMEN.style.display= 'block';
        FLUJO.style.display = 'block';
        FLUJO_MEDIO.style.display = 'block';
        ID.style.display= 'none';   

        VOLUMEN.innerHTML= "Volumen diario: "+ volumen + 'cc';
        FLUJO.innerHTML = 'Mantenimiento: ' + flujo + 'cc/hr';
        FLUJO_MEDIO.innerHTML = 'm+m/2: ' + flujo_medio + 'cc/hr'; 
     } 
    else {
        ERROR.style.display = 'block';
        VOLUMEN.style.display = "none";
        FLUJO.style.display = 'none';
        FLUJO_MEDIO.style.display = 'none';
        ID.style.display= 'none';
    }
})

function calcularHolliday(peso){
    if (peso <=10){
        return peso*100
    } else if (peso <=20){
        return 1000+ (peso-10) *50
    } else {
        return 1500+ (peso-20) *20
    }

}

function calcularSuperficie(peso){
         return (((peso*4)+7)/(peso+90)) *1500
}

function calcularSup(peso){
    return (((peso*4)+7)/(peso+90)) * 2000
}