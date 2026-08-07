// ============================================================
// KYONEX STUDIOS — SCRIPT (FULL)
// ============================================================

const app = document.getElementById('app');

// ==================== ICONS ====================
const icons = {
    steam: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 5.5L7 16l3.5-1.5L12 11l1.5 3.5L17 16l-3.5 1.5L12 21l-1.5-3.5z"/></svg>`,
    play: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5l18 8.5L3 20.5z"/></svg>`,
    apple: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
    web: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    itch: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.5 5c.828 0 1.5.672 1.5 1.5v2c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2c0-.828.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5v2c0 .828-.672 1.5-1.5 1.5S7 9.328 7 8.5v-2C7 5.672 7.672 5 8.5 5zm7.5 9.5c0 1.933-1.567 3.5-3.5 3.5h-1c-1.933 0-3.5-1.567-3.5-3.5v-3c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-3c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v3z"/></svg>`,
    epic: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h8v2H10v1h6v2h-6v1h6v2H8V8z" fill="white"/></svg>`,
    yt: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>`,
    bsky: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`,
    tt: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 2c1.3 0 2.6 0 3.9-.02.08 1.5.63 3.1 1.75 4.2 1.12 1.1 2.7 1.6 4.24 1.8v4c-1.44 0-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93 0 2.92 0 5.84-.02 8.75-.08 1.4-.54 2.8-1.35 3.94-1.3 1.92-3.58 3.17-5.9 3.21-1.44.08-2.87-.31-4.1-1.03-2-1.19-3.43-3.37-3.64-5.71 0-.5 0-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12 0 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.8.06-3.57.07-5.36 0-4.03 0-8.05.02-12.07z"/></svg>`,
    wa: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.16-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6l.45-.53c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.25-.58-.5-.5-.67-.52h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.7.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.12-.27-.2-.57-.35z"/></svg>`,
    gh: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.19.7.8.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    x: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82L4.99 21.75H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>`,
    instagram: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    fb: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

const socialIconMap = {
    github: 'gh', twitter: 'x', tiktok: 'tt', youtube: 'yt',
    instagram: 'instagram', bluesky: 'bsky', website: 'web',
    email: 'email', facebook: 'fb'
};

function getSocialIcon(key) {
    const iconKey = socialIconMap[key] || key;
    return icons[iconKey] || icons['web'];
}

// ==================== HELPERS ====================
function getProject(id) { return projectsData.find(p => p.id === id); }

function setActiveNav(view) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
}

// ==================== HOME ====================
function renderHome() {
    setActiveNav('home');
    const featured = getProject(featuredProjectId);
    
    app.innerHTML = `
        <div class="page-view flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] px-4 sm:px-6 text-center">
            
            <!-- Logo -->
            <img src="assets/logo.png" alt="Kyonex Studios Logo" class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-k-border/30 mb-5 hover:scale-110 transition-transform duration-300">
            
            <!-- Judul Berkilau -->
            <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 shimmer-text">
                Kyonex Studios<span class="text-k-accent">.</span>
            </h1>
            <p class="text-k-muted text-sm sm:text-base max-w-sm mb-12">
                Indie game studio crafting atmospheric, narrative-driven experiences.
            </p>
            
            ${featured ? `
            <!-- Featured Project -->
            <div class="w-full max-w-xl mb-10">
                <p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-4">✦ Featured Project</p>
                
                <!-- Card -->
                <div onclick="renderProjectDetail('${featured.id}')" 
                     class="featured-card relative bg-k-surface border border-k-border/40 rounded-2xl overflow-hidden text-left w-full cursor-pointer group" 
                     id="featured-card">
                    
                    <!-- Judul Besar di ATAS Foto (dengan efek shimmer) -->
                    <div class="relative px-6 pt-6 pb-3 z-10 bg-k-surface">
                        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold shimmer-text-large text-center">
                            ${featured.title}
                        </h2>
                        <!-- Partikel Bintang di sekitar judul -->
                        <div class="absolute inset-0 pointer-events-none z-20" id="star-particles"></div>
                    </div>
                    
                    <!-- Hero Image -->
                    <div class="relative h-44 sm:h-52 overflow-hidden">
                        <img src="${featured.hero}" alt="${featured.title} - Featured Game by Kyonex Studios" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-k-surface/80 via-transparent to-transparent"></div>
                    </div>
                    
                    <!-- Info Bawah -->
                    <div class="relative z-10 p-4 sm:p-5 flex items-center gap-3 bg-k-surface">
                        <img src="${featured.icon}" alt="${featured.title} App Icon" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-k-border/30 flex-shrink-0 bg-k-bg">
                        <div class="flex-1 min-w-0">
                            <p class="text-k-muted text-xs sm:text-sm">${featured.type} · ${featured.status === 'on' ? 'Available Now' : 'Coming Soon'}</p>
                        </div>
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium flex-shrink-0 ${featured.status === 'on' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
                            ${featured.status === 'on' ? 'Live' : 'Soon'}
                        </span>
                    </div>
                </div>
            </div>
            ` : ''}
            
            ${typeof eventsData !== 'undefined' && eventsData.length ? `
            <!-- Events Section -->
            <div class="w-full max-w-xl">
                <p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-4">✦ Events</p>
                <div class="space-y-3">
                    ${eventsData.map(e => {
                        const isOngoing = e.status === 'ongoing';
                        const isUpcoming = e.status === 'upcoming';
                        const isPast = e.status === 'past';
                        
                        const dotColor = isOngoing ? 'bg-emerald-400 animate-pulse' 
                                       : isUpcoming ? 'bg-amber-400' 
                                       : 'bg-k-muted';
                        
                        const statusBadge = isOngoing ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                          : isUpcoming ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                          : 'bg-k-border/30 text-k-muted border-k-border/20';
                        
                        let actionHTML = '';
                        if (isOngoing && e.link) {
                            actionHTML = `<a href="${e.link}" target="_blank" rel="noopener" class="ml-auto px-4 py-1.5 bg-k-accent hover:bg-k-acc-hov text-white text-xs font-semibold rounded-lg transition-all">${e.linkText || 'Join Now'} →</a>`;
                        } else if (isOngoing && !e.link) {
                            actionHTML = `<span class="ml-auto px-3 py-1 bg-k-accent/10 text-k-accent text-[10px] font-medium rounded-full border border-k-accent/20">${e.linkText || 'Available'}</span>`;
                        } else if (isUpcoming) {
                            actionHTML = `<span class="ml-auto px-3 py-1 bg-k-border/20 text-k-muted text-[10px] font-medium rounded-full border border-k-border/20 cursor-default">Coming Soon</span>`;
                        } else if (isPast) {
                            actionHTML = `<span class="ml-auto px-3 py-1 bg-k-border/20 text-k-muted text-[10px] font-medium rounded-full border border-k-border/20 cursor-default">Closed</span>`;
                        }
                        
                        return `
                            <div class="bg-k-surface border ${isOngoing ? 'border-emerald-500/30 ring-1 ring-emerald-500/20' : 'border-k-border/30'} rounded-xl p-4 sm:p-5 text-left transition-all">
                                <div class="flex items-start justify-between gap-3 mb-2">
                                    <div class="flex items-center gap-2">
                                        <h4 class="font-display font-bold text-sm sm:text-base">${e.title}</h4>
                                        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium border ${statusBadge}">${e.status}</span>
                                    </div>
                                    <span class="text-[10px] font-mono text-k-muted whitespace-nowrap mt-0.5">${e.date}</span>
                                </div>
                                <p class="text-k-muted text-xs sm:text-sm mb-3">${e.desc}</p>
                                <div class="flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span>
                                    <span class="text-[10px] text-k-muted uppercase tracking-wider">${isOngoing ? 'Live Now' : isUpcoming ? 'Upcoming' : 'Ended'}</span>
                                    ${actionHTML}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            ` : ''}
            
        </div>
    `;
    
    setTimeout(initStarParticles, 300);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, '', '#');
}

