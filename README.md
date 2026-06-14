# 🌿 ARTEMIS — Ecological Mapping & Action Client

ARTEMIS is a modern, light-speed static web application designed for **Save Earth from Anthropogenic Movement (SEA Movement)**. It serves as an ecological telemetry dashboard and skilling tracker to scientifically validate the cooling, soil insulation, and aquifer recharge benefits of regenerative food forests compared to bare/exposed land.

This frontend repository is fully independent, self-contained, and optimized for instant hosting on platforms like **Vercel** or **Netlify**.

---

## 🚀 Key Modules & Pages

### 🌳 1. Ranipet Microclimate Dashboard
*   **Dynamic Data Visualizations:** Displays live 7-day trend lines comparing regional weather baselines against manual forest canopy shade temperatures.
*   **Cooling Index Calculator:** Auto-computes and displays the thermal protection index under the forest canopy.
*   **Evapotranspiration & Moisture Badges:** Visual indicators tracking soil humidity buffers and irrigation savings.

### 💧 2. Groundwater & Landslide Warning System
*   **Kanniyakumari Aquifer Monitoring:** High-contrast dual-axis charts plotting weekly aquifer depths against regional precipitation.
*   **Early Warning advisory:** Pulse indicators highlighting landslide advisory thresholds in steep regions (like the Nilgiris) based on saturated rainfall thresholds.

### 💼 3. SkillGrid Vocational Tracker
*   **Automated CV Parser Simulator:** Simulates local AI extraction patterns from uploaded PDF resumes into Pydantic models.
*   **SCORM LMS Sync Rate:** A circular tracking system checking youth vocational module completions for rural green-collar jobs.

### 📝 4. Volunteer Telemetry Logger
*   **High-Contrast UI:** Mobile-first, daylight-readable fields for field workers to log canopy temperatures, under-mulch soil readings, well depths, and rain coordinates.
*   **Offline Fallback Mode:** When hosted standalone, submissions fallback to client-side local delta calculators, rendering the success modal instantly.

---

## 📁 Project Structure

```text
astro/
├── public/
│   ├── favicon.ico              # Favicon asset
│   └── favicon.svg              # Vector brand logo
├── src/
│   ├── assets/
│   │   ├── logo.jpg             # Lotus brand logo image
│   │   └── background.svg       # Soft grid background shapes
│   ├── components/
│   │   └── Welcome.astro        # Initial template welcome screen
│   ├── layouts/
│   │   ├── Layout.astro         # Global page wrapper (sets Lenis scroll & icons)
│   │   ├── Header.astro         # Glassmorphic navbar (translucent theme states)
│   │   └── Footer.astro         # Theme-responsive detailed footer
│   ├── pages/
│   │   ├── index.astro          # Root redirect loading the landing page
│   │   ├── landing/
│   │   │   └── index.astro      # Glassmorphic homepage introducing ARTEMIS
│   │   ├── dashboard/
│   │   │   └── index.astro      # Core analytics dashboard (Chart.js graphs)
│   │   └── log.astro            # Volunteer field logging portals
│   └── styles/
│       └── global.css           # Tailwind CSS v4 directives
├── package.json                 # Scripts and runtime dependencies
└── tsconfig.json                # TypeScript configurations
```

---

## 🛠️ Built With

*   **Astro v6:** Island architecture for zero-JS static HTML overhead.
*   **Tailwind CSS v4:** High-contrast theme classes and JIT grid layout styling.
*   **Chart.js:** Asynchronous client-side graph rendering.
*   **Lenis Scroll:** Inertial smooth scrolling for a premium, fluid reading experience.
*   **Lucide Icons:** Universal vector icon pack.
*   **HTMX:** Lightweight client-side reactive DOM injections.

---

## ⚙️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
Creates an optimized static directory inside `/dist` ready to be hosted:
```bash
npm run build
```

---

## ⚡ Deployment & Standalone Mode

This repository is configured to build static pages automatically. 

### Free-Tier Hosting (Vercel / Netlify):
1. Import this GitHub repository into Vercel.
2. Vercel automatically detects **Astro** and runs `npm run build`.
3. In the live URL, if the local FastAPI backend is unreachable, the client-side JavaScript catches the network timeout instantly, enabling **Demo/Simulation Mode** to provide a flawless client presentation without local server dependency.
