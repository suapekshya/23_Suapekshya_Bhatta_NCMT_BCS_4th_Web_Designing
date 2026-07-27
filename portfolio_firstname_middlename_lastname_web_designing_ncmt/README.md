# My Portfolio Website

This is my Portfolio Project for the Web Designing course.

## ⚠️ Before you submit
Rename this folder to match the naming convention:

```
portfolio_firstname_middlename_lastname_web_designing_ncmt
```

Replace `firstname`, `middlename`, and `lastname` with your actual name
(this folder is already set up with placeholders — just do a find/replace
in the folder name and inside `index.html` where it says "Your Name").

## 📁 Folder Structure

```
portfolio/
├── index.html          -> Main page
├── README.md            -> This file
├── favicon.ico           -> Browser tab icon
│
├── assets/
│   ├── css/style.css     -> All styling
│   ├── js/main.js        -> All JavaScript
│   ├── images/
│   │   ├── profile/      -> Your profile photo
│   │   ├── projects/     -> Project screenshots
│   │   ├── icons/        -> Small icons/logos
│   │   └── backgrounds/  -> Background images
│   ├── fonts/            -> Custom fonts (optional)
│   └── files/resume.pdf  -> Your downloadable resume
│
├── designs/              -> Reference/planning material (not code)
│   ├── wireframes/
│   ├── mockups/
│   ├── ui-kit/
│   ├── figma-exports/
│   ├── references/
│   └── branding/
│       ├── logo/
│       ├── colors/
│       └── typography/
│
└── data/
    ├── projects.json     -> Project info shown on the Projects section
    ├── skills.json       -> Skill list shown on the Skills section
    └── experience.json   -> Work/education history
```

## ✅ What's implemented (Part 3: Portfolio Development Progress)

- Navigation Bar (with mobile hamburger menu)
- Hero Section
- About Section
- Skills Section (loaded dynamically from `data/skills.json`)
- Projects Section (loaded dynamically from `data/projects.json`)
- Contact Section (front-end form with a success message)
- Footer

## 🚀 How to run it

Just double-click `index.html`, or open it with the "Live Server"
extension in VS Code, and it will open in your browser.

## ✏️ What to personalize

1. Replace `Your Name` in `index.html` with your real name.
2. Add your own photo to `assets/images/profile/` and update the
   `src` path in `index.html`.
3. Add your resume PDF to `assets/files/resume.pdf`.
4. Edit `data/skills.json` and `data/projects.json` with your real
   skills and projects.
5. Add project screenshots to `assets/images/projects/`.
