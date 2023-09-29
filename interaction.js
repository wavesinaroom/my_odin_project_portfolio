const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const details = Array.from(document.getElementsByTagName(`details`));
const panels = Array.from(document.getElementsByClassName("panel"));
const navButtons = Array.from(document.querySelectorAll(`#nav-buttons>div > button`));
const toMainButtons = Array.from(document.getElementsByClassName(`to-main`));

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

navButtons.forEach((button)=>{
  button.addEventListener(`mousedown`, ()=>{
    document.getElementById(button.id.slice(3)).style.display = `flex`;
    document.getElementById(button.id.slice(3)).style.flexDirection = `column`;
    document.querySelector(`main`).style.display = `none`;
  });
});


toMainButtons.forEach((button)=>{
  button.addEventListener(`mousedown`, ()=>{
    document.getElementById(button.id.slice(5)).style.display = `none`;
    document.querySelector(`main`).style.display = `flex`
    document.querySelector(`main`).style.flexDirection = `column`
  })
})
