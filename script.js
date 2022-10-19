const popMenu = () => {
    const burger = document.querySelector('.humberger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
    document.querySelectorAll('.links').forEach((n) => {
      n.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      });
    });
  };
  popMenu();
  // Speakers Section
  const speakers = [
    {
      photo: 'assets/images/pic1.png',
      altText: 'Sophi Mendez image',
      name: 'Sophi Mendez',
      profession: 'Computer Engineer',
      details:
        'Benkler studied commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    },
    {
      photo: 'assets/images/pic2.png',
      altText: 'Yasmin Adi image',
      name: 'Yasmin Adi',
      profession: 'web Developer',
      details:
        'Helped brin the software to Asia and is an outspoken advocate for the open web and digital commons. in 2020, he was  inducted into the inaugural class of the Software Society/s.',
    },
    {
      photo: 'assets/images/pic3.png',
      altText: 'Yochai Benkler image',
      name: 'Yochai Benkler',
      profession: 'Designer',
      details:
        'as the main veneu for new media art production, Benkler promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts',
    },
    {
      photo: 'assets/images/pic4.png',
      altText: 'Julia Leda image',
      name: 'Julia Leda',
      profession: 'President of Young Pirates of Europe',
      details:
        "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliamnet in August.",
    },
    {
      photo: 'assets/images/pic5.png',
      altText: 'Kilnam Chon image',
      name: 'Kilnam Chon',
      profession: 'Exceutive Director of the Wikimedia',
      details:
        'Chon is the executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. is freely available in 290 languages and used by nearly half a bilion people around the world every month.',
    },
    {
      photo: 'assets/images/pic6.png',
      altText: 'Ryan Merkley image',
      name: 'Ryan Merkley',
      profession: 'CEO of Creative Commons',
      details:
        'Ryan had been leading open-source projects at the Mozila foundation such as the open source movement.',
    },
  ];

  const speakerS = document.querySelector('#featured-speaker');
  const header = document.createElement('div');
  header.className = 'titlesection';
  header.innerHTML = `<h2 class="title">Featured Speaker</h2>
  <hr/>`;
  speakerS.appendChild(header);
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerSection = document.querySelector('#speakers');
    const flextItem = document.createElement('div');
    flextItem.className = 'grid-item';
    const image = document.createElement('img');
    image.src = speakers[i].photo;
    image.alt = speakers[i].altText;
    flextItem.appendChild(image);
    const flexdiv = document.createElement('div');
    flexdiv.className = 'speaker';
    const h4 = document.createElement('h4');
    h4.textContent = speakers[i].name;
    flexdiv.appendChild(h4);
    const position = document.createElement('p');
    position.className = 'profession';
    position.textContent = speakers[i].profession;
    flexdiv.appendChild(position);
    const line = document.createElement('div');
    line.className = 'divider';
    flexdiv.appendChild(line);
    const flexdesc = document.createElement('p');
    flexdesc.className = 'description';
    flexdesc.textContent = speakers[i].details;
    flexdiv.appendChild(flexdesc);
    flextItem.appendChild(flexdiv);
    speakerSection.appendChild(flextItem);

  }