// ==================== STAR PARTICLES (DELTARUNE STYLE) ====================
function initStarParticles() {
    const container = document.getElementById('star-particles');
    if (!container) return;
    
    // Bersihin dulu
    container.innerHTML = '';
    
    // Bikin 25 partikel bintang
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star-particle');
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        const opacity = Math.random() * 0.6 + 0.2;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --delay: ${delay}s;
            --duration: ${duration}s;
            opacity: ${opacity};
            --drift-x: ${(Math.random() - 0.5) * 40}px;
            --drift-y: ${(Math.random() - 0.5) * 30}px;
        `;
        
        container.appendChild(star);
    }
}

// Recall pas resize biar tetap cantik
window.addEventListener('resize', () => {
    if (document.getElementById('star-particles')) {
        initStarParticles();
    }
});

// ==================== PROJECTS LIST ====================
function renderProjects() {
    setActiveNav('projects');
    app.innerHTML = `<div class="page-view max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16"><div class="mb-8"><p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-2">✦ Portfolio</p><h2 class="text-3xl sm:text-4xl font-display font-bold">Projects</h2><p class="text-k-muted text-sm mt-2">What we've been working on.</p></div><div class="space-y-4" id="projects-list"></div></div>`;
    const list = document.getElementById('projects-list');
    list.innerHTML = projectsData.map(p => `
        <div onclick="renderProjectDetail('${p.id}')" class="project-card bg-k-surface border border-k-border/30 rounded-2xl overflow-hidden w-full cursor-pointer">
            <div class="flex flex-col sm:flex-row">
                <div class="relative sm:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img src="${p.hero}" alt="${p.title} - Game Screenshot by Kyonex Studios" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-k-surface sm:bg-gradient-to-b sm:from-transparent sm:to-k-surface/80"></div>
                    <span class="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-mono font-medium ${p.status==='on'?'bg-emerald-500/15 text-emerald-400':'bg-k-border/40 text-k-off'}">${p.status==='on'?'Live':'Soon'}</span>
                </div>
                <div class="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                    <div class="flex items-center gap-3 mb-2">
                        <img src="${p.icon}" alt="${p.title} App Icon" class="w-8 h-8 rounded-lg border border-k-border/20">
                        <div>
                            <h3 class="font-display font-bold text-base sm:text-lg">${p.title}</h3>
                            <span class="text-k-muted text-xs">${p.type}</span>
                        </div>
                    </div>
                    <p class="text-k-muted text-xs sm:text-sm line-clamp-2">${p.desc}</p>
                    <div class="flex flex-wrap gap-1.5 mt-3">${[...p.meta.map(m=>m[0]),p.type].slice(0,4).map(t=>`<span class="px-2 py-0.5 bg-k-bg/60 text-k-muted text-[10px] rounded border border-k-border/10">${t}</span>`).join('')}</div>
                </div>
            </div>
        </div>`).join('');
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'','#projects');
}

