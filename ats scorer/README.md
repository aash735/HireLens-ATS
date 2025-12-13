# HireLens - ATS Resume Optimization Platform

![HireLens](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**HireLens** is a modern, frontend-only web platform designed specifically for freshers and interns to optimize their resumes for Applicant Tracking Systems (ATS). Upload your resume, select a job role, and get instant feedback on keyword matches, missing skills, and improvement suggestions.

## ✨ Features

### 🎯 Core Functionality
- **13+ Job Roles** - Comprehensive job descriptions for entry-level and mid-level positions
- **ATS Score Analysis** - Instant compatibility scoring based on keyword matching
- **Smart Keyword Detection** - Partial matching algorithm that recognizes related terms
- **Missing Keyword Suggestions** - Alternative keywords and recommendations for improvement
- **Interactive Resume Preview** - View your resume content with highlighting
- **Real-time Search & Filter** - Find relevant jobs quickly

### 🎨 Design Features
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Animated Backgrounds** - Interactive particle system and gradient orbs
- **Smooth Transitions** - Professional animations throughout

### 🔒 Privacy First
- **Client-Side Processing** - All resume analysis happens in your browser
- **No Data Storage** - Your resume is never uploaded to any server
- **No Sign-up Required** - Use immediately without creating an account

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- PDF resume file

### Installation

1. **Download the project files**
   ```
   - index.html
   - jobs.html
   - upload.html
   - styles.css
   - jobs.css
   - upload.css
   - script.js
   - jobs.js
   - upload.js
   - particles.js
   - jobDescriptions.js
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No server or build process required!

### Usage

1. **Browse Jobs**
   - Navigate to "Browse Jobs" from the homepage
   - Use search and filters to find relevant positions
   - View 13+ job roles including Software Developer, Python Developer, Full Stack, etc.

2. **Upload Resume**
   - Click on any job card
   - Upload your PDF resume
   - Wait for analysis (typically 1-3 seconds)

3. **View Results**
   - See your ATS compatibility score (0-100%)
   - Review matched keywords
   - Explore missing keywords with alternative suggestions
   - Check your resume content

4. **Optimize**
   - Add suggested keywords to your resume
   - Re-upload to see improved scores
   - Iterate until satisfied

## 📁 Project Structure

```
HireLens/
├── index.html              # Landing page
├── jobs.html               # Job listings page
├── upload.html             # Resume upload & analysis page
├── styles.css              # Global styles & animations
├── jobs.css                # Job listings styles
├── upload.css              # Upload page styles
├── script.js               # Common functionality (theme, navigation)
├── jobs.js                 # Job listings logic
├── upload.js               # Resume analysis & ATS scoring
├── particles.js            # Particle animation background
├── jobDescriptions.js      # Job data with keywords & suggestions
└── README.md               # This file
```

## 🎓 Supported Job Roles

1. **Software Developer** - Mid-level (2-4 years)
2. **Python Developer** - Mid-level (2-4 years)
3. **Full Stack Developer** - Mid-level (3-5 years)
4. **Backend Developer** - Mid-Senior (3-6 years)
5. **Front End Developer** - Mid-level (2-4 years)
6. **Junior Web Developer** - Junior (0-2 years)
7. **Data Analyst** - Mid-level (2-4 years)
8. **Machine Learning Engineer** - Mid-level (2-5 years)
9. **Cybersecurity Analyst** - Mid-level (2-5 years)
10. **Web Developer** - Mid-level (2-4 years)
11. **DevOps Engineer** - Mid-Senior (3-7 years)
12. **Database Administrator** - Mid-Senior (3-7 years)
13. **Cloud Solutions Architect** - Senior (5-10 years)

## 🧠 How ATS Scoring Works

### Keyword Matching Algorithm
```javascript
1. Extract text from PDF resume
2. Normalize text (lowercase, remove special chars)
3. For each job keyword:
   - Check for exact phrase match
   - Check for partial word matches
   - Check for related terms
4. Calculate score: (matched / total) * 100
```

### Partial Matching
The algorithm uses intelligent partial matching:
- "data structures" matches "structures"
- "Python 3" matches "Python"
- "REST API" matches "API"
- "AWS Cloud" matches "AWS"

### Scoring Ranges
- **90-100%**: Excellent match - Resume is highly optimized
- **70-89%**: Good match - Minor improvements needed
- **50-69%**: Fair match - Consider adding key skills
- **0-49%**: Needs work - Major keyword gaps

## 🎨 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #ff6b35;        /* Primary brand color */
    --secondary: #f7931e;      /* Secondary accent */
    --accent: #004e89;         /* Accent color */
    /* ... */
}
```

### Adding New Jobs
Edit `jobDescriptions.js`:
```javascript
{
    title: "New Job Title",
    summary: "Job description",
    location: "City, Country — Full-time",
    keywords: ["keyword1", "keyword2"],
    suggestions: {
        "keyword1": ["alt1", "alt2"]
    },
    // ... other fields
}
```

### Modifying Animations
- Edit timing in CSS animation properties
- Adjust particle count in `particles.js`
- Modify transition speeds in CSS variables

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks required
- **PDF.js** - PDF text extraction (via CDN)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Bundle Size: ~150KB

## 🐛 Troubleshooting

### PDF Not Uploading
- Ensure file is a valid PDF
- Check file size (recommended < 5MB)
- Try a different browser
- Disable browser extensions temporarily

### Low ATS Score
- Ensure your resume contains relevant keywords
- Use industry-standard terminology
- Include both full terms and abbreviations (e.g., "AI" and "Artificial Intelligence")
- Review job description carefully

### Animations Not Working
- Ensure JavaScript is enabled
- Clear browser cache
- Try a different browser
- Check browser console for errors

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+
- **Laptop**: 968px - 1399px
- **Tablet**: 640px - 967px
- **Mobile**: < 640px

## 🚀 Future Enhancements

- [ ] Export analysis as PDF report
- [ ] Compare multiple resumes
- [ ] Resume templates with ATS-friendly designs
- [ ] Cover letter analysis
- [ ] LinkedIn profile optimization
- [ ] Multi-language support
- [ ] More job categories
- [ ] Resume scoring history

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add More Jobs** - Expand the job descriptions database
2. **Improve Matching** - Enhance the keyword matching algorithm
3. **UI/UX** - Suggest design improvements
4. **Bug Fixes** - Report and fix issues
5. **Documentation** - Improve this README

## 📞 Support

For questions or issues:
- Check the troubleshooting section above
- Review browser console for error messages
- Ensure you're using a modern browser

## 🎓 Educational Purpose

This project was created as an educational tool to help:
- Freshers understand ATS systems
- Students optimize their resumes
- Job seekers improve their application success rate
- Developers learn modern web development techniques

## 🌟 Acknowledgments

- Job descriptions adapted from industry-standard templates
- Icons: Emoji (Unicode)
- Fonts: Google Fonts (DM Serif Display, Outfit)
- PDF Library: PDF.js by Mozilla

---

**Built with ❤️ for job seekers everywhere**

*Version 1.0.0 - December 2024*
