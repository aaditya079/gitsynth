// app.js - Profile Builder Logic with Premium Upgrades

// 1. Theme Configuration Mapping
const THEME_MAP = {
  cyberpunk: {
    stats: 'react',
    activity: 'react-dark',
    leetcode: 'dark'
  },
  emerald: {
    stats: 'tokyonight',
    activity: 'emerald-dark',
    leetcode: 'dark'
  },
  amethyst: {
    stats: 'dracula',
    activity: 'dracula',
    leetcode: 'dark'
  },
  solar: {
    stats: 'buefy',
    activity: 'solarized-dark',
    leetcode: 'dark'
  }
};

let currentTheme = 'cyberpunk';

// 2. Tech Badge Database (Enriched standard database)
const TECH_DATABASE = {
  languages: [
    { id: 'js', name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black', defaultSelected: true },
    { id: 'ts', name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white', defaultSelected: false },
    { id: 'python', name: 'Python', color: '3776AB', logo: 'python', logoColor: 'white', defaultSelected: true },
    { id: 'java', name: 'Java', color: 'ED8B00', logo: 'java', logoColor: 'white', defaultSelected: true },
    { id: 'c', name: 'C', color: '00599C', logo: 'c', logoColor: 'white', defaultSelected: true },
    { id: 'cpp', name: 'C++', color: '00599C', logo: 'cplusplus', logoColor: 'white', defaultSelected: false },
    { id: 'go', name: 'Go', color: '00ADD8', logo: 'go', logoColor: 'white', defaultSelected: false },
    { id: 'rust', name: 'Rust', color: '000000', logo: 'rust', logoColor: 'white', defaultSelected: false },
    { id: 'ruby', name: 'Ruby', color: 'CC342D', logo: 'ruby', logoColor: 'white', defaultSelected: false },
    { id: 'php', name: 'PHP', color: '777BB4', logo: 'php', logoColor: 'white', defaultSelected: false },
    { id: 'swift', name: 'Swift', color: 'F05138', logo: 'swift', logoColor: 'white', defaultSelected: false },
    { id: 'kotlin', name: 'Kotlin', color: '7F52FF', logo: 'kotlin', logoColor: 'white', defaultSelected: false },
    { id: 'html5', name: 'HTML5', color: 'E34F26', logo: 'html5', logoColor: 'white', defaultSelected: true },
    { id: 'css3', name: 'CSS3', color: '1572B6', logo: 'css3', logoColor: 'white', defaultSelected: true }
  ],
  backend: [
    { id: 'nodejs', name: 'Node.js', color: '339933', logo: 'node.js', logoColor: 'white', defaultSelected: true },
    { id: 'express', name: 'Express.js', color: '000000', logo: 'express', logoColor: 'white', defaultSelected: true },
    { id: 'fastapi', name: 'FastAPI', color: '009688', logo: 'fastapi', logoColor: 'white', defaultSelected: true },
    { id: 'django', name: 'Django', color: '092E20', logo: 'django', logoColor: 'white', defaultSelected: false },
    { id: 'flask', name: 'Flask', color: '000000', logo: 'flask', logoColor: 'white', defaultSelected: false },
    { id: 'spring', name: 'Spring Boot', color: '6DB33F', logo: 'springboot', logoColor: 'white', defaultSelected: false },
    { id: 'nestjs', name: 'NestJS', color: 'E0234E', logo: 'nestjs', logoColor: 'white', defaultSelected: false },
    { id: 'laravel', name: 'Laravel', color: 'FF2D20', logo: 'laravel', logoColor: 'white', defaultSelected: false },
    { id: 'firebase', name: 'Firebase', color: 'FFCA28', logo: 'firebase', logoColor: 'black', defaultSelected: false },
    { id: 'supabase', name: 'Supabase', color: '3ECF8E', logo: 'supabase', logoColor: 'white', defaultSelected: false }
  ],
  databases: [
    { id: 'mongodb', name: 'MongoDB', color: '47A248', logo: 'mongodb', logoColor: 'white', defaultSelected: true },
    { id: 'mysql', name: 'MySQL', color: '4479A1', logo: 'mysql', logoColor: 'white', defaultSelected: true },
    { id: 'postgres', name: 'PostgreSQL', color: '4169E1', logo: 'postgresql', logoColor: 'white', defaultSelected: false },
    { id: 'redis', name: 'Redis', color: 'DC382D', logo: 'redis', logoColor: 'white', defaultSelected: false },
    { id: 'sqlite', name: 'SQLite', color: '003B57', logo: 'sqlite', logoColor: 'white', defaultSelected: false },
    { id: 'dynamodb', name: 'Amazon DynamoDB', color: '4053F4', logo: 'amazondynamodb', logoColor: 'white', defaultSelected: false }
  ],
  frontend: [
    { id: 'react', name: 'React', color: '61DAFB', logo: 'react', logoColor: 'black', defaultSelected: false },
    { id: 'vue', name: 'Vue.js', color: '4FC08D', logo: 'vue.js', logoColor: 'white', defaultSelected: false },
    { id: 'svelte', name: 'Svelte', color: 'FF3E00', logo: 'svelte', logoColor: 'white', defaultSelected: false },
    { id: 'angular', name: 'Angular', color: 'DD0031', logo: 'angular', logoColor: 'white', defaultSelected: false },
    { id: 'astro', name: 'Astro', color: 'FF5D01', logo: 'astro', logoColor: 'white', defaultSelected: false },
    { id: 'nextjs', name: 'Next.js', color: '000000', logo: 'next.js', logoColor: 'white', defaultSelected: false },
    { id: 'tailwind', name: 'TailwindCSS', color: '06B6D4', logo: 'tailwindcss', logoColor: 'white', defaultSelected: false },
    { id: 'git', name: 'Git', color: 'F05032', logo: 'git', logoColor: 'white', defaultSelected: true },
    { id: 'docker', name: 'Docker', color: '2496ED', logo: 'docker', logoColor: 'white', defaultSelected: false },
    { id: 'kubernetes', name: 'Kubernetes', color: '326CE5', logo: 'kubernetes', logoColor: 'white', defaultSelected: false },
    { id: 'figma', name: 'Figma', color: 'F24E1E', logo: 'figma', logoColor: 'white', defaultSelected: false },
    { id: 'aws', name: 'AWS', color: '232F3E', logo: 'amazonwebservices', logoColor: 'white', defaultSelected: false }
  ]
};

// Selected Tech State
let selectedTechs = new Set();

// 3. Initialize Tech Grids
function initTechGrids() {
  for (const category in TECH_DATABASE) {
    const grid = document.getElementById(`${category}-grid`);
    if (!grid) continue;
    grid.innerHTML = ''; // Clear prior elements
    
    TECH_DATABASE[category].forEach(tech => {
      const pill = createPill(tech);
      grid.appendChild(pill);
    });
  }
}

// Reusable Tech Pill Maker
function createPill(tech) {
  const pill = document.createElement('div');
  pill.className = 'tech-pill';
  if (tech.defaultSelected || selectedTechs.has(tech.id)) {
    pill.classList.add('selected');
    selectedTechs.add(tech.id);
  }
  pill.dataset.id = tech.id;
  
  // Simple Icons link or generic image
  const iconUrl = `https://cdn.simpleicons.org/${tech.logo}/${tech.logoColor === 'black' ? '000000' : 'FFFFFF'}`;
  pill.innerHTML = `
    <img src="${iconUrl}" onerror="this.style.display='none'" />
    <span>${tech.name}</span>
  `;
  
  pill.addEventListener('click', () => {
    if (selectedTechs.has(tech.id)) {
      selectedTechs.delete(tech.id);
      pill.classList.remove('selected');
    } else {
      selectedTechs.add(tech.id);
      pill.classList.add('selected');
    }
    generateReadme();
  });
  return pill;
}

// 4. Tech Stack Live Search Filter
function initSearchFilter() {
  const searchInput = document.getElementById('tech-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.tech-pill').forEach(pill => {
      const text = pill.querySelector('span').textContent.toLowerCase();
      if (text.includes(query)) {
        pill.style.display = 'flex';
      } else {
        pill.style.display = 'none';
      }
    });
  });
}

