const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('hola que tal')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Un gusto verte Joseline';
      texts.appendChild(p)
    }
    if (text.includes("Que tal tu clases") || text.includes('what is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Super bien gracias';
      texts.appendChild(p)
    }
    if (text.includes('Abre facebook')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Abriendo Facebook';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
