const events = [
    // Copy full event array from the instructions above
    // (You can download placeholder images or use unsplash URLs)
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "images/aaa.jpg"
    },
     {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "images/bbb.jpg"
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "images/ccc.jpg"
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "images/ddd.png"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "images/eee.jpg"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "images/ggg.jpg"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "images/hhh.jpg"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "images/iii.jpg"
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "images/jjj.jpg"
    },
    {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "images/kkk.jpg"
    },

    // --- Day 3: Nov 22, 2025 ---
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "images/lll.jpg"
    },
    {
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "images/mmm.jpg"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "images/nnn.png"
    },
    {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "images/ooo.png"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "images/ppp.jpg"
    },

    // --- Bonus / Past Events for testing ---
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "images/qqq.png"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "images/rrr.jpg"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "images/sss.jpg"
    },
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "images/ttt.jpg"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "images/uuu.jpg"
    }
];

// Function to render event cards
function displayEvents(filterType = "All") {
    const container = document.getElementById('event-container');
    container.innerHTML = '';

    const filteredEvents = filterType === "All"
        ? events
        : events.filter(e => e.type.toLowerCase() === filterType.toLowerCase());

    // Smooth fade-in animation
    container.style.opacity = 0;

    setTimeout(() => {
        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');

            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <div class="event-info">
                    <h2>${event.title}</h2>
                    <p class="type">${event.type}</p>
                    <p class="date">${new Date(event.date).toLocaleString()}</p>
                    <p class="desc">${event.description}</p>
                </div>
            `;

            container.appendChild(card);
        });

        container.style.opacity = 1;
        container.style.transition = "opacity 0.4s ease";
    }, 100);
}

// Add event listeners for filter buttons
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.getAttribute('data-type');
            displayEvents(type);
        });
    });
}

// === Theme Handling ===

// Detect system preference
function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Apply a theme
function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme ? savedTheme : getSystemTheme();

    applyTheme(initialTheme);
}

// Toggle between themes
function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

// Setup theme toggle button
function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", toggleTheme);
}


// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    setupFilters();
    initializeTheme();
    setupThemeToggle();
});
