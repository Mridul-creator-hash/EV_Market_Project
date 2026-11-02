# EV Insights — Electric Vehicle Market Performance & Insights

> **Academic Capstone Analytics Project & Interactive Business Intelligence Showcase**  
> Author: Mridul Khandelwal  
> Architecture: Client-Side React SPA (Vite) + Tableau Public Integration + GitHub Pages  

---

## 🚀 Project Overview

**EV Insights** is a modern data analytics web application developed for the academic capstone project titled **"Electric Vehicle Market Performance & Insights."**

The platform transforms multidimensional automotive data into strategic business intelligence. It integrates an interactive executive Tableau Public dashboard and a structured analytical storyline to evaluate electric vehicle market adoption, manufacturer market share shifts, battery capacities (kWh), driving range benchmarks, MSRP pricing dynamics, and regional infrastructure distribution.

### 🌟 Key Highlights
- **100% Serverless & Client-Side:** Built with pure JavaScript, React, and Vite. Requires **zero** backend servers (no Python, no Flask, no Express runtime needed in production).
- **Official Tableau Public Embed:** Embeds the verified [EV Executive Dashboard](https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard?publish=yes) with interactive filtering, hover tooltips, and cross-sheet slicing.
- **Configurable Story Section:** Includes a dedicated Tableau Story framework with live embed capabilities and in-browser URL testing.
- **Zero Third-Party Hosting Dependencies:** Deploys directly to **GitHub Pages** via automated GitHub Actions with no Render, Vercel, Netlify, or paid cloud subscriptions.
- **Premium Dark Analytics UI:** Designed with charcoal/black aesthetics, electric amber glows, responsive CSS grid patterns, and semantic accessibility.

---

## 📊 Live Interactive Tableau Dashboard

- **Published Viz URL:** [EV Executive Dashboard on Tableau Public](https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard?publish=yes)
- **Workbook Author:** Mridul Khandelwal
- **Embedded Features:** Multi-OEM volume share, MSRP distribution curves, battery capacity tiers, certified driving ranges, and geographic penetration maps.

---

## 🛠️ Technologies Used

| Technology | Category | Role in Project |
| :--- | :--- | :--- |
| **React 19** | Frontend Framework | Modular component hierarchy, responsive UI, state handling |
| **Vite 8** | Build Tooling & Bundler | Lightning-fast development server, asset optimization |
| **JavaScript (ES6+)** | Language | Pure JavaScript implementation (no TypeScript runtime overhead) |
| **HTML5 & CSS3** | Markup & Styling | Semantic landmarks, responsive layout, dark theme design system |
| **Tailwind CSS v4** | Utility CSS Engine | Glassmorphism panels, glow highlights, mobile-first responsiveness |
| **Tableau Public** | BI & Analytics | Executive dashboard visualization and data engine |
| **GitHub** | Version Control | Centralized git source code repository |
| **GitHub Pages** | Static Hosting | Free global static website hosting via GitHub Actions |

---

## 📁 Project Directory Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg                 # Custom EV battery & lightning SVG icon
│   └── assets/                     # Static media assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive navigation bar with mobile drawer & scrollspy
│   │   ├── Hero.jsx                # Introduction, telemetry preview graphic, and CTAs
│   │   ├── About.jsx               # Research scope, motivation, and visualization rationale
│   │   ├── Dashboard.jsx           # Responsive Tableau Public executive dashboard embed
│   │   ├── Story.jsx               # Tableau Story embed player & 5 sequenced chapters
│   │   ├── AnalyticsFeatures.jsx   # 7 core EV analytical focus dimension cards
│   │   ├── Methodology.jsx         # 8-stage data analytics & engineering workflow
│   │   ├── TechStack.jsx           # Verified technology badges and architecture notes
│   │   └── Footer.jsx              # Academic attribution, repository links, back-to-top
│   ├── config/
│   │   └── tableau.js              # Centralized Tableau URLs & embed transformer helpers
│   ├── App.jsx                     # Top-level application layout
│   ├── main.jsx                    # React 19 DOM bootstrap entry point
│   └── styles.css                  # Tailwind CSS import, theme variables & animations
├── index.html                      # HTML entry with OpenGraph meta & Tableau API scripts
├── metadata.json                   # Project title and capability metadata
├── package.json                    # Project dependencies, build and preview scripts
├── vite.config.js                  # Vite configuration with relative base path ('./')
└── README.md                       # Comprehensive project documentation
```

---

## 💻 Local Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or 20.x recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [Git](https://git-scm.com/)

### Step 1: Clone or Navigate to the Project Directory
```bash
cd ev-insights
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:3000`

### Step 4: Build for Production
```bash
npm run build
```
This compiles the application into an optimized, self-contained `dist/` directory with relative asset paths.

### Step 5: Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ How to Configure the Tableau Story URL

The Tableau Public Executive Dashboard is already wired into the application. If you have published a companion **Tableau Story**, you can configure it in one of two ways:

### Option A: Edit `src/config/tableau.js` (Permanent)
Open `src/config/tableau.js` and set your published story URL:

```javascript
export const TABLEAU_CONFIG = {
  dashboard: {
    // Already configured to your published dashboard
    directUrl: 'https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard?publish=yes',
    embedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard',
    author: 'Mridul Khandelwal',
  },

  story: {
    title: 'Electric Vehicle Market Story',
    description: 'Sequenced narrative walking through adoption waves and market share transitions.',
    // 👉 PASTE YOUR PUBLISHED STORY URL HERE:
    directUrl: 'https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/YourStorySheetName',
    embedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/YourStorySheetName',
  }
};
```

### Option B: Interactive Preview in the Browser (Instant)
1. Go to the **Story** section on the website.
2. Click **Configure Story URL**.
3. Paste any Tableau Public Story URL directly into the preview bar and click **Preview Story**.

*If left unconfigured, the Story section displays the 5 structured analytical narrative chapters without fabricating or guessing an unverified URL.*

---

## 🌐 GitHub Pages Deployment Guide

This project is configured out-of-the-box for **GitHub Pages** using GitHub Actions.

### Step 1: Upload the Project to Your GitHub Repository

Initialize Git (if not already done) and push to your GitHub repo:

```bash
# 1. Initialize git repository
git init

