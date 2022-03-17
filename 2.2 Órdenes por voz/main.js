const text= document.querySelector('.texts');
const seccion1 = document.getElementById("seccion1");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const seccion4 = document.getElementById("seccion4");
const seccion5 = document.getElementById("seccion5");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{ 
    const text = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
console.log(text);
if(e.results[0].isFinal){
    if (text.includes('prende primer foco')  )
    seccion1.style.background = "url(./bulb_on.jpg)";
    
} 
if(e.results[0].isFinal){
    if (text.includes('apaga primer foco') )
    seccion1.style.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('prende segundo foco') )
    seccion2.style.background = "url(./bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('apaga segundo foco')  )
    seccion2.style.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('prende tercer foco') )
    seccion3.style.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('apaga tercer foco')  )
    seccion3.style.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('prende cuarto foco')  )
    seccion4.style.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('apaga cuarto foco')  )
    seccion4.style.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('prende quinto foco')  )
    seccion5.style.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('apaga quinto foco')  )
    seccion5.style.background = "url(./bulb_off.jpg)";
} 
});

recognition.addEventListener('end', ()=>{
    recognition.start();
  })
  
  recognition.start();