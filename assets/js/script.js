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
            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
        tech: "Unreal Engine • Scripting • College Project",
        github: "https://github.com/wunkus/mutagenx",
        video: "https://www.youtube.com/watch?v=UYKqE75Zc78"
    },

    displacement: {
        title: "Workplace Displacement",
        type: "Game Jam",
        image: "assets/images/project-2.png",
        description:
            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
        tech: "Unreal Engine • Scripting • Game Jam",
        github: "https://github.com/wunkus/Workplace-Displacement",
        video: "https://www.youtube.com/watch?v=qufY2RdLTtY"
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
