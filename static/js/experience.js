// Define the experience data
const experiences = [
    {
        title: "Indie Technical Writer",
        company: "Medium",
        period: "Dec 2022 – Present",
        description: "Created clear and engaging technical documentation, collaborated with development teams, maintained a structured content repository, and updated documentation to reflect product changes and user feedback."
    },
    {
        title: "Software Engineer",
        company: "Freelance",
        period: "August 2022 – Present",
        description: "Developed software solutions, wrote clean code in multiple languages, participated in the full development lifecycle, and improved system reliability by 25% through debugging and troubleshooting."
    },
    {
        title: "Accounting Assistant",
        company: "Indie",
        period: "May 2021 – Present",
        description: "Supported accounting operations by preparing financial statements, maintaining records, reconciling accounts, managing invoices and payments, and assisting with tax returns."
    }
];

// Function to render the experience section
function renderExperience() {
    const experienceSection = document.getElementById('experience-container');
    experienceSection.innerHTML = '';

    experiences.forEach(exp => {
        const expContainer = document.createElement('div');
        const expTitle = document.createElement('h3');
        const expPeriod = document.createElement('p');
        const expDescription = document.createElement('p');

        expTitle.textContent = `${exp.title} - ${exp.company}`;
        expPeriod.textContent = exp.period;
        expDescription.textContent = exp.description;

        expContainer.appendChild(expTitle);
        expContainer.appendChild(expPeriod);
        expContainer.appendChild(expDescription);

        experienceSection.appendChild(expContainer);
    });
}

// Call the function to render the experience when the page loads
document.addEventListener('DOMContentLoaded', renderExperience);