// ==================== PROJECT DETAIL ====================
function renderProjectDetail(projectId) {
    const p = getProject(projectId);
    if (!p) return renderProjects();
    app.innerHTML = `
        <div class="page-view">
            <div class="relative h-48 sm:h-64 overflow-hidden">
                <img src="${p.hero}" alt="${p.title} - Game Banner by Kyonex Studios" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-k-bg via-k-bg/70 to-transparent"></div>
            </div>
            <div class="max-w-2xl mx-auto px-4 sm:px-6 -mt-12 relative z-10 space-y-6 pb-16">
                <div class="flex items-start gap-4">
                    <img src="${p.icon}" alt="${p.title} App Icon" class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-k-border/50 shadow-2xl flex-shrink-0 bg-k-surface">
                    <div class="pt-1 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h2 class="text-2xl sm:text-3xl font-display font-bold">${p.title}</h2>
                            <span class="px-2.5 py-0.5 text-[10px] font-mono font-medium ${p.status==='on'?'bg-emerald-500/10 text-emerald-400':'bg-k-border/30 text-k-off'}">${p.status==='on'?'Available':'Coming Soon'}</span>
                        </div>
                        <span class="text-k-muted text-sm">${p.type}</span>
                    </div>
                </div>
                <p class="text-k-muted text-sm sm:text-base leading-relaxed">${p.desc}</p>
                ${p.screenshots.length?`
                <div>
                    <h3 class="text-xs font-semibold text-k-muted uppercase tracking-wider mb-3">Screenshots</h3>
                    <div class="screenshot-scroll">
                        ${p.screenshots.map((s,i)=>`
                            <div class="screenshot-item cursor-pointer" onclick="openLightbox('${p.id}',${i})">
                                <img src="${s}" alt="${p.title} - Screenshot ${i+1}" class="w-full h-full object-cover" onload="adjustScreenshot(this)">
                            </div>
                        `).join('')}
                    </div>
                    <p class="text-k-muted text-[10px] mt-2">Click image to view full size</p>
                </div>`:''}
                <div class="space-y-1 text-sm">${p.meta.map(m=>`<div class="flex justify-between py-1.5 border-b border-k-border/10"><span class="text-k-muted">${m[0]}</span><span class="font-medium">${m[1]}</span></div>`).join('')}</div>
                <div><h3 class="text-xs font-semibold text-k-muted uppercase tracking-wider mb-3">Download / Play</h3><div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${p.downloads.map(d=>d.url?`<a href="${d.url}" target="_blank" rel="noopener" class="dl-btn active bg-k-accent hover:bg-k-acc-hov text-white">${icons[d.icon]||''} ${d.name}</a>`:`<span class="dl-btn na bg-k-surface border border-k-border/20 text-k-muted">${icons[d.icon]||''} ${d.name} <span class="text-[9px] ml-1">soon</span></span>`).join('')}</div></div>
                <button onclick="renderProjects()" class="text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; All Projects</button>
            </div>
        </div>`;
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'',`#project/${projectId}`);
}

