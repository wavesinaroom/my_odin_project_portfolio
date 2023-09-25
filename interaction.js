const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));
const details = Array.from(document.getElementsByTagName(`details`));

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

details.forEach((interactive)=>{
  interactive.addEventListener(`mouseenter`, ()=>{
    interactive.open = true;
  })

  interactive.addEventListener(`mouseleave`, ()=>{
    interactive.open = false;
  })
})
