
// Changing text and styling dynamically

function changeText() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('description');
  
    title.textContent = 'You clicked the button!';
    title.style.color = 'tomato';
    title.style.fontSize = '2.5rem';
    title.style.textAlign = 'center';
  
    desc.textContent = 'The text and style have been updated dynamically using JavaScript!';
  }
  
  // Adding or Removing a paragraph

  function toggleElement() {
    const section = document.querySelector('section');
    let extraPara = document.getElementById('extra-paragraph');
  
    if (extraPara) {
      extraPara.remove();
    } else {
      extraPara = document.createElement('p');
      extraPara.id = 'extra-paragraph';
      extraPara.textContent = 'This paragraph was added via JavaScript!';
      section.appendChild(extraPara);
    }
  }

  // Styling the footer dynamically

window.onload = function () {
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = 'grey';
    footer.style.color = 'lightyellow';
    footer.style.textAlign = 'center';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.width = '100%';
    footer.style.padding = '10px';
  };
  