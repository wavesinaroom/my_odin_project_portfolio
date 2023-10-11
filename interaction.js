const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const details = Array.from(document.getElementsByTagName(`details`));
const panels = Array.from(document.getElementsByClassName(`panel`));
const navButtons = Array.from(document.getElementsByClassName(`panel-button`));
const dropDownMenuButton = document.querySelector(`#dropdown-menu>button`);

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

details.forEach((interactive)=>{
  interactive.addEventListener(`mouseenter`, ()=>{
    interactive.open = true;
  });

  interactive.addEventListener(`mouseleave`, ()=>{
    interactive.open = false;
  });
});

dropDownMenuButton.addEventListener(`click`, ()=>{
  dropDownMenuButton.style.backgroundColor = `var(--black-100)`;
  document.querySelector(`#dropdown-menu>menu`).style.display = `block`;
})

document.addEventListener(`click`, (e)=>{
  if(!e.target.closest(`#dropdown-menu>button`)){
    dropDownMenuButton.style.backgroundColor = `var(--gray-300)`;
    document.querySelector(`#dropdown-menu>menu`).style.display = `none`;
  }
})
navButtons.forEach((button)=>{
  button.addEventListener(`click`, ()=>{
    document.querySelector(`#dropdown-menu>menu`).style.display = `none`;
    document.getElementById(button.dataset.panel).scrollIntoView({behavior:`smooth`});
  })
})
