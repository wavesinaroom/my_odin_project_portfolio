const navButtons = Array.from(document.getElementsByClassName(`panel-button`));
const dropDownMenuButton = document.querySelector(`#dropdown-menu>button`);
const skillsButtons = Array.from(document.getElementsByClassName(`skill-button`));
const skillsArticles = Array.from(document.querySelectorAll(`#skills>section:nth-of-type(2)>article`));
const projectPanels = Array.from(document.querySelectorAll(`#projects>section`));

dropDownMenuButton.addEventListener(`click`, ()=>{
  dropDownMenuButton.style.backgroundColor = `var(--black-200)`;
  document.querySelector(`#dropdown-menu>menu`).style.display = `block`;
})

document.addEventListener(`click`, (e)=>{
  if(!e.target.closest(`#dropdown-menu>button`)){
    dropDownMenuButton.style.backgroundColor = `var(--gray-200)`;
    document.querySelector(`#dropdown-menu>menu`).style.display = `none`;
  }

  if(!e.target.closest(`#skills>section`)&&!e.target.closest(`#skills>h4`)){
    const selectedSkillButton = document.querySelector(`.clicked`)
    if(selectedSkillButton){
      selectedSkillButton.classList.remove(`clicked`);
      document.getElementById(selectedSkillButton.dataset.skill).style.display = `none`;
    }
  }

})

navButtons.forEach((button)=>{
  button.addEventListener(`click`, ()=>{
    document.getElementById(button.dataset.panel).scrollIntoView({behavior:`smooth`});
  })
})

skillsButtons.forEach((skill)=>{
  skill.addEventListener(`click`, ()=>{
    for(const button of skillsButtons){
      if(skill.dataset.skill === button.dataset.skill){
        button.classList.add(`clicked`);
        document.getElementById(button.dataset.skill).style.display = `block`;
      }else{
        button.classList.remove(`clicked`);
        document.getElementById(button.dataset.skill).style.display = `none`;
      }
    }
  })
})

projectPanels.forEach((panel)=>{
  panel.addEventListener('mouseenter', ()=>{
    panel.style.opacity = `1`;
    panel.style.boxShadow = `8px 8px var(--gray-200)`;
    panel.children[0].style.backgroundColor = `var(--orange-100)`;
    panel.children[0].style.color = 'var(--black-200)';
  })
})

projectPanels.forEach((panel)=>{
  panel.addEventListener(`mouseleave`, ()=>{
    panel.style.opacity = `0.5`;
    panel.children[0].style.backgroundColor = `var(--black-200)`;
    panel.style.boxShadow = `none`;
    panel.children[0].style.color = `var(--white-100)`;
  })
})
