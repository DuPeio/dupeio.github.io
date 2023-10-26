function main() {
  //Creation des variables
  const btnLightning = document.querySelector(".btn");
  const mode = document.querySelector(".mode");
  const meBtn = document.querySelector(".meBtn");
  const etudeBtn = document.querySelector(".etudeBtn");
  const experienceBtn = document.querySelector(".experienceBtn");
  const competenceBtn = document.querySelector(".competenceBtn");
  const contactBtn = document.querySelector(".contactBtn");
  const me = document.querySelector(".me");
  const etude = document.querySelector(".etude");
  const experience = document.querySelector(".experience");
  const competence = document.querySelector(".competence");
  const contact = document.querySelector(".contact");
  const subtitle = document.querySelector(".subtitle");
  let url = location.href; // Récupère l'URL complète
  let parts = url.split("/"); // Divise l'URL en parties distinctes
  let lastPart = parts[parts.length - 1];  // Récupère la dernière partie
  const btnArrowOne = document.querySelector(".flecheUn");
  const btnArrowTwo = document.querySelector(".flecheDeux");
  const btnArrowGen = document.querySelector(".flecheGen");
  
  //Mode Sombre
  mode.addEventListener("click", () => {
    if (
      mode.contains(
        document.querySelector('img[src="./images/icone/moonV2.png"]')
      )
    ) {
      console.log("c'est le soleil donc on passe à la lune");
      mode.innerHTML =
        '<img src="./images/icone/sunV2.png" alt="Icone Soleil" id="mode1" title="Mode Clair">';
      document.querySelector("header").style.backgroundColor = "#000338";
      document.querySelector(".derriere").style.color = "White";
      btnLightning.innerHTML =
        '<img src="./images/icone/flechev3.png" alt="Icone Lune" id="btn"></img>';
      console.log(document.querySelector(".mode"));
    } else {
      console.log("c'est la lune donc on passe au soleil");
      mode.innerHTML =
        '<img src="./images/icone/moonV2.png" alt="Icone soleil" id="mode2" title="Mode Sombre">';
      document.querySelector("header").style.backgroundColor = "White";
      document.querySelector(".derriere").style.color = "#000338";
      btnLightning.innerHTML =
        '<img src="./images/icone/flechev2.png" alt="Icone fleche" id="btn"></img>';
      console.log(document.querySelector(".mode"));
    }
  }); 
  
  //Eclair qui descend la page
  btnLightning.addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector("#debut").offsetTop,
      left: 0,
      behavior: "smooth",
    });
  });
  
  //Nav barre/ Gestion du contenu avec nav bar
  meBtn.addEventListener("click", () => {
    subtitle.innerHTML = "Et voici mon site web CV !";
    me.classList.remove("hide");
    meBtn.classList.add("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  });
  
  etudeBtn.addEventListener("click", () => {
    subtitle.innerHTML = "Partie Etude";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.remove("hide");
    etudeBtn.classList.add("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  });
  
  experienceBtn.addEventListener("click", () => {
    subtitle.innerHTML = "Partie Expérience";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.remove("hide");
    experienceBtn.classList.add("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  });
  
  competenceBtn.addEventListener("click", () => {
    subtitle.innerHTML = "Partie Compétence";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.remove("hide");
    competenceBtn.classList.add("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  });
  
  contactBtn.addEventListener("click", () => {
    subtitle.innerHTML = "Partie Contact";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.remove("hide");
    contactBtn.classList.add("current");
  });
  
  // Gestion du contenu avec index
  if (lastPart === "main.html#me") {
    subtitle.innerHTML = "Et voici mon site web CV !";
    me.classList.remove("hide");
    meBtn.classList.add("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  } else if (lastPart === "main.html#etude") {
    subtitle.innerHTML = "Partie Etude";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.remove("hide");
    etudeBtn.classList.add("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  } else if (lastPart === "main.html#xp") {
    subtitle.innerHTML = "Partie Expérience";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.remove("hide");
    experienceBtn.classList.add("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  } else if (lastPart === "main.html#competence") {
    subtitle.innerHTML = "Partie Compétence";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.remove("hide");
    competenceBtn.classList.add("current");
    contact.classList.add("hide");
    contactBtn.classList.remove("current");
  } else if (lastPart === "main.html#contact") {
    subtitle.innerHTML = "Partie Contact";
    me.classList.add("hide");
    meBtn.classList.remove("current");
    etude.classList.add("hide");
    etudeBtn.classList.remove("current");
    experience.classList.add("hide");
    experienceBtn.classList.remove("current");
    competence.classList.add("hide");
    competenceBtn.classList.remove("current");
    contact.classList.remove("hide");
    contactBtn.classList.add("current");
  }
  
  // Fleche qui remonte
  const pixelDebut = debut.offsetTop;
  btnArrowGen.addEventListener("click", () => {
    btnArrowGen.classList.toggle("flecheTurn");
    btnArrowOne.classList.toggle("flecheDiscoUn");
    btnArrowTwo.classList.toggle("flecheDiscoDeux");
    btnArrowOne.addEventListener("click", () => {
      window.scrollTo({
        top: pixelDebut,
        left: 0,
        behavior: "smooth",
      });
    });
    btnArrowTwo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  });
  
  window.addEventListener("scroll", () => {
    if (scrollY > pixelDebut) {
      btnArrowGen.classList.remove("flecheHideGen");
    } else {
      btnArrowGen.classList.add("flecheHideGen");
      btnArrowGen.classList.remove("flecheTurn");
      btnArrowOne.classList.remove("flecheDiscoUn");
      btnArrowTwo.classList.remove("flecheDiscoDeux");
    }
  });
  
  heart.addEventListener("click", () => {
    if (heart.innerHTML === `<img id="heartImg" src="./images/icone/heartv2.png" alt="Icone coeur">`) {
      heart.innerHTML = `<img id="heartImg" src="./images/icone/heart.png" alt="Icone coeur">`;
    } else if (heart.innerHTML === `<img id="heartImg" src="./images/icone/heart.png" alt="Icone coeur">`) {
      heart.innerHTML = `<img id="heartImg" src="./images/icone/heartv2.png" alt="Icone coeur">`;
    }
  });
}

window.onload = main;


