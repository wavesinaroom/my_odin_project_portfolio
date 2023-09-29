const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const details = Array.from(document.getElementsByTagName(`details`));
const panels = Array.from(document.getElementsByClassName("panel"));
const navButtons = Array.from(document.querySelectorAll(`#nav-buttons > button`));

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
  const panel = document.getElementById(button.id.slice(3));
  button.addEventListener(`mousedown`, ()=>{
    panel.style.display = `contents`;
    panel.scrollIntoView({behavior:`smooth`});
    document.getElementById(`center`).style.display = `none`;
  });
});

