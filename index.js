document.addEventListener('DOMContentLoaded', function () {
  function fetchDestinationsData(nameDestinations) {
    return new Promise((resolve, reject) => {
      fetch('data.JSON')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const destinationsItem = data.destinations.find(item => item.nameDestinations === nameDestinations);
          resolve(destinationsItem);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          reject(error);
        });
    });
  }

  function displayDestinationsData(nameDestinations) {
    fetchDestinationsData(nameDestinations)
      .then(destinationsItem => {
        if (destinationsItem) {
          document.querySelector('.nameDestinations').innerText = destinationsItem.nameDestinations;
          document.querySelector('.description').innerText = destinationsItem.description;
          document.querySelector('.distance').innerText = destinationsItem.distance;
          document.querySelector('.travel').innerText = destinationsItem.travel;
          document.querySelector('.images').src = destinationsItem.images.webp;
        }
      });
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
  function fetchCrewData(reper) {
      return new Promise((resolve, reject) => {
      fetch('data.JSON')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              const crewItem = data.crew.find(item => item.reper === reper);
              resolve(crewItem);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              reject(error);
          });
      });
  }

  function displayCrewData(reper) {
      fetchCrewData(reper)
          .then(crewItem => {
              if (crewItem) {
                  document.querySelector('.nameCrew').innerText = crewItem.nameCrew;
                  document.querySelector('.role').innerText = crewItem.role;
                  document.querySelector('.bio').innerText = crewItem.bio;
                  document.querySelector('.image').src = crewItem.image.webp;
              }
          });
  }
  

  document.querySelector('.Douglas').addEventListener('click', function () {
    displayCrewData('Douglas');
  });

  document.querySelector('.Mark').addEventListener('click', function () {
    displayCrewData('Mark');
  });

  document.querySelector('.Victor').addEventListener('click', function () {
    displayCrewData('Victor');
  });

  document.querySelector('.Anousheh').addEventListener('click', function () {
    displayCrewData('Anousheh');
  });

  displayCrewData('Douglas');
});


document.addEventListener('DOMContentLoaded', function () {
  function fetchTechnologyData(index) {
      return new Promise((resolve, reject) => {
      fetch('data.JSON')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              const technologyItem = data.technology.find(item => item.index === index);
              resolve(technologyItem);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              reject(error);
          });
      });
  }

  function displayTechnologyData(index) {
      fetchTechnologyData(index)
          .then(technologyItem => {
              if (technologyItem) {
                  document.querySelector('.nameTechnology').innerText = technologyItem.nameTechnology;
                  document.querySelector('.description').innerText = technologyItem.description;
                  document.querySelector('.img').src = technologyItem.img.landscape;
              }
          });
  }

  document.querySelector('.first').addEventListener('click', function () {
      displayTechnologyData('first');
    });
  
    document.querySelector('.second').addEventListener('click', function () {
      displayTechnologyData('second');
    });
  
    document.querySelector('.third').addEventListener('click', function () {
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