// 5. Custom Badge Creation
function initCustomBadgeBuilder() {
  const addBtn = document.getElementById('btn-add-custom-tech');
  if (!addBtn) return;
  
  addBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('customTechName');
    const colorInput = document.getElementById('customTechColor');
    const logoInput = document.getElementById('customTechLogo');
    
    const name = nameInput.value.trim();
    let color = colorInput.value.trim().replace('#', '');
    const logo = logoInput.value.trim().toLowerCase();
    
    if (!name) {
      alert('Please enter a Tech Name!');
      return;
    }
    if (!color) {
      color = '7B2CBF'; // Default purple
    }
    
    const id = 'custom-' + name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const newTech = {
      id: id,
      name: name,
      color: color,
      logo: logo || 'github',
      logoColor: 'white',
      defaultSelected: false
    };
    
    // Push into Frontend & Tools category by default
    TECH_DATABASE.frontend.push(newTech);
    
    // Append to UI grid
    const grid = document.getElementById('frontend-grid');
    const pill = createPill(newTech);
    grid.appendChild(pill);
    
    // Auto-select it
    selectedTechs.add(id);
    pill.classList.add('selected');
    
    // Clear inputs
    nameInput.value = '';
    colorInput.value = '';
    logoInput.value = '';
    
    generateReadme();
    showFloatingToast(`✨ Added custom badge: ${name}!`);
  });
}

