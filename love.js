document.addEventListener('DOMContentLoaded', function () {
    const jsConfetti = new JSConfetti();
    const btn_si = document.getElementById("si_btn");
    const btn_no = document.getElementById("no_btn");

    let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo.",
    img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://www.gifmaniacos.es/wp-content/uploads/2019/05/gatitos-kawaii-gifmaniacos.es-19.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif"
  }];

    function randomResponse() {
        let index = Math.floor(Math.random() * random.length);
        // console.log(random[index]);
        setRandomValor(random[index]);
    }

    btn_si.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: ['😍', '🥰', '❤️', '😘'],
            emojiSize: 70,
            confettiNumber: 80,
        });

        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>¡Sabía que dirías que sí ❤️!</h1>
            <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif" alt="" />`;
    });

    btn_no.addEventListener('click', () => {
        randomResponse();
    });

    function setRandomValor(value) {
      const des=document.getElementById("descrip");
      document.getElementById('valentineImage').src = value.img;
        des.innerText= `${value.description}`;
    }
    
    
    
});
