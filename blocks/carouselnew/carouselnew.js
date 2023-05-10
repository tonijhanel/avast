/*export default function decorate(block) {
  
  let contentDiv = document.createElement('div');
    contentDiv.classList.add('slide');

    const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
  block.classList.add('slides');
   [...block.children].forEach((row, i) => {
        row.classList.add('slide');
      const classes = ['text', 'image'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carouselnew-${e}`);
      });
       buttons 
    
    });
   
  }*/
/*
  export default function decorate(block) {
    const content = block.querySelectorAll('.carouselnew>div');
    const contentDiv = document.createElement('div');
    const slide = document.createElement('div');
    slide.classList.add('slides');
    contentDiv.appendChild(slide);
    [...block.children].forEach((row, i) => {
      
      row.classList.add('slide');
    const classes = ['text', 'image'];
    classes.forEach((e, j) => {
      row.children[j].classList.add(`carouselnew-${e}`);
    });
      
  
  });


  }*/

  
export default function decorate(block) {
  /* change to ul, li */
  const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
  block.classList.add('slider-container');
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('slider');
  block.appendChild(contentDiv);
  const slide = document.createElement('div');
    slide.classList.add('slides');
    contentDiv.appendChild(slide);
    
  [...block.children].forEach((row) => {
    const slideContent = document.createElement('div');
    slideContent.classList.add('slide');
    slideContent.innerHTML = row.innerHTML;
    [...slideContent.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'slide__image';
      else div.className = 'slide__text';
    });
    slide.append(slideContent);

    const button = document.createElement('button');
      button.title = 'Carousel Nav';
      buttons.append(button);
  });
 // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(contentDiv);
  block.appendChild(slideContent);
  contentDiv.parentElement.append(buttons);
}