// 6. Interactive Theme Switcher
function initThemeSwitcher() {
  document.querySelectorAll('.theme-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-select-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const theme = btn.dataset.theme;
      currentTheme = theme;
      
      // Update body classes
      document.body.className = `theme-${theme}`;
      
      generateReadme();
      showFloatingToast(`🌌 Switched app theme to ${theme.toUpperCase()}!`);
    });
  });
}

// 7. Tab Toggling Logic
function initTabs() {
  // Customizer Panel Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.form-tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const tabId = `tab-${btn.dataset.formTab}`;
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Preview Panel Tabs
  document.querySelectorAll('.preview-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preview-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.preview-tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const tabId = `preview-${btn.dataset.previewTab}`;
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// 8. Dynamic List Builder Logic (Roadmap)
function removeRoadmapItem(btn) {
  const item = btn.closest('.roadmap-item');
  if (item) {
    item.remove();
    generateReadme();
  }
}

function addRoadmapItem() {
  const container = document.getElementById('roadmap-container');
  const div = document.createElement('div');
  div.className = 'roadmap-item';
  div.innerHTML = `
    <input type="text" class="roadmap-input" placeholder="e.g. Learn System Design">
    <button class="remove-btn" onclick="removeRoadmapItem(this)">×</button>
  `;
  
  // Register change event on new input
  div.querySelector('input').addEventListener('input', generateReadme);
  container.appendChild(div);
  generateReadme();
}

// Dynamic List Builder Logic (Projects Showcase)
function removeProjectItem(btn) {
  const item = btn.closest('.project-item-form-card');
  if (item) {
    item.remove();
    generateReadme();
  }
}

function addProjectItem(name = '', description = '', tags = '', link = '') {
  const container = document.getElementById('projects-container');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'project-item-form-card';
  div.innerHTML = `
    <div class="project-form-header">
      <h4>Project Details</h4>
      <button type="button" class="remove-btn" onclick="removeProjectItem(this)">×</button>
    </div>
    <div class="form-group-grid">
      <div class="form-group">
        <label>Project Name</label>
        <input type="text" class="project-name-input" placeholder="e.g. ImgSeek" value="${name}">
      </div>
      <div class="form-group">
        <label>Project Link (URL)</label>
        <input type="text" class="project-link-input" placeholder="e.g. https://github.com/..." value="${link}">
      </div>
    </div>
    <div class="form-group-grid">
      <div class="form-group">
        <label>Tech Tags (comma separated)</label>
        <input type="text" class="project-tags-input" placeholder="e.g. Python, Flask, React" value="${tags}">
      </div>
      <div class="form-group">
        <label>Short Description</label>
        <input type="text" class="project-desc-input" placeholder="e.g. AI-driven image search engine..." value="${description}">
      </div>
    </div>
  `;
  
  // Register change events on all new inputs
  div.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', generateReadme);
    input.addEventListener('change', generateReadme);
  });
  
  container.appendChild(div);
  generateReadme();
}

