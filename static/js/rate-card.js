document.addEventListener("DOMContentLoaded", function () {
    const ratesContainer = document.getElementById("rates-container");

    const rateCardData = {
        "Software Development Services": [
            { service: "Frontend Development", localRate: "KSh 4,000/hr", globalRate: "$35/hr", localProject: "KSh 80,000", globalProject: "$700" },
            { service: "Backend Development", localRate: "KSh 4,500/hr", globalRate: "$40/hr", localProject: "KSh 100,000", globalProject: "$900" },
            { service: "Full-Stack Development", localRate: "KSh 6,000/hr", globalRate: "$50/hr", localProject: "KSh 150,000", globalProject: "$1,200" },
            { service: "Database Management", localRate: "KSh 3,500/hr", globalRate: "$30/hr", localProject: "KSh 70,000", globalProject: "$600" }
        ],
        "Technical Writing Services": [
            { service: "Documentation & Tutorials", localRate: "KSh 3,000/hr", globalRate: "$25/hr", localProject: "KSh 40,000", globalProject: "$350" },
            { service: "Blog Writing", localRate: "KSh 2,500/hr", globalRate: "$20/hr", localProject: "KSh 25,000", globalProject: "$200" }
        ],
        "Accounting & Financial Services": [
            { service: "Financial Analysis & Reporting", localRate: "KSh 3,500/hr", globalRate: "$30/hr", localProject: "KSh 80,000", globalProject: "$700" },
            { service: "Bookkeeping", localRate: "KSh 3,000/hr", globalRate: "$25/hr", localProject: "KSh 40,000", globalProject: "$350" },
            { service: "Tax Preparation", localRate: "KSh 3,500/hr", globalRate: "$30/hr", localProject: "KSh 60,000", globalProject: "$550" }
        ],
        "Business Consulting Services": [
            { service: "Business Strategy Development", localRate: "KSh 4,000/hr", globalRate: "$35/hr", localProject: "KSh 90,000", globalProject: "$800" },
            { service: "Entrepreneurship Mentoring", localRate: "KSh 3,500/hr", globalRate: "$30/hr", localProject: "KSh 50,000", globalProject: "$450" }
        ],
        "Content Creation Services": [
            { service: "Video Scripts (YouTube Shorts)", localRate: "KSh 1,500/hr", globalRate: "$20/hr", localProject: "KSh 15,000", globalProject: "$150" },
            { service: "Video Editing (YouTube)", localRate: "KSh 2,500/hr", globalRate: "$25/hr", localProject: "KSh 25,000", globalProject: "$250" },
            { service: "Logo Design", localRate: "KSh 1,250/hr", globalRate: "$15/hr", localProject: "KSh 12,500", globalProject: "$125" }
        ],
        "Teaching & Mentorship": [
            { service: "Programming Tutoring (Basics)", localRate: "KSh 3,000/hr", globalRate: "$25/hr", localProject: "KSh 30,000", globalProject: "$250" },
            { service: "Financial Literacy Coaching", localRate: "KSh 2,500/hr", globalRate: "$20/hr", localProject: "KSh 20,000", globalProject: "$150" }
        ]
    };

    function generateAccordion(data) {
        let htmlContent = "";

        for (const category in data) {
            htmlContent += `
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>${category}</span>
                        <span class="arrow"></span>
                    </button>
                    <div class="accordion-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Local Rate</th>
                                    <th>Global Rate</th>
                                    <th>Local Project Rate</th>
                                    <th>Global Project Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data[category]
                                    .map(
                                        (item) => `
                                    <tr>
                                        <td>${item.service}</td>
                                        <td>${item.localRate}</td>
                                        <td>${item.globalRate}</td>
                                        <td>${item.localProject}</td>
                                        <td>${item.globalProject}</td>
                                    </tr>`
                                    )
                                    .join("")}
                            </tbody>
                        </table>
                    </div>
                </div>`;
        }

        return htmlContent;
    }

    ratesContainer.innerHTML = generateAccordion(rateCardData);

    // Add event listeners for accordion functionality
    document.querySelectorAll(".accordion-header").forEach((header) => {
        header.addEventListener("click", function () {
            const body = this.nextElementSibling;

            // Toggle accordion body
            const isExpanded = body.style.maxHeight;
            body.style.maxHeight = isExpanded ? null : `${body.scrollHeight}px`;

            // Toggle arrow icon
            this.classList.toggle("active");
        });
    });
});