// ==================== SCREENSHOT & LIGHTBOX ====================
function adjustScreenshot(img) { if (img.naturalHeight > img.naturalWidth * 1.2) img.parentElement.classList.add('portrait'); }

function openLightbox(projectId, index) {
    const p = getProject(projectId);
    if (!p || !p.screenshots.length) return;
    let currentIndex = index;
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.innerHTML = `<span class="close-hint">✕ Click anywhere to close</span>${p.screenshots.length>1?`<button class="lightbox-nav lightbox-prev" id="lb-prev">‹</button>`:''}<img src="${p.screenshots[currentIndex]}" id="lb-img">${p.screenshots.length>1?`<button class="lightbox-nav lightbox-next" id="lb-next">›</button>`:''}`;
    document.body.appendChild(overlay); document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target.tagName === 'IMG') closeLightbox(); });
    function onKey(e) { if (e.key === 'Escape') closeLightbox(); if (e.key === 'ArrowLeft') prevImage(); if (e.key === 'ArrowRight') nextImage(); }
    document.addEventListener('keydown', onKey);
    function updateImage() { const img = document.getElementById('lb-img'); if(img){img.style.opacity='0';setTimeout(()=>{img.src=p.screenshots[currentIndex];img.style.opacity='1';img.style.transition='opacity 0.2s ease';},150);} const pb=document.getElementById('lb-prev'),nb=document.getElementById('lb-next'); if(pb)pb.style.opacity=currentIndex===0?'0.3':'1'; if(nb)nb.style.opacity=currentIndex>=p.screenshots.length-1?'0.3':'1'; }
    function prevImage() { if (currentIndex > 0) { currentIndex--; updateImage(); } }
    function nextImage() { if (currentIndex < p.screenshots.length - 1) { currentIndex++; updateImage(); } }
    function closeLightbox() { document.removeEventListener('keydown', onKey); overlay.style.opacity='0';overlay.style.transition='opacity 0.2s';setTimeout(()=>{overlay.remove();document.body.style.overflow='';},200); }
    document.getElementById('lb-prev')?.addEventListener('click',(e)=>{e.stopPropagation();prevImage();});
    document.getElementById('lb-next')?.addEventListener('click',(e)=>{e.stopPropagation();nextImage();});
    updateImage();
}

// ==================== NEWS ====================
function renderNews() {
    setActiveNav('news');
    app.innerHTML = `<div class="page-view max-w-2xl mx-auto px-4 sm:px-6 py-16"><p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-2">✦ News</p><h2 class="text-3xl sm:text-4xl font-display font-bold mb-8">Latest Updates</h2><div class="space-y-4">${newsData.map(n=>`<div class="bg-k-surface border border-k-border/20 rounded-xl p-5 space-y-2"><div class="flex items-center gap-2 text-xs text-k-muted"><span class="px-2 py-0.5 bg-k-accent/10 text-k-accent rounded-full text-[10px] font-mono">${n.tag}</span>${n.date}</div><h3 class="font-display font-bold text-lg">${n.title}</h3><p class="text-k-muted text-sm">${n.excerpt}</p></div>`).join('')}</div><button onclick="renderHome()" class="mt-8 text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; Back to Home</button></div>`;
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'','#news');
}

