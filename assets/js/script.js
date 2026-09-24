'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });







// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}




const projects = {
    mutagen: {
        title: "Mutagen",
        type: "College Project",
        image: "assets/images/project-1.png",
        description:
            "Mutagen is a top down Survivor rougelike game where the player plays as a slime crash landed on a planet full of hostile creatures. The player must survive and find a way to escape the planet. The game was made in Unreal Engine 5 and was a college project. I was also awarded the best creative project for this game, which was created and programmed by myself and 3D models were from the Unreal Engine Marketplace. The game takes inspiration from games like Vampire Survivors and others of the same genre.",
        tech: "Unreal Engine • Scripting • College Project",
        github: "https://github.com/wunkus/mutagenx",
        video: "https://www.youtube.com/watch?v=UYKqE75Zc78"
    },

    displacement: {
        title: "Workplace Displacement",
        type: "Game Jam",
        image: "assets/images/project-2.png",
        description:
            "Workplace Displacement is a puzzle game which involves navigating through a series of office rooms to solve challenges. The player completes puzzles similar to portal, with the main mechanic being able to switch object positions. The game was made in Unreal Engine 5 and was a 2 week game jam project with 2 other team members. I created the core swapping mechanic and puzzle elements, and modeled and textured a few assets. The game mostly takes inspiration from Portal and Stanley Parable.",
        tech: "Unreal Engine • Scripting • Game Jam",
        github: "https://github.com/wunkus/Workplace-Displacement",
        video: "https://youtu.be/VKLyrSbbdYQ"
    },

    vectron: {
        title: "Vectron IX",
        type: "University Project",
        image: "assets/images/project-4.png",
        description:
            "This short incremental game was my first Unity project at Staffordshire University. The project was to create a simple 2D top down game with at least 6 mechanics, I created a simple game where the player could launch themselves at enemies to deal damage, with upgrades to increase damage and speed modifiers.",
        tech: "Unity • C# • University Project",
        github: "https://github.com/wunkus",
        video: "https://youtu.be/cU3KmOJNC7I"
    },

        tavern: {
        title: "Tavern Menu",
        type: "College Project",
        image: "assets/images/project-5.png",
        description:
            "This title screen and enviroment was my first College project in Unreal Engine 5. The project was to make a functioning UI for a title screen, I created a 3D enviroment and added lighting effects to create a cozy tavern background for the title screem.",
        tech: "Unreal Engine • 3D Modelling • College Project",
        github: "https://github.com/wunkus",
        video: "https://youtu.be/IYhzi7-CwQA"
    },

         reactor: {
        title: "Sci-Fi Reactor",
        type: "College Project",
        image: "assets/images/project-6.png",
        description:
            "This was my first 3D modelling project for college, the project was to create a small enviroment that the player could explore in a side view perspective. I created a low poly sci-fi reactor room with a short animation for the reactor core, where a brief sound plays and the reactor core lights up. I opted for a low poly style as this was my first 3D modelling project.",
        tech: "Unreal Engine • 3D Modelling • College Project",
        github: "https://github.com/wunkus",
        video: "https://youtu.be/hn-1OzQTsT8"
    },

    mechanics: {
        title: "Mechanics Prototyping",
        type: "University Project",
        image: "assets/images/project-3.png",
        description:
            "This project was my first Unreal Engine project at Staffordshire University with the aim of the project to create basic mechanics using a framework provided by the university. I took the project further, changing it from a top down to a first person perspective, and adding more complex mechanics such as animated enemies using mixamo, and enemy spawning. The player was also given the ability to place defences and a range of weapons to use. The games mechanics were heavily inspired by Helldivers II and Deep Rock Galactic. ",
        tech: "Unreal Engine • Scripting • University Project",
        github: "https://github.com/wunkus/Mechanics",
        video: "https://youtu.be/UYL6RJlHKOg"
    }
};

function openProject(id){

    const p = projects[id];

    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalType").textContent = p.type;
    document.getElementById("modalDescription").textContent = p.description;
    document.getElementById("modalImage").src = p.image;
    document.getElementById("modalVideo").src = getEmbedUrl(p.video);
    document.getElementById("modalTech").textContent = p.tech;

    document.getElementById("githubBtn").href = p.github;
    document.getElementById("videoBtn").href = p.video;

    document.getElementById("projectModal").classList.add("active");
}

function getEmbedUrl(url) {
    // RegEx to match standard, short, embed, and shorts YouTube links
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\/shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);

    // Check if a match was found and ensure the ID length is exactly 11 characters
    const id = (match && match[2].length === 11) ? match[2] : null;

    if (!id) {
        throw new Error("Invalid YouTube URL provided");
    }

    return `https://www.youtube.com/embed/${id}`;
}

const modal = document.getElementById("projectModal");

function closeModal(){

    modal.classList.remove("active");

    document.getElementById("modalVideo").src = "";
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.onclick = (e)=>{
    if(e.target.id === "projectModal"){
        document.getElementById("modalVideo").src = "";
        document.getElementById("projectModal").classList.remove("active");
    }
};