# 2. Add all project files
git add .

# 3. Commit the files
git commit -m "Initial release: EV Insights - Electric Vehicle Market Performance & Insights"

# 4. Set main branch
git branch -M main

# 5. Link to your existing GitHub repository
# Replace YOUR_USERNAME and YOUR_REPOSITORY_NAME with your actual GitHub details:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 2: Activate GitHub Pages in Your Repository Settings

1. Open your repository on **GitHub** in your web browser.
2. Click on the **Settings** tab at the top right of the repository.
3. In the left-hand sidebar under the **Code and automation** section, click on **Pages**.
4. Under **Build and deployment**:
   - Change the **Source** dropdown from `Deploy from a branch` to **`GitHub Actions`**.
5. That's it! GitHub Actions will automatically detect `.github/workflows/deploy.yml`.

---

### Step 3: Monitor and Access Your Live Website

1. Navigate to the **Actions** tab in your GitHub repository.
2. You will see the **Deploy EV Insights to GitHub Pages** workflow running.
3. Once the workflow completes (typically within 45–60 seconds), your site will be live at:
   ```text
   https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
   ```

*Because `base: './'` is configured in `vite.config.js`, all scripts, CSS, SVGs, and assets resolve with zero configuration regardless of whether the site is accessed via root domain or repository subpath.*

---

## 🔍 Analytical Dimensions Covered

1. **Manufacturer Sales Analysis:** Market share trajectories, pure EV vs legacy OEM delivery volumes.
2. **EV Pricing Comparison:** MSRP distribution tiers, luxury vs budget brackets, incentive impacts.
3. **Country-wise EV Distribution:** Geographic adoption clusters, charging station density correlations.
4. **Battery Capacity Analysis:** Pack sizes (kWh), chemistry trade-offs (LFP vs NMC), energy density.
5. **Driving Range Comparison:** Certified EPA/WLTP mileage benchmarks, interstate highway resilience.
6. **Manufacturer Distribution:** Model lineup breadth, modular platform reuse, segment coverage.
7. **EV Efficiency Analysis:** Energy economy in kWh/100mi and MPGe relative to vehicle curb weight.

---

## 🛡️ Academic Integrity & Limitations

- **No Synthetic Statistics:** The website does not generate synthetic numerical values or present fake charts as real data. All interactive visualizations are rendered by Tableau Public from verified source workbooks.
- **Client-Side Boundaries:** Because GitHub Pages serves static web files, all dynamic interactions (filtering, sorting, tab switching) operate client-side in the browser. No server-side runtime (Node/Python) is active in production.
- **Third-Party Cookies Notice:** Some browser privacy extensions (e.g. Brave shields or strict third-party cookie blockers) may block external iframes from loading. The dashboard provides direct links and reload options to open the visualization natively on Tableau Public if needed.

---

## 📄 License & Attribution

- **Project:** Electric Vehicle Market Performance & Insights (EV Insights)
- **Author:** Mridul Khandelwal
- **Academic Context:** College Capstone Project / Data Analytics & Web Engineering
- **Visualization Platform:** Tableau Public
- **Host Platform:** GitHub Pages