// 9. Generate Markdown and Update Simulated Visual Preview
function generateReadme() {
  // Pull Form Values
  const fullName = document.getElementById('fullName').value.trim() || 'Your Name';
  const headline = document.getElementById('headline').value.trim() || 'Headline';
  const typingLinesRaw = document.getElementById('typingLines').value.trim();
  const gifUrl = document.getElementById('gifUrl').value.trim();
  const bio = document.getElementById('bio').value.trim();
  
  const bullet1 = document.getElementById('bullet1').value.trim();
  const bullet2 = document.getElementById('bullet2').value.trim();
  const bullet3 = document.getElementById('bullet3').value.trim();
  const bullet4 = document.getElementById('bullet4').value.trim();
  const bullet5 = document.getElementById('bullet5').value.trim();
  const bullet6 = document.getElementById('bullet6').value.trim();
  
  const githubUser = document.getElementById('githubUsername').value.trim() || 'username';
  const leetcodeUser = document.getElementById('leetcodeUsername').value.trim() || 'username';
  const gmailAddress = document.getElementById('gmailAddress').value.trim();
  const wakatimeUser = document.getElementById('wakatimeUsername').value.trim();
  const countdownYear = document.getElementById('countdownYear').value || '2026';
  const snakeUrl = document.getElementById('snakeUrl').value.trim();
  const quote = document.getElementById('quote').value.trim();
  
  const showTrophies = document.getElementById('showTrophies').checked;
  const showLeetCode = document.getElementById('showLeetCode').checked;
  const showGitHubStats = document.getElementById('showGitHubStats').checked;
  const showWakaTime = document.getElementById('showWakaTime').checked;
  const showActivityGraph = document.getElementById('showActivityGraph').checked;
  const showSnake = document.getElementById('showSnake').checked;
  
  const statsLayout = document.getElementById('statsLayout').value;

  // Sync high-fidelity github simulation sidebar values
  document.getElementById('sim-display-name').textContent = fullName;
  document.getElementById('sim-display-username').textContent = `@${githubUser}`;
  
  // Set sim email
  const simEmailEl = document.getElementById('sim-meta-email');
  if (gmailAddress) {
    simEmailEl.style.display = 'flex';
    simEmailEl.innerHTML = `<span>✉️</span> ${gmailAddress}`;
  } else {
    simEmailEl.style.display = 'none';
  }
  
  // Dynamic Location guess based on bullet points
  const simLocEl = document.getElementById('sim-meta-location');
  if (bullet1.includes('Madurai') || fullName.includes('Aaditya')) {
    simLocEl.style.display = 'flex';
    simLocEl.innerHTML = `<span>📍</span> Madurai, India`;
  } else {
    simLocEl.style.display = 'flex';
    simLocEl.innerHTML = `<span>📍</span> Global`;
  }
  
  // Load real GitHub avatar if username is non-default
  const avatarEl = document.getElementById('sim-avatar');
  if (githubUser && githubUser !== 'username') {
    avatarEl.innerHTML = `<img src="https://github.com/${githubUser}.png" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" onerror="this.outerHTML='👤'" />`;
  } else {
    avatarEl.innerHTML = `👤`;
  }
  
  // Set sim readme container header label
  document.getElementById('sim-readme-title-label').textContent = `📝 ${githubUser} / README.md`;

  // Get themes mapping values for stats cards
  const statsTheme = THEME_MAP[currentTheme].stats;
  const activityTheme = THEME_MAP[currentTheme].activity;

  // Build typing SVG link
  let typingSvgLink = '';
  if (typingLinesRaw) {
    const encodedLines = encodeURIComponent(typingLinesRaw).replace(/,/g, ';').replace(/%20/g, '+');
    typingSvgLink = `https://readme-typing-svg.herokuapp.com?size=25&duration=3000&color=00F7FF&center=true&vCenter=true&width=600&lines=${encodedLines}`;
  }

  // Calculate days left in year for countdown
  const now = new Date();
  const targetYear = parseInt(countdownYear);
  const endOfYear = new Date(targetYear, 11, 31);
  const timeDiff = endOfYear - now;
  const daysLeft = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));

  // Generate Shields for selected Tech
  const selectedBadges = {
    languages: [],
    backend: [],
    databases: [],
    frontend: []
  };

  selectedTechs.forEach(techId => {
    for (const category in TECH_DATABASE) {
      const match = TECH_DATABASE[category].find(t => t.id === techId);
      if (match) {
        const badgeMarkup = `<a href="#"><img src="https://img.shields.io/badge/${encodeURIComponent(match.name)}-${match.color}?style=for-the-badge&logo=${match.logo}&logoColor=${match.logoColor}"/></a>`;
        selectedBadges[category].push(badgeMarkup);
      }
    }
  });

  // Pull Roadmap values
  const roadmapItems = [];
  document.querySelectorAll('.roadmap-input').forEach(input => {
    const val = input.value.trim();
    if (val) roadmapItems.push(val);
  });

  // --- BUILD RAW MARKDOWN STRING ---
  let md = `<h1 align="center">Hi 👋, I'm ${fullName}</h1>\n`;
  md += `<h3 align="center">${headline}</h3>\n\n`;

  if (typingSvgLink) {
    md += `<p align="center">\n  <img src="${typingSvgLink}" />\n</p>\n`;
  }
  if (gifUrl) {
    md += `<p align="center">\n  <img src="${gifUrl}" width="500"/>\n</p>\n\n`;
  }

  md += `## 🚀 About Me\n\n`;
  if (bio) {
    md += `${bio}\n\n`;
  }

  if (bullet1 || bullet2 || bullet3 || bullet4 || bullet5 || bullet6) {
    if (bullet1) md += `- ${bullet1}\n`;
    if (bullet2) md += `- ${bullet2}\n`;
    if (bullet3) md += `- ${bullet3}\n`;
    if (bullet4) md += `- ${bullet4}\n`;
    if (bullet5) md += `- ${bullet5}\n`;
    if (bullet6) md += `- ${bullet6}\n`;
    md += `\n`;
  }

  md += `---\n\n`;

  // Projects Showcase
  const projectItems = [];
  document.querySelectorAll('.project-item-form-card').forEach(card => {
    const name = card.querySelector('.project-name-input').value.trim();
    const link = card.querySelector('.project-link-input').value.trim();
    const tags = card.querySelector('.project-tags-input').value.trim();
    const desc = card.querySelector('.project-desc-input').value.trim();
    if (name) {
      projectItems.push({ name, link, tags, desc });
    }
  });

  if (projectItems.length > 0) {
    md += `## 🛠️ Projects Showcase\n\n`;
    projectItems.forEach(proj => {
      if (proj.link) {
        md += `### 🚀 [${proj.name}](${proj.link})\n`;
      } else {
        md += `### 🚀 ${proj.name}\n`;
      }
      if (proj.desc) {
        md += `> ${proj.desc}\n`;
      }
      if (proj.tags) {
        const tagBadges = proj.tags.split(',')
          .map(t => t.trim())
          .filter(t => t.length > 0)
          .map(t => `\`${t}\``)
          .join(' ');
        if (tagBadges) {
          md += `>\n> ${tagBadges}\n`;
        }
      }
      md += `\n`;
    });
    md += `---\n\n`;
  }

  // Trophies Row
  if (showTrophies && githubUser) {
    md += `## 🏆 GitHub Trophies\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="https://github-profile-trophy.vercel.app/?username=${githubUser}&theme=radical&no-bg=true&column=7" />\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  // Badges block
  const hasBadges = Object.values(selectedBadges).some(arr => arr.length > 0);
  if (hasBadges) {
    md += `## 🐞 Tech Stack\n\n`;
    if (selectedBadges.languages.length > 0) {
      md += `### 💻 Languages\n`;
      md += `${selectedBadges.languages.join('\n')}\n\n`;
    }
    if (selectedBadges.backend.length > 0) {
      md += `### ⚙️ Backend & Frameworks\n`;
      md += `${selectedBadges.backend.join('\n')}\n\n`;
    }
    if (selectedBadges.databases.length > 0) {
      md += `### 🗄️ Databases\n`;
      md += `${selectedBadges.databases.join('\n')}\n\n`;
    }
    if (selectedBadges.frontend.length > 0) {
      md += `### 🎨 Frontend & Tools\n`;
      md += `${selectedBadges.frontend.join('\n')}\n\n`;
    }
    md += `---\n\n`;
  }

  if (gmailAddress) {
    md += `## 🔗 Connect With Me\n\n`;
    md += `<p align="left">\n`;
    md += `  <a href="mailto:${gmailAddress}">\n`;
    md += `    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>\n`;
    md += `  </a>\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  if (showLeetCode && leetcodeUser) {
    md += `## 🧩 LeetCode Stats\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Nunito&ext=contest" />\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  // Horizontal or vertical stats card formatting
  if (showGitHubStats && githubUser) {
    md += `## 📊 GitHub Stats\n\n`;
    if (statsLayout === 'side-by-side') {
      md += `<p align="center">\n`;
      md += `  <img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=${statsTheme}&hide_border=true" width="48%" />\n`;
      md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=${statsTheme}&hide_border=true" width="48%" />\n`;
      md += `</p>\n\n`;
    } else {
      md += `<p align="center">\n`;
      md += `  <img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=${statsTheme}&hide_border=true" /><br/>\n`;
      md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=${statsTheme}&hide_border=true" />\n`;
      md += `</p>\n\n`;
    }
    md += `---\n\n`;
  }

  if (showWakaTime && wakatimeUser) {
    md += `## 🕒 WakaTime Coding Stats\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=${wakatimeUser}&theme=${statsTheme}&hide_border=true" />\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  md += `## ⏳ ${countdownYear} Countdown\n`;
  md += `<p><img src="https://img.shields.io/badge/Days%20Left%20in%20${countdownYear}-${daysLeft}-blue?style=for-the-badge"></p>\n\n`;
  md += `---\n\n`;

  if (showSnake && snakeUrl) {
    md += `## 🐍 Contribution Snake\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="${snakeUrl}">\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  if (showActivityGraph && githubUser) {
    md += `## 📊 Contribution Activity Graph\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=${activityTheme}&hide_border=true">\n`;
    md += `</p>\n\n`;
    md += `---\n\n`;
  }

  if (roadmapItems.length > 0) {
    md += `## 🛣️ ${countdownYear} Roadmap\n`;
    roadmapItems.forEach(item => {
      md += `- ⏳ ${item}\n`;
    });
    md += `\n---\n\n`;
  }

  if (quote) {
    md += `> ${quote}\n\n`;
  }
  md += `⭐ Always learning. Always building.`;

  // Output to Code Area
  document.getElementById('markdown-code-area').textContent = md;

  // --- CONSTRUCT SIMULATED VISUAL PREVIEW ---
  let html = `<h1>Hi 👋, I'm ${fullName}</h1>`;
  html += `<h3>${headline}</h3>`;

  if (typingSvgLink) {
    html += `<div class="sim-center"><img src="${typingSvgLink}" class="sim-img-widget" /></div>`;
  }
  if (gifUrl) {
    html += `<div class="sim-center"><img src="${gifUrl}" width="500" class="sim-img-widget" /></div>`;
  }

  html += `<h2>🚀 About Me</h2>`;
  if (bio) html += `<p class="sim-p">${bio}</p>`;
  
  if (bullet1 || bullet2 || bullet3 || bullet4 || bullet5 || bullet6) {
    html += `<ul>`;
    if (bullet1) html += `<li>${bullet1}</li>`;
    if (bullet2) html += `<li>${bullet2}</li>`;
    if (bullet3) html += `<li>${bullet3}</li>`;
    if (bullet4) html += `<li>${bullet4}</li>`;
    if (bullet5) html += `<li>${bullet5}</li>`;
    if (bullet6) html += `<li>${bullet6}</li>`;
    html += `</ul>`;
  }

  html += `<hr/>`;

  if (projectItems.length > 0) {
    html += `<h2>🛠️ Projects Showcase</h2>`;
    html += `<div class="sim-projects-grid">`;
    projectItems.forEach(proj => {
      const displayTags = proj.tags ? proj.tags.split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0)
        .map(t => `<span class="sim-project-tag">${t}</span>`)
        .join('') : '';

      html += `
        <div class="sim-project-card">
          <div>
            <div class="sim-project-header">
              <span class="sim-project-icon">🚀</span>
              <h4>${proj.link ? `<a href="${proj.link}" target="_blank">${proj.name}</a>` : proj.name}</h4>
            </div>
            ${proj.desc ? `<p class="sim-project-desc">${proj.desc}</p>` : ''}
          </div>
          ${displayTags ? `<div class="sim-project-tags">${displayTags}</div>` : ''}
        </div>
      `;
    });
    html += `</div>`;
    html += `<hr/>`;
  }

  if (showTrophies && githubUser) {
    html += `<h2>🏆 GitHub Trophies</h2>`;
    html += `<div class="sim-center">`;
    html += `  <img src="https://github-profile-trophy.vercel.app/?username=${githubUser}&theme=radical&no-bg=true&column=7" class="sim-img-widget" />`;
    html += `</div>`;
    html += `<hr/>`;
  }

  if (hasBadges) {
    html += `<h2>🐞 Tech Stack</h2>`;
    html += `<div class="tech-section-sim">`;
    if (selectedBadges.languages.length > 0) {
      html += `<h3>💻 Languages</h3>`;
      html += `<div class="sim-badge-row">${selectedBadges.languages.join('')}</div>`;
    }
    if (selectedBadges.backend.length > 0) {
      html += `<h3>⚙️ Backend & Frameworks</h3>`;
      html += `<div class="sim-badge-row">${selectedBadges.backend.join('')}</div>`;
    }
    if (selectedBadges.databases.length > 0) {
      html += `<h3>🗄️ Databases</h3>`;
      html += `<div class="sim-badge-row">${selectedBadges.databases.join('')}</div>`;
    }
    if (selectedBadges.frontend.length > 0) {
      html += `<h3>🎨 Frontend & Tools</h3>`;
      html += `<div class="sim-badge-row">${selectedBadges.frontend.join('')}</div>`;
    }
    html += `</div>`;
    html += `<hr/>`;
  }

  if (gmailAddress) {
    html += `<h2>🔗 Connect With Me</h2>`;
    html += `<div class="sim-badge-row">`;
    html += `  <a href="mailto:${gmailAddress}">`;
    html += `    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />`;
    html += `  </a>`;
    html += `</div>`;
    html += `<hr/>`;
  }

  if (showLeetCode && leetcodeUser) {
    html += `<h2>🧩 LeetCode Stats</h2>`;
    html += `<div class="sim-center">`;
    html += `  <img src="https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Nunito&ext=contest" class="sim-img-widget" />`;
    html += `</div>`;
    html += `<hr/>`;
  }

  if (showGitHubStats && githubUser) {
    html += `<h2>📊 GitHub Stats</h2>`;
    if (statsLayout === 'side-by-side') {
      html += `<div class="sim-stats-container">`;
      html += `  <img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=${statsTheme}&hide_border=true" class="sim-img-widget" style="width: 48%" />`;
      html += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=${statsTheme}&hide_border=true" class="sim-img-widget" style="width: 48%" />`;
      html += `</div>`;
    } else {
      html += `<div class="sim-center">`;
      html += `  <img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=${statsTheme}&hide_border=true" class="sim-img-widget" style="margin-bottom: 1rem;" />`;
      html += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=${statsTheme}&hide_border=true" class="sim-img-widget" />`;
      html += `</div>`;
    }
    html += `<hr/>`;
  }

  if (showWakaTime && wakatimeUser) {
    html += `<h2>🕒 WakaTime Coding Stats</h2>`;
    html += `<div class="sim-center">`;
    html += `  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=${wakatimeUser}&theme=${statsTheme}&hide_border=true" class="sim-img-widget" />`;
    html += `</div>`;
    html += `<hr/>`;
  }

  html += `<h2>⏳ ${countdownYear} Countdown</h2>`;
  html += `<div class="sim-badge-row"><img src="https://img.shields.io/badge/Days%20Left%20in%20${countdownYear}-${daysLeft}-blue?style=for-the-badge" /></div>`;
  html += `<hr/>`;

  if (showSnake && snakeUrl) {
    html += `<h2>🐍 Contribution Snake</h2>`;
    html += `<div class="sim-center"><img src="${snakeUrl}" class="sim-img-widget" /></div>`;
    html += `<hr/>`;
  }

  if (showActivityGraph && githubUser) {
    html += `<h2>📊 Contribution Activity Graph</h2>`;
    html += `<div class="sim-center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=${activityTheme}&hide_border=true" class="sim-img-widget" /></div>`;
    html += `<hr/>`;
  }

  if (roadmapItems.length > 0) {
    html += `<h2>🛣️ ${countdownYear} Roadmap</h2>`;
    html += `<ul>`;
    roadmapItems.forEach(item => {
      html += `<li>⏳ ${item}</li>`;
    });
    html += `</ul>`;
    html += `<hr/>`;
  }

  if (quote) {
    html += `<blockquote><p>${quote}</p></blockquote>`;
  }
  html += `<p>⭐ Always learning. Always building.</p>`;

  document.getElementById('visual-render-area').innerHTML = html;
}

