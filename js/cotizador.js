const pase_dia=document.getElementById("pase_dia");
const pase_completo=document.getElementById("pase_completo");
const pase_dosdias=document.getElementById("pase_dosdias");

const camisa_evento=document.getElementById("camisa_evento");
const etiquetas=document.getElementById("etiquetas");

const buttonCalcular=document.getElementById("calcular");
const formRegistro=document.getElementById("registro");
let total=0;

buttonCalcular.addEventListener("click",()=>{
    const lista=document.getElementById("lista-productos");
    const suma_total=document.getElementById("suma-total");

    const precio_dia=30;
    const precio_completo=50;
    const precio_dosdias=45;
    const precio_camisa=10;
    const precio_etiquetas=2;

    const total_dia=pase_dia.value*precio_dia;
    const total_completo=pase_completo.value*precio_completo;
    const total_dosdias=pase_dosdias.value*precio_dosdias;
    const total_camisas=camisa_evento.value*precio_camisa;
    const total_etiquetas=etiquetas.value*precio_etiquetas;

    total=total_dia+total_completo+total_dosdias+total_camisas+total_etiquetas;

    let resumen="";

    if(pase_dia.value>0) resumen+="<p>"+pase_dia.value+" pases por día: $"+total_dia+"</p>";
    if(pase_completo.value>0) resumen+="<p>"+pase_completo.value+" pases Todos los Días: $"+total_completo+"</p>";
    if(pase_dosdias.value>0) resumen+="<p>"+pase_dosdias.value+" pases por Dos días: $"+total_dosdias+"</p>";
    if(camisa_evento.value>0) resumen+="<p>"+camisa_evento.value+" camisas: $"+total_camisas+"</p>";
    if(etiquetas.value>0) resumen+="<p>"+etiquetas.value+" paquetes de 10 etiquetas: $"+total_etiquetas+"</p>";
    lista.innerHTML=resumen;
    suma_total.innerHTML="$ "+total;
})

formRegistro.addEventListener("submit",(e)=>{
    if(total>0) alert("Muchas gracias por registrarse");
    else {
        e.preventDefault();
        alert("Seleccione al menos un artículo y pulse CALCULAR");
    }
})