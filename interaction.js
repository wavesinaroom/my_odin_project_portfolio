const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const experienceInteractives = Array.from(document.getElementsByClassName(`experience-interactive`));

projectInteractives.forEach((interactive)=>{
  interactive.children[0].addEventListener(`mouseenter`, ()=>{
    const dialog = interactive.children[1];
    dialog.open = true;
  });

  interactive.children[0].addEventListener(`mouseleave`, ()=>{
    dialogs.forEach((d)=>{
      d.open = false;
    });
  })
});

dialogs.forEach((d)=>{
  d.addEventListener(`mouseenter`, ()=>{
    d.open = true;
  });
  
  d.addEventListener(`mouseleave`, ()=>{
    d.open = false;
  });
})

experienceInteractives.forEach((interactive)=>{
  interactive.addEventListener(`mouseenter`, ()=>{
    interactive.children[2].style.display = `contents`;
  })

  interactive.addEventListener(`mouseleave`, ()=>{
    interactive.children[2].style.display = `none`;
  })
})