// 10. Action Handlers (Copy, Download, Floating Toasts)
function copyToClipboard() {
  const code = document.getElementById('markdown-code-area').textContent;
  navigator.clipboard.writeText(code).then(() => {
    showFloatingToast('✨ Markdown copied successfully to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function downloadReadme() {
  const code = document.getElementById('markdown-code-area').textContent;
  const blob = new Blob([code], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'README.md');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showFloatingToast('💾 Downloading README.md profile template!');
}

function showFloatingToast(message) {
  const toast = document.getElementById('copy-toast');
  if (!toast) return;
  
  toast.querySelector('span:last-child').textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// 11. Initial Setup & Event Binds
document.addEventListener('DOMContentLoaded', () => {
  initTechGrids();
  initTabs();
  initSearchFilter();
  initCustomBadgeBuilder();
  initThemeSwitcher();
  
  // Register inputs update listener
  const form = document.getElementById('readme-form');
  const formInputs = form.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('input', generateReadme);
    input.addEventListener('change', generateReadme);
  });
  
  // Custom listeners for dynamic elements
  document.querySelectorAll('.roadmap-input').forEach(input => {
    input.addEventListener('input', generateReadme);
  });

  // Action Buttons
  document.getElementById('btn-copy').addEventListener('click', copyToClipboard);
  document.getElementById('btn-download').addEventListener('click', downloadReadme);

  // Initialize default projects
  addProjectItem(
    'ImgSeek',
    'AI-driven semantic image search engine powered by CLIP and Python.',
    'Python, Flask, React, PyTorch',
    'https://github.com/aaditya/imgseek'
  );
  addProjectItem(
    'GitSynth',
    'Premium, glassmorphic GitHub Profile README Builder with live simulation.',
    'HTML5, CSS3, JavaScript',
    'https://github.com/aaditya079/gitsynth'
  );

  // Initial Run
  generateReadme();
});
