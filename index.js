document.addEventListener('DOMContentLoaded', function () {
  async function displayDestinationsData(name) {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const destinationsItem = data.destinations.find(item => item.name === name);

      if (destinationsItem) {
        document.querySelector('.name').innerText = destinationsItem.name;
        document.querySelector('.description').innerText = destinationsItem.description;
        document.querySelector('.distance').innerText = destinationsItem.distance;
        document.querySelector('.travel').innerText = destinationsItem.travel;
        document.querySelector('.images').src = destinationsItem.images.webp;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  document.querySelector('.button.moon').addEventListener('click', function () {
    displayDestinationsData('Moon');
  });

  document.querySelector('.button.mars').addEventListener('click', function () {
    displayDestinationsData('Mars');
  });

  document.querySelector('.button.europa').addEventListener('click', function () {
    displayDestinationsData('Europa');
  });

  document.querySelector('.button.titan').addEventListener('click', function () {
    displayDestinationsData('Titan');
  });

  displayDestinationsData('Moon');
});


document.addEventListener('DOMContentLoaded', function () {
  async function displaycrewData(reper) {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const crewItem = data.crew.find(item => item.reper === reper);

      if (crewItem) {
        document.querySelector('.name').innerText = crewItem.name;
        document.querySelector('.role').innerText = crewItem.role;
        document.querySelector('.bio').innerText = crewItem.bio;
        document.querySelector('.image').src = crewItem.image.webp;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  document.querySelector('.cerc.Douglas').addEventListener('click', function () {
    displaycrewData('Douglas');
  });

  document.querySelector('.cerc.Mark').addEventListener('click', function () {
    displaycrewData('Mark');
  });

  document.querySelector('.cerc.Victor').addEventListener('click', function () {
    displaycrewData('Victor');
  });

  document.querySelector('.cerc.Anousheh').addEventListener('click', function () {
    displaycrewData('Anousheh');
  });

  displaycrewData('Douglas');
});


document.addEventListener('DOMContentLoaded', function () {
  async function displayTechnologyData(index) {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const technologyItem = data.technology.find(item => item.index === index);

      if (technologyItem) {
        document.querySelector('.name').innerText = technologyItem.name;
        document.querySelector('.description').innerText = technologyItem.description;
        document.querySelector('.img').src = technologyItem.img.landscape;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  document.querySelector('.cerc-1.first').addEventListener('click', function () {
    displayTechnologyData('first');
  });

  document.querySelector('.cerc-1.second').addEventListener('click', function () {
    displayTechnologyData('second');
  });

  document.querySelector('.cerc-1.third').addEventListener('click', function () {
    displayTechnologyData('third');
  });

  displayTechnologyData('first');
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.button');

  links[0].classList.add("active");

  links.forEach((link) => {
      link.addEventListener('click', () => {
          links.forEach((item) => {
              item.classList.remove("active");
          });
          link.classList.add("active");
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.cerc');

  links[0].classList.add("selected");

  links.forEach((link) => {
      link.addEventListener('click', () => {
          links.forEach((item) => {
              item.classList.remove("selected");
          });
          link.classList.add("selected");
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.cerc-1');

  links[0].classList.add("select");

  links.forEach((link) => {
      link.addEventListener('click', () => {
          links.forEach((item) => {
              item.classList.remove("select");
          });
          link.classList.add("select");
      });
  });
});


function redirectToHome() {
window.location.href = "index.html";
}

function redirectToDestination() {
window.location.href = "Destination.html";
}

function redirectToCrew() {
window.location.href = "Crew.html";
}

function redirectToTehnology() {
window.location.href = "Technology.html";
}

function redirectToexplore() {
window.location.href = "Destination.html";
}


function dropDown() {
  document.getElementById("Dropdown-1").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}