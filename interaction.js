/*
let buffer;
const audioCtxt = new AudioContext();
*/

const navButtons = Array.from(document.getElementsByClassName(`panel-button`));
const dropDownMenuButton = document.querySelector(`#dropdown-menu>button`);
const skillsButtons = Array.from(document.getElementsByClassName(`skill-button`));
const skillsArticles = Array.from(document.querySelectorAll(`#skills>section:nth-of-type(2)>article`));
const windows = Array.from(document.querySelectorAll(`.window`));
const toggles = Array.from(document.querySelectorAll(`input[type="radio"]`));

windows.forEach((w)=>{
  w.children[1].style.color = `transparent`;
})

dropDownMenuButton.addEventListener(`click`, ()=>{
  dropDownMenuButton.classList.add(`active`);
  document.querySelector(`#dropdown-menu>menu`).style.display = `block`;
});

navButtons.forEach((button)=>{
  button.addEventListener(`click`, ()=>{
    document.getElementById(button.dataset.panel).scrollIntoView({behavior:`smooth`, block: `center`});
  });
});

skillsButtons.forEach((skill)=>{
  skill.addEventListener(`click`, ()=>{
    for(const button of skillsButtons){
      if(skill.dataset.skill === button.dataset.skill){
        button.classList.add(`selected`);
        document.getElementById(button.dataset.skill).style.display = `block`;
      }else{
        button.classList.remove(`selected`);
        document.getElementById(button.dataset.skill).style.display = `none`;
      }
    }
  });
});

windows.forEach((w)=>{
  w.addEventListener('mouseenter', ()=>{
    w.style.opacity = `1`;
    w.style.boxShadow = `8px 8px var(--gray-100)`;
    w.children[0].style.backgroundColor = `var(--orange-100)`;
    w.children[0].style.color = `var(--black-200)`;
    w.children[1].style.color = `var(--white-100)`;
  });
});

windows.forEach((w)=>{
  w.addEventListener(`mouseleave`, ()=>{
    w.style.opacity = `0.5`;
    w.children[0].style.backgroundColor = `var(--black-200)`;
    w.style.boxShadow = `none`;
    w.children[0].style.color = `var(--white-100)`;
    w.children[1].style.color = `transparent`;
  });
});

document.addEventListener(`click`, (e)=>{
  if(!e.target.closest(`#dropdown-menu>button`)){
    dropDownMenuButton.classList.remove(`active`);
    document.querySelector(`#dropdown-menu>menu`).style.display = `none`;
  }

  if(!e.target.closest(`#skills>section`)&&!e.target.closest(`#skills>h4`)){
    const selectedSkillButton = document.querySelector(`.selected`)
    if(selectedSkillButton){
      selectedSkillButton.classList.remove(`selected`);
      document.getElementById(selectedSkillButton.dataset.skill).style.display = `none`;
    }
  }
});
/*
toggles.forEach((toggle)=>{
  toggle.addEventListener(`click`, (e)=>{
    if(e.target.value === `on` && e.target.checked)
      audioCtxt.resume();
    else
      audioCtxt.suspend(); 
  });
});

async function getFile(filepath){
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtxt.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

function playSample(audioBuffer){
  const source = new AudioBufferSourceNode(audioCtxt, {buffer: audioBuffer, playbackRate: audioCtxt.sampleRate});
  source.connect(audioCtxt.destination)
  source.start()
}

getFile(`./placeholder.wav`).then((buffer)=>{
  console.log(`in`)
  playSample(buffer) 
})
*/
