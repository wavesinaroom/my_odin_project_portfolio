const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const navButtons = Array.from(document.getElementsByClassName(`panel-button`));
const dropDownMenuButton = document.querySelector(`#dropdown-menu>button`);
const skillsButtons = Array.from(document.getElementsByClassName(`skill-button`));
const skillsArticles = Array.from(document.querySelectorAll(`#skills>section:nth-of-type(2)>article`));

projectInteractives.forEach((interactive)=>{
  interactive.children[0].addEventListener(`mouseenter`, ()=>{
    const dialog = interactive.children[1];
    dialog.open = true;
  });

  interactive.children[0].addEventListener(`mouseleave`, ()=>{
    dialogs.forEach((d)=>{
      d.open = false;
    });
  });
});

dialogs.forEach((d)=>{
  d.addEventListener(`mouseenter`, ()=>{
    d.open = true;
    d.scrollIntoView({behavior: "smooth"});
  });
  
  d.addEventListener(`mouseleave`, ()=>{
    d.open = false;
  });
});

dropDownMenuButton.addEventListener(`click`, ()=>{
  dropDownMenuButton.style.backgroundColor = `var(--black-200)`;
  document.querySelector(`#dropdown-menu>menu`).style.display = `block`;
})

document.addEventListener(`click`, (e)=>{
  if(!e.target.closest(`#dropdown-menu>button`)){
    dropDownMenuButton.style.backgroundColor = `var(--gray-200)`;
    document.querySelector(`#dropdown-menu>menu`).style.display = `none`;
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
