// jobs.js - Handle job listings display and filtering

// Job icon mapping
const jobIcons = {
    'Software Developer': '💻',
    'Python Developer': '🐍',
    'Full Stack Developer': '⚡',
    'Backend Developer': '⚙️',
    'Front End Developer': '🎨',
    'Junior Web Developer': '🌱',
    'Data Analyst': '📊',
    'Machine Learning Engineer': '🤖',
    'Cybersecurity Analyst': '🔒',
    'Web Developer': '🌐',
    'DevOps Engineer': '🚀',
    'Database Administrator (DBA)': '💾',
    'Cloud Solutions Architect': '☁️'
};

// Get experience level for filtering
function getExperienceCategory(experienceLevel) {
    const level = experienceLevel.toLowerCase();
    if (level.includes('junior') || level.includes('0–') || level.includes('entry')) {
        return 'junior';
    } else if (level.includes('senior') || level.includes('5+') || level.includes('5–10')) {
        return 'senior';
    } else {
        return 'mid';
    }
}

// Render job cards
function renderJobs(jobs) {
    const jobsGrid = document.getElementById('jobsGrid');
    jobsGrid.innerHTML = '';

    if (jobs.length === 0) {
        jobsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3 class="empty-title">No jobs found</h3>
                <p class="empty-text">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    jobs.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.style.animationDelay = `${index * 0.05}s`;

        const icon = jobIcons[job.title] || '💼';
        const category = getExperienceCategory(job.experience_level);
        
        jobCard.innerHTML = `
            <div class="job-card-header">
                <div class="job-icon">${icon}</div>
                <div class="job-badge">${category}</div>
            </div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-location">
                <span class="location-icon">📍</span>
                ${job.location}
            </div>
            <p class="job-summary">${job.summary}</p>
            <div class="job-card-footer">
                <span class="job-level">${job.experience_level.split(';')[0]}</span>
                <button class="analyze-btn" data-job-index="${index}">
                    Analyze Resume
                    <span class="arrow-icon">→</span>
                </button>
            </div>
        `;

        jobsGrid.appendChild(jobCard);
    });

    // Update count
    document.getElementById('jobCount').textContent = jobs.length;

    // Add click handlers to analyze buttons
    document.querySelectorAll('.analyze-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const jobIndex = btn.getAttribute('data-job-index');
            // Store selected job in sessionStorage and navigate to upload page
            sessionStorage.setItem('selectedJobIndex', jobIndex);
            window.location.href = 'upload.html';
        });
    });

    // Add click handlers to cards
    document.querySelectorAll('.job-card').forEach((card, idx) => {
        card.addEventListener('click', () => {
            sessionStorage.setItem('selectedJobIndex', idx);
            window.location.href = 'upload.html';
        });
    });
}

// Filter and search functionality
function filterJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const levelFilter = document.getElementById('levelFilter').value;

    let filteredJobs = jobDescriptions.filter(job => {
        const matchesSearch = 
            job.title.toLowerCase().includes(searchTerm) ||
            job.summary.toLowerCase().includes(searchTerm) ||
            job.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));

        const jobCategory = getExperienceCategory(job.experience_level);
        const matchesLevel = levelFilter === 'all' || jobCategory === levelFilter;

        return matchesSearch && matchesLevel;
    });

    renderJobs(filteredJobs);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderJobs(jobDescriptions);

    // Add event listeners for search and filter
    const searchInput = document.getElementById('searchInput');
    const levelFilter = document.getElementById('levelFilter');

    searchInput.addEventListener('input', filterJobs);
    levelFilter.addEventListener('change', filterJobs);

    // Add search input animation
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = 'scale(1.02)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = 'scale(1)';
    });
});
