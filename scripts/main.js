let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg'){
        myImage.setAttribute('src','images/test-image2.jpg');
    }
    else{
        myImage.setAttribute('src','images/test-image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I don\'t feel so good Mr. ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I don\'t feel so good Mr. ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }