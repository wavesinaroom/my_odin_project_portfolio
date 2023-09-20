const projectInteractives = Array.from(document.getElementsByClassName(`project-interactive`));
const dialogs = Array.from(document.getElementsByTagName(`dialog`));

projectInteractives.forEach((interactive)=>{
  interactive.addEventListener(`click`, ()=>{
    dialogs.forEach((d)=>{
      d.open = false;
    });
    const dialog = interactive.children[1];
    dialog.open = true;
  });
});

