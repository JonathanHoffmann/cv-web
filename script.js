let currentLanguage = 'en';
let data; // This will store the strings.json data

// Fetch the strings.json file and initialize the application
fetch('strings.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData; // Save the data for use later
        renderData(data); // Render the initial content
    })
    .catch(error => console.error('Error loading strings.json:', error));

// Handle language switching
function changeLanguage(language) {
    currentLanguage = language; // Update the global language
    const buttons = document.querySelectorAll('.language-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = [...buttons].find(button =>
        button.innerHTML.includes(`img/${language}`)
    );
    if (activeButton) activeButton.classList.add('active');

    // Re-render the page content with the selected language
    if (data) renderData(data);
}

function renderData(data) {
    renderContactSection('Contact', data.Contact);
    renderSection('Education', data.Education);
    renderSection('Job Experience', data.Job);
    renderSection('Volunteer Work', data.VolunteerWork);
    renderLanguages(data.Languages);
    renderSimpleSection('Programming Languages', data.ProgrammingLanguages);
    renderSimpleSection('Programming Tools', data.ProgrammingTools);
    renderSimpleSection('IT Support', data.ITSupport);
    renderOtherSection('Other', data.Other);
}

function renderSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = `<h2>${sectionId}</h2>`;
    Object.values(items).forEach(item => {
        section.innerHTML += `
        <div class="entry">
          <img src="${item.image}" alt="Logo">
          <div>
            <h3>${item[currentLanguage]}</h3>
            <p>${item.institution || item.organization || item.employer}</p>
            <p>${item.datefrom} - ${item.dateto}</p>
          </div>
        </div>
      `;
    });
}

// Render a generic section
function renderSimpleSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = `<h2>${sectionId}</h2>`;
    Object.entries(items).forEach(([name, item]) => {
        section.innerHTML += `
        <div class="entry">
          <img src="${item.image}" alt="${name} Logo">
          <div>
            <h3>${name}</h3>
          </div>
        </div>
      `;
    });
}

function renderContactSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = `<h2>${sectionId}</h2>`;
    Object.values(items).forEach(item => {
        section.innerHTML += `
        <div class="entry">
          <img src="${item.image}" alt="Logo" class="jonathanimg">
          <div>
            <h3>${item.name}</h3>
            <p>${item.address1}</p>
            <p>${item.address2}</p>
            <p>${item.address3}</p>
            <p><br></p>
            <p><a href="mailto:${item.mail}">${item.mail}</a></p>
            <p><a href="tel:${item.phone}">${item.phone}</a></p>
            <p><a href="${item.linkedin}" target="_blank">LinkedIn</a></p>
          </div>
        </div>
      `;
    });
}

function renderLanguages(languages) {
    const section = document.getElementById('Languages');
    section.innerHTML = '<h2>Languages</h2>';
    Object.values(languages).forEach(lang => {
        section.innerHTML += `
        <div class="entry">
          <img src="${lang.image}" alt="${lang[currentLanguage + '_name']} flag">
          <div>
            <h3>${lang[currentLanguage + '_name']}</h3>
            <p>${lang[currentLanguage + '_proficiency']}</p>
          </div>
        </div>
      `;
    });
}
function renderOtherSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = `<h2>${sectionId}</h2>`;
    Object.values(items).forEach(item => {
        section.innerHTML += `
        <div class="entry">
          <img src="${item.image}" alt="Logo">
          <div>
            <h3>${item[currentLanguage]}</h3>
          </div>
        </div>
      `;
    });
}
