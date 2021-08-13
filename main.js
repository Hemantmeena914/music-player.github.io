const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById('play');
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let  progress = document.getElementById('progress');
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progressDiv = document.getElementById("progressDiv");


//data
const songs = [{
  name: "hem2",
  title:"DEOLI MEIN DEKI RE...",
  artist: "MANSINGH MEENA",
},
  {
    name: "hem3",
    title: "KAI SOCH MEIN PDE...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem4",
    title: "DO DO BHAYLA...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem5",
    title: "JULI JULI...",
    artist: "ANU MALIK",
  },

  {
    name: "hem6",
    title: "JHUM BARABAR JHUM...",
    artist: "ZAHID NAZAN",
  },


  {
    name: "hem7",
    title: "MURGO DAGLA PR BOLIYO...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem8",
    title: "KHOL PRESSER DJ VALA...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem9",
    title: "KALE SHEET KO LENGHO...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem10",
    title: "GORA GORA GAAL...",
    artist: "MANSINGH MEENA",
  },


  {
    name: "hem11",
    title: "HALE KAKDE SAWER...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem12",
    title: "BAYHA DE ANPADH HARI TE...",
    artist: "R.C CREATION",
  },

  {
    name: "hem13",
    title:"CHAR CHAR BANGDI VALI...",
    artist: "KINJAL DAVE",
  },

  {
    name: "hem14",
    title: "GADI FOURCHUNER LAYO...",
    artist: "SUGNA BAI",
  },

  {
    name: "hem15",
    title: "BHERU JI NANA RE NANA...",
    artist: "GOKEL SHARMA",
  },

  {
    name: "hem16",
    title: "GUAJER MARE RE... ",
    artist: "LAXMAN",
  },
  {
    name: "hem17",
    title: "THETODI BOLI METI...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem18",
    title: "DHARTI KI ADAD...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem19",
    title: "KALI KALI LUGDI...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem20",
    title: "2 DIN KI ZINDGI 2 DIN KA MELA... ",
    artist: "KABIR SHARMA",
  },

  {
    name: "hem21",
    title: "LADI KI MAI MUND BOL...",
    artist: "VIKASH MEENA",
  },

  {
    name: "hem22",
    title: "MT KR MAYA KO ABHIMAN...",
    artist: "KABIR DAS",
  },

  {
    name: "hem23",
    title: "MOKO KHA DHUNDE RE BANDI...",
    artist: "KABIR DAS",
  },

  {
    name: "hem24",
    title: "LUGDI KA PLA MEIN...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem25",
    title: "DEOLI MEIN DEKI RE JANU...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem26",
    title:"SWIFT DEZIRE CAR...",
    artist: "PANKAJ SWAMI",
  },

  {
    name: "hem27",
    title: "RANJUS KO BHERU...",
    artist: "VIKASH SIMAR",
  },

  {
    name: "hem28",
    title: "PILI LUGDI KA...",
    artist: "REKHA RAO",
  },

  {
    name: "hem29",
    title: "JANU TU KALA MUNDA KI...",
    artist: "K.B SINGER",
  },

  {
    name: "hem30",
    title: "TU BARISH MEIN BULAVE...",
    artist: "ANKUSH MEENA",
  },

  {
    name: "hem31",
    title: "DIL JTKA PE JTKA DEVI...",
    artist: "RAJULAL MEENA",
  },

  {
    name: "hem32",
    title: "DIL DHAK DHAK DHADKE...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem33",
    title: "GORO GORO MUKDO...",
    artist: "MANSINGH MEENA",
  },

  {
    name: "hem34",
    title: "GANTI PR GANTI...",
    artist: "MANSINGH MEENA",
  },]


let isplaying = false;
//play function
const playMusic = ()=> {
  isplaying = true;
  music.play()
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");

}
//function pause
const pauseMusic = ()=> {
  isplaying = false;
  music.pause()
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");

}


play.addEventListener("click", ()=> {
  isplaying ? pauseMusic(): playMusic();

})



//change music data
const loadSong = (songs)=> {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `images/${songs.name}.jpg`;

}

songIndex = 0;
//loadSong(songs[0]);

const nextSong = ()=> {
  songIndex = (songIndex+1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic()
}
const prevSong = ()=> {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic()
}

//prgress  work




music.addEventListener("timeupdate", (event)=> {
  const {
    currentTime, duration
  } = event.srcElement;
  let progress_time = (currentTime/duration)*100;
  progress.style.width = `${progress_time}%`;
  //duration
  let min_duration = Math.floor(duration/60);
  let sec_duration = Math.floor(duration % 60);

  let tot_duration = `${min_duration}:${sec_duration}`;

  if (duration) {
    total_duration.textContent = `${tot_duration}`;
  }

  //current time duration
  let min_currenTime = Math.floor(currentTime/60);
  let sec_currentTime = Math.floor(currentTime % 60);


  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`
  }
  let tot_currentTime = `${min_currenTime}:${sec_currentTime}`;
  current_time.textContent = `${tot_currentTime}`;

})

//progress click
progressDiv.addEventListener("click", (event)=> {
  const {
    duration
  } = music;

  let move_progress = (event.offsetX /event.srcElement.clientWidth) *duration;

  music.currentTime = move_progress;

})

//auto next song
music.addEventListener("ended", nextSong)

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

