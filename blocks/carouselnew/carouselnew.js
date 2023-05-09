export default function decorate(block) {
    const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
  block.classList.add('slides');
   [...block.children].forEach((row, i) => {
        row.classList.add('slide');
      const classes = ['text', 'image'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carouselnew-${e}`);
      });
      /* buttons */
    
    });
   
  }