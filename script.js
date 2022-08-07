//membuat otak permainan
function getComp(){
  let comp = Math.round(Math.random()*8)
  if(comp == 1) return "Nakano Ichika";
  if(comp == 2) return "Nakano Nino";
  if(comp == 3) return "Nakano Miku";
  if(comp == 4) return "Nakano Yotsuba";
  if(comp == 5) return "Nakano Itsuki";
  return "PICO";
}

//DOM
const tombol = document.getElementsByTagName('button')[0];
tombol.addEventListener('click', ()=>{
  const pilihan = getComp();
  setTimeout(()=>{
    const gambar = document.querySelector('.img-comp');
    gambar.setAttribute('src', 'img/'+ pilihan + '.jpg' )
    const nama = document.getElementsByTagName('h1')[1];
    nama.innerHTML = pilihan;
    const selamat = document.getElementsByTagName('h3')[0];
    selamat.innerHTML = `SELAMAT PILIHAN ANDA ADALAH 💖${pilihan}💖`;
    if(pilihan == 'PICO') 
    return  selamat.innerHTML = `YAHAHAHAHA PILIHAN KOK ${pilihan}😂`;
  },1000)
  putar()
  setTimeout(()=>{
    let lagi = confirm("mau mencoba lagi?");
    if(lagi !== true){location.reload()};
  },1200)  
});

// function putar
function putar(){
  const img = document.querySelector('.img-comp');
  const gambar = ['Nakano Ichika', 'Nakano Nino', 'Nakano Miku', 'Nakano Yotsuba', 'Nakano Itsuki', 'PICO' ]
  const nama = document.getElementsByTagName('h1')[1];
  let i = 0;
  const waktuMulai = new Date().getTime();
    setInterval(()=>{
      if(new Date().getTime() - waktuMulai > 1000){
        clearInterval;
        return;
      }
      img.setAttribute('src', 'img/'+ gambar[i++] + '.jpg' )
      nama.innerHTML = gambar[i++];
      if(i == gambar.length) i = 0;},100)
};