// ==================== ABOUT ====================
function renderAbout() {
    setActiveNav('about');
    app.innerHTML = `<div class="page-view max-w-3xl mx-auto px-4 sm:px-6 py-16"><div class="text-center mb-12"><p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-3">✦ Who We Are</p><h2 class="text-3xl sm:text-4xl font-display font-bold mb-3">Meet the Team</h2><p class="text-k-muted text-sm max-w-md mx-auto">A small collective of passionate creators building worlds from scratch.</p></div><div class="grid sm:grid-cols-2 gap-4 sm:gap-5">${teamData.map(m=>`<div onclick="openMemberModal('${m.name}')" class="team-card bg-k-surface border border-k-border/20 rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:border-k-accent/20 hover:-translate-y-1 cursor-pointer"><div class="flex-shrink-0 relative">${m.photo?`<img src="${m.photo}" alt="${m.name} - ${m.role} at Kyonex Studios" class="w-14 h-14 rounded-2xl object-cover border-2 border-k-border/30">`:`<div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-k-accent/20 to-k-acc-hov/20 border-2 border-k-border/20 flex items-center justify-center"><span class="font-display font-bold text-k-accent text-lg">${m.name.charAt(0)}</span></div>`}<span class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-k-surface ${m.status==='active'?'bg-emerald-400':'bg-k-muted'}"></span></div><div class="flex-1 min-w-0 pt-0.5"><h3 class="font-display font-bold text-sm">${m.name}</h3><p class="text-k-accent text-xs font-medium mb-1">${m.role}</p><p class="text-k-muted text-xs line-clamp-2">${m.bio||'—'}</p>${Object.keys(m.social||{}).length?`<div class="flex gap-1.5 mt-2">${Object.entries(m.social).map(([k,v])=>`<span class="w-6 h-6 rounded-md bg-k-bg/60 border border-k-border/20 flex items-center justify-center text-k-muted text-[10px]" title="${k}">${getSocialIcon(k)}</span>`).join('')}</div>`:''}</div></div>`).join('')}</div><p class="text-center text-k-muted text-xs mt-10">Want to join? <a href="mailto:kyonexstudios@gmail.com" class="text-k-accent hover:text-k-acc-hov transition-colors font-medium">Reach out</a></p><div class="text-center mt-4"><button onclick="renderHome()" class="text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; Back to Home</button></div></div>`;
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'','#about');
}

function openMemberModal(name) {
    const m = teamData.find(t => t.name === name);
    if (!m) return;
    const modal = document.getElementById('member-modal');
    document.getElementById('member-modal-content').innerHTML = `
        ${m.photo ? `<img src="${m.photo}" alt="${m.name} - ${m.role} at Kyonex Studios" class="w-20 h-20 rounded-2xl object-cover border-2 border-k-border/30 mx-auto">`
        : `<div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-k-accent/20 to-k-acc-hov/20 border-2 border-k-border/20 flex items-center justify-center mx-auto"><span class="font-display font-bold text-k-accent text-2xl">${m.name.charAt(0)}</span></div>`}
        <h3 class="font-display font-bold text-lg mt-3">${m.name}</h3>
        <p class="text-k-accent text-sm font-medium">${m.role}</p>
        <p class="text-k-muted text-xs">Status: ${m.status==='active'?'🟢 Active':'⚫ Inactive'} · Joined: ${m.joinDate}</p>
        <p class="text-k-muted text-sm mt-2">${m.bio||'—'}</p>
        ${Object.keys(m.social||{}).length?`<div class="flex justify-center gap-2 mt-3">${Object.entries(m.social).map(([k,v])=>`<a href="${v}" target="_blank" rel="noopener" class="w-8 h-8 rounded-lg bg-k-bg/60 border border-k-border/20 flex items-center justify-center text-k-muted hover:text-k-text hover:border-k-accent/30 transition-all" title="${k}">${getSocialIcon(k)}</a>`).join('')}</div>`:''}
    `;
    modal.classList.remove('hidden');
}
function closeMemberModal(e) { if (e.target === document.getElementById('member-modal')) document.getElementById('member-modal').classList.add('hidden'); }

// ==================== ROADMAP ====================
function renderRoadmap() {
    setActiveNav('roadmap');
    
    app.innerHTML = `
        <div class="page-view max-w-2xl mx-auto px-4 sm:px-6 py-16">
            <p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-2">✦ Roadmap</p>
            <h2 class="text-3xl sm:text-4xl font-display font-bold mb-6">Development Timeline</h2>
            
            <!-- Year Tabs -->
            <div class="flex gap-2 mb-8 overflow-x-auto scrollbar-hide" id="roadmap-tabs">
                ${roadmapYears.map(y => `
                    <button onclick="switchRoadmapYear('${y}')" 
                            class="roadmap-tab px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap
                            ${y === activeRoadmapYear ? 'bg-k-accent text-white' : 'bg-k-surface border border-k-border/20 text-k-muted hover:text-k-text'}"
                            data-year="${y}">
                        ${y}
                    </button>
                `).join('')}
            </div>
            
            <!-- Timeline -->
            <div id="roadmap-content" class="space-y-0"></div>
            
            <button onclick="renderHome()" class="mt-10 text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; Back to Home</button>
        </div>`;
    
    renderRoadmapContent(activeRoadmapYear);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, '', '#roadmap');
}

function switchRoadmapYear(year) {
    activeRoadmapYear = year;
    // Update tab styles
    document.querySelectorAll('.roadmap-tab').forEach(tab => {
        const y = tab.dataset.year;
        if (y === year) {
            tab.className = 'roadmap-tab px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap bg-k-accent text-white';
        } else {
            tab.className = 'roadmap-tab px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap bg-k-surface border border-k-border/20 text-k-muted hover:text-k-text';
        }
    });
    renderRoadmapContent(year);
}

function renderRoadmapContent(year) {
    const content = document.getElementById('roadmap-content');
    const items = roadmapData[year] || [];
    
    content.innerHTML = items.map((r, i) => `
        <div class="flex gap-4">
            <div class="flex flex-col items-center">
                <div class="w-3 h-3 rounded-full ${r.done ? 'bg-emerald-400' : 'bg-k-border'} flex-shrink-0 mt-1"></div>
                ${i < items.length - 1 ? `<div class="w-0.5 h-full ${r.done ? 'bg-emerald-400/30' : 'bg-k-border/20'} flex-1"></div>` : ''}
            </div>
            <div class="pb-6 flex-1">
                <span class="text-[10px] font-mono text-k-muted">${r.phase}</span>
                <h3 class="font-display font-bold text-sm ${r.done ? 'text-k-text line-through decoration-emerald-400/50' : 'text-k-text'}">${r.title}</h3>
                ${r.desc ? `<p class="text-k-muted text-xs mt-0.5">${r.desc}</p>` : ''}
                ${r.done ? '<span class="inline-flex items-center gap-1 text-emerald-400 text-[10px] mt-1">✓ Done</span>' : ''}
            </div>
        </div>
    `).join('');
}

// ==================== FAQ ====================
function renderFAQ() {
    setActiveNav('faq');
    app.innerHTML = `<div class="page-view max-w-2xl mx-auto px-4 sm:px-6 py-16"><p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-2">✦ FAQ</p><h2 class="text-3xl sm:text-4xl font-display font-bold mb-8">Frequently Asked Questions</h2><div class="space-y-3">${faqData.map(f=>`<details class="bg-k-surface border border-k-border/20 rounded-xl p-5 group"><summary class="font-display font-bold text-sm cursor-pointer select-none group-open:text-k-accent transition-colors">${f.q}</summary><p class="text-k-muted text-sm mt-3 leading-relaxed">${f.a}</p></details>`).join('')}</div><button onclick="renderHome()" class="mt-8 text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; Back to Home</button></div>`;
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'','#faq');
}

// ==================== CONTACT ====================
function renderContact() {
    setActiveNav('contact');
    app.innerHTML = `<div class="page-view max-w-md mx-auto px-4 sm:px-6 py-16 text-center space-y-10"><div><p class="font-mono text-k-accent text-[10px] tracking-widest uppercase mb-2">✦ Contact</p><h2 class="text-3xl sm:text-4xl font-display font-bold">Get in Touch</h2><p class="text-k-muted text-sm mt-2">Find us on your favorite platform.</p></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${contactLinks.map(c=>`<a href="${c.url}" target="_blank" rel="noopener" class="contact-link">${icons[c.icon]||''} ${c.name}</a>`).join('')}</div><a href="mailto:kyonexstudios@gmail.com" class="inline-flex items-center gap-2 text-k-muted hover:text-k-text text-sm font-mono transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>kyonexstudios@gmail.com</a><button onclick="renderHome()" class="text-k-muted hover:text-k-text text-sm font-medium transition-colors">&larr; Back to Home</button></div>`;
    window.scrollTo({top:0,behavior:'smooth'}); window.history.replaceState({},'','#contact');
}

// ==================== INIT ====================
function init() {
    document.getElementById('year').textContent = new Date().getFullYear();
    const hash = window.location.hash.replace('#', '');
    const map = { home: renderHome, projects: renderProjects, news: renderNews, about: renderAbout, roadmap: renderRoadmap, faq: renderFAQ, contact: renderContact };
    if (hash.startsWith('project/')) renderProjectDetail(hash.split('/')[1]);
    else (map[hash] || renderHome)();
    window.addEventListener('hashchange', () => {
        const h = window.location.hash.replace('#', '');
        if (h.startsWith('project/')) renderProjectDetail(h.split('/')[1]);
        else (map[h] || renderHome)();
    });
}
document.addEventListener('DOMContentLoaded', init);
