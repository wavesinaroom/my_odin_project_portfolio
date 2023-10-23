const navButtons = Array.from(document.getElementsByClassName(`panel-button`));
const dropDownMenuButton = document.querySelector(`#dropdown-menu>button`);
const skillsButtons = Array.from(document.getElementsByClassName(`skill-button`));
const skillsArticles = Array.from(document.querySelectorAll(`#skills>section:nth-of-type(2)>article`));
const windows = Array.from(document.querySelectorAll(`.window`));

dropDownMenuButton.addEventListener(`click`, ()=>{
  dropDownMenuButton.classList.add(`active`);
  document.querySelector(`#dropdown-menu>menu`).style.display = `block`;
})


navButtons.forEach((button)=>{
  button.addEventListener(`click`, ()=>{
    document.getElementById(button.dataset.panel).scrollIntoView({behavior:`smooth`, block: `center`});
  })
})

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
  })
})

windows.forEach((panel)=>{
  panel.addEventListener('mouseenter', ()=>{
    console.log(`in`)
    panel.style.opacity = `1`;
    panel.style.boxShadow = `8px 8px var(--gray-100)`;
    panel.children[0].style.backgroundColor = `var(--orange-100)`;
    panel.children[0].style.color = 'var(--black-200)';
  })
})

windows.forEach((panel)=>{
  panel.addEventListener(`mouseleave`, ()=>{
    console.log(`out`)
    panel.style.opacity = `0.5`;
    panel.children[0].style.backgroundColor = `var(--black-200)`;
    panel.style.boxShadow = `none`;
    panel.children[0].style.color = `var(--white-100)`;
  })
})

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
})
