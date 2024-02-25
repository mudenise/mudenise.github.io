const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VOLUMEN = document.getElementById('volumen');
const FLUJO = document.getElementById('flujo');
const FLUJO_MEDIO = document.getElementById('flujo_medio');

CALCULAR.addEventListener('click', () => {
    const PESO = parseFloat(document.getElementById('peso').value); 
    if (PESO > 0) {
        let volumen = Math.round(calcularVolumen(PESO));
        let flujo = Math.round(volumen / 24);
        let flujo_medio = Math.round(flujo * 1.5);

        ERROR.style.display = 'none';
        VOLUMEN.style.display = 'block';
        FLUJO.style.display = 'block';
        FLUJO_MEDIO.style.display = 'block';

        VOLUMEN.innerHTML= "Volumen diario: "+ volumen + 'cc';
        FLUJO.innerHTML = 'Mantenimiento: ' + flujo + 'cc/hr';
        FLUJO_MEDIO.innerHTML = 'm+m/2: ' + flujo_medio + 'cc/hr'; 
    } else {
        ERROR.style.display = 'block';
        VOLUMEN.style.display = "none";
        FLUJO.style.display = 'none';
        FLUJO_MEDIO.style.display = 'none';
    }
})

// Cálculo del volumen diario
function calcularVolumen(peso) {
    if (peso < 30){
        return calcularHolliday(peso);
    } else {
        return calcularSuperficie(peso);
    }
}

function calcularHolliday(peso){
    if (peso <=10){
        return peso*100
    } if (peso <=20){
        return 1000+ (peso-10) *50
    } if (peso >20) {
        return 1500+ (peso-20) *20
    }

}

function calcularSuperficie(peso){
        return (((peso*4)+7)/(peso+90)) *1500
}