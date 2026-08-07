const featuredProjectId = 'lunesgarden';

// ---------- EVENTS (tampil di Home) ----------
const eventsData = [
    {
        title: '⏹️ 2048 Ultimate Release!',
        date: '04-07-2026',
        desc: 'An old-school puzzle game with a modern UI and more features is now here, try the fun.',
        status: 'ongoing',
        link: '',
        linkText: 'Play Now'
    },
    {
        title: '🌙 LUNESGARDEN Alpha Test',
        date: '27-10-2026',
        desc: 'First public alpha! Limited slots available. Sign up to be among the first to explore the garden.',
        status: 'upcoming', // 'upcoming', 'ongoing', 'past'
        link: '',
        linkText: 'Register Interest'
    },
    {
        title: '🌟 LUNESGARDEN Beta Test',
        date: 'TBA',
        desc: 'Beta with expanded content.',
        status: 'upcoming',
        link: '',
        linkText: 'Coming Soon'
    },
    {
        title: '⚡ Upcoming our first Project',
        date: 'TBA',
        desc: 'Our first project, 2048 Games Merge is coming back with a modern UI and exclusive updates.',
        status: 'upcoming',
        link: '',
        linkText: 'Coming Soon'
    }
];

const projectsData = [
    {
        id: 'lunesgarden',
        title: 'LUNESGARDEN',
        icon: 'assets/projects/lunesgarden/icon.png',
        hero: 'assets/projects/lunesgarden/hero.png',
        type: 'Game',
        status: 'off',
        desc: '🌙 LUNESGARDEN — A mystical farming RPG where your garden grows more than crops. Plant, battle, explore dungeons, and uncover the secrets of a forgotten god.',
        screenshots: ['assets/projects/lunesgarden/ss1.png','assets/projects/lunesgarden/ss2.png', 'assets/projects/lunesgarden/ss3.png', 'assets/projects/lunesgarden/ss4.png'],
        meta: [
            ['Genre', 'Farming RPG / Mystery'],
            ['Platform', 'PC, Mobile (Planned)'],
            ['Engine', 'Godot Engine 4'],
            ['Status', 'In Active Development'],
        ],
        downloads: [
            { name: 'Steam', url: '', icon: 'steam' },
            { name: 'itch.io', url: '', icon: 'itch' },
            { name: 'Epic Games', url: '', icon: 'epic' },
            { name: 'Google Play', url: '', icon: 'play' },
        ]
    },
    {
        id: 'catchthestar',
        title: 'Catch the Star',
        icon: 'assets/projects/catchthestar/icon.png',
        hero: 'assets/projects/catchthestar/hero.png',
        type: 'Game',
        status: 'on',
        desc: '✨ Catch the Star — A fast-paced arcade game where you tap stars, dodge bombs, and chain combos before time runs out!',
        screenshots: ['assets/projects/catchthestar/ss1.png','assets/projects/catchthestar/ss2.png','assets/projects/catchthestar/ss3.png','assets/projects/catchthestar/ss4.png'],
        meta: [
            ['Genre', 'Puzzle, Arcade'],
            ['Platform', 'PC, Mobile'],
            ['Engine', 'Vanilla JS'],
            ['Status', 'Live'],
        ],
        downloads: [
            //{ name: 'itch.io', url: 'https://kyonex.itch.io/catch-the-star', icon: 'itch' },
            { name: 'Play in Web', url: 'https://catch-thestars.netlify.app/', icon: 'web' },
        ]
    },
    {
        id: '2048ultimate',
        title: '2048 Ultimate',
        icon: 'assets/projects/2048ultimate/icon.png',
        hero: 'assets/projects/2048ultimate/hero.png',
        type: 'Game',
        status: 'on',
        desc: '✨ Catch the Star — A fast-paced arcade game where you tap stars, dodge bombs, and chain combos before time runs out!',
        screenshots: ['assets/projects/catchthestar/ss1.png','assets/projects/catchthestar/ss2.png','assets/projects/catchthestar/ss3.png','assets/projects/catchthestar/ss4.png'],
        meta: [
            ['Genre', 'Puzzle, Arcade'],
            ['Platform', 'PC, Mobile'],
            ['Engine', 'Vanilla JS'],
            ['Status', 'Live'],
        ],
        downloads: [
            //{ name: 'itch.io', url: 'https://kyonex.itch.io/catch-the-star', icon: 'itch' },
            { name: 'Play in Web', url: 'https://catch-thestars.netlify.app/', icon: 'web' },
        ]
    }
];

const teamData = [
    {
        name: 'Kez Mith (Kuznetsov)',
        role: 'Lead Developer',
        photo: 'assets/team/kuznetsov.png',
        bio: 'Full-stack sorcerer who talks to machines at 3 AM. Builds worlds in Godot, leaves secret signs in unreachable corners, and firmly believes every bug is just an undocumented feature. >:3',
        status: 'active',
        joinDate: '26-03-2025',
        social: {}
    },
    {
        name: 'Alina KTH',
        role: 'Composer & Sound Designer',
        photo: 'assets/team/alina.png',
        bio: 'Classically trained, creatively unhinged. Paints emotions with soundwaves and believes the right note at the right moment can change everything.',
        status: 'active',
        joinDate: '07-04-2025',
        social: {}
    },
    {
        name: 'STD',
        role: 'Pixel Artist',
        photo: '',
        bio: 'On the hunt for someone who sees poetry in 16×16 grids. If you dream in pixels and breathe color palettes — this seat has your name on it.',
        status: 'inactive',
        joinDate: '26-12-2025',
        social: {}
    },
    {
        name: 'Stud',
        role: 'Composer of Soundtracks',
        photo: 'assets/team/stud.png',
        bio: 'Melody weaver. Mood architect. Turns silence into stories and game moments into memories you can hear long after the screen fades.',
        status: 'active',
        joinDate: '07-04-2026',
        social: {
            yt: 'https: //youtube.com/@studakanewbie'
        }
    },
    {
        name: 'Blackman»',
        role: '3D Model Artist',
        photo: 'assets/team/blackman.png',
        bio: 'Shapes reality from vertices and polygons. Brings depth to flat worlds — literally. If it has three dimensions, he probably built it.',
        status: 'active',
        joinDate: '12-04-2026',
        social: {
            fb: 'https://www.facebook.com/profile.php?id=61571221531540&mibextid=ZbWKwL'
        }
    }
];

const contactLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@kyonexstudios', icon: 'yt' },
    { name: 'Blue Sky', url: 'https://bsky.app/profile/kyonex.bsky.social', icon: 'bsky' },
    { name: 'TikTok', url: 'https://tiktok.com/@kyonexstudios', icon: 'tt' },
    { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbAjPZz7T8bRRmhy2G0M', icon: 'wa' },
    { name: 'GitHub', url: 'https://github.com/kyonex-studios', icon: 'gh' },
    { name: 'X / Twitter', url: 'https://x.com/Dev2Us', icon: 'x' },
    { name: 'Itch.io', url: 'https://kyonex-studios.itch.io', icon: 'itch'}
];

const roadmapData = {
    '2025': [
        { phase: 'Q1 2025', title: 'Team Formation', desc: 'Assembled the founding members of Kz.Studios. The seed is planted.', done: true },
        { phase: 'Q2 2025', title: 'First Project: 2048 Merge', desc: 'Developed and launched 2048 Games Merge — a fresh take on the classic tile puzzle.', done: true },
        { phase: 'Q3 2025', title: 'Polish & Public Deploy', desc: 'Squashed bugs, polished UI, and deployed 2048 Merge to the public.', done: true },
        { phase: 'Q4 2025', title: '2048 Remake Planning', desc: 'Started blueprinting 2048 Games Remake Ex — same soul, bigger ambitions.', done: true },
        { phase: 'Q5 2025', title: '2048 Remake Launch', desc: 'Released 2048 Games Remake Ex with new visuals, mechanics, and polish.', done: true },
        { phase: 'Q6 2025', title: 'First Rebrand: Dev2Us', desc: 'New name, new icon, same fire. Hello, Dev2Us era.', done: true },
        { phase: 'Q7 2025', title: 'LUNESGARDEN Conception', desc: 'Dreamed up a farming RPG with monsters, dungeons, and a forgotten god. LUNESGARDEN is born.', done: true },
        { phase: 'Q8 2025', title: 'Final Rebrand: Kyonex Studios', desc: 'Locked in our forever identity. Kyonex Studios — crafting worlds worth getting lost in.', done: true }
    ],
    '2026': [
        { phase: 'Q1 2026', title: '2048 Remake — Content Drop', desc: 'New themes, leaderboards, and quality-of-life features added to 2048 Remake Ex.', done: true },
        { phase: 'Q2 2026', title: '2048 Merge — Content Drop', desc: 'Refreshed 2048 Merge with new modes, smoother UI, and general love.', done: true },
        { phase: 'Q3 2026', title: 'Catch the Star 2.0', desc: 'Developed and released a fast-paced arcade mini-game as a fun side project. ✨', done: true },
        { phase: 'Q4 2026', title: 'LUNESGARDEN — Core Overhaul', desc: 'Rebuilt farming, inventory, dialogue, and multi-language systems. Solid foundations.', done: true },
        { phase: 'Q5 2026', title: 'Monster & Dungeon Prototype', desc: 'Turn-based battle system and procedural dungeon generation enter testing phase.', done: false },
        { phase: 'Q6 2026', title: '🌙 Alpha Test', desc: 'Scheduled: October 27, 2026. First public hands-on with LUNESGARDEN. Limited slots.', done: false },
        { phase: 'Q7 2026', title: 'Alpha Polish', desc: 'Bug fixing, balancing, and feedback integration from alpha testers.', done: false },
        { phase: 'Q8 2026', title: '🌟 Beta Test', desc: 'Scheduled: December 12, 2026. Closed beta with expanded content and final stress tests.', done: false }
    ]
};

const roadmapYears = Object.keys(roadmapData).sort();
let activeRoadmapYear = roadmapYears[roadmapYears.length - 1]; // Default ke tahun terbaru

const faqData = [
    {
        q: 'What is Kyonex Studios?',
        a: 'Kyonex Studios is a small indie game development team based in Indonesia with members from Malaysia. We focus on creating atmospheric, narrative-driven games with unique mechanics. The team was founded on March 26, 2025.'
    },
    {
        q: 'What is LUNESGARDEN?',
        a: 'LUNESGARDEN is our flagship title — a mystical farming RPG blending crop management, monster taming, and dungeon exploration. Plant, battle, and uncover the secrets of a world watched over by the forgotten god Nirwastu.'
    },
    {
        q: 'When will LUNESGARDEN be released?',
        a: 'Alpha testing is planned for October 27, 2026, with closed beta following on December 12, 2026. Full release is targeted for 2027.'
    },
    {
        q: 'What platforms will LUNESGARDEN be on?',
        a: 'LUNESGARDEN will be available on PC (Steam, Epic Games Store) and Mobile (Google Play Store). We\'re developing for both PC and mobile simultaneously, with cross-platform compatibility in mind.'
    },
    {
        q: 'Will LUNESGARDEN be free?',
        a: 'No, LUNESGARDEN will be a paid premium game. However, we\'re committed to keeping the price affordable — relatively cheap depending on your platform and region. No microtransactions, no pay-to-win. You buy it once, you own it forever.'
    },
    {
        q: 'What languages does LUNESGARDEN support?',
        a: 'LUNESGARDEN supports 4 languages: English (EN), Indonesian (ID), Russian (RU), and Malaysian (MY). Each language version features distinct character personalities — it\'s not just translation, it\'s localization with soul.'
    },
    {
        q: 'Where is Kyonex Studios located?',
        a: 'We are based in Indonesia, with team members also from Malaysia. We\'re a fully remote indie team working across borders.'
    },
    {
        q: 'Can I join Kyonex Studios?',
        a: 'We are currently not accepting new members. Our team is small and tight-knit, and we\'re focused on completing LUNESGARDEN. If opportunities open up in the future, we\'ll announce it on our social media.'
    },
    {
        q: 'What engine does LUNESGARDEN use?',
        a: 'LUNESGARDEN is built on Godot Engine 4 — an open-source, powerful game engine that gives us full creative control.'
    },
    {
        q: 'How can I support Kyonex Studios?',
        a: 'The best way to support us is by wishlisting LUNESGARDEN on Steam, following our social media, and sharing our games with friends. When the alpha test opens, your feedback will be invaluable!'
    },
    {
        q: 'Do you have other games?',
        a: 'Yes! We\'ve released 2048 Games Merge, 2048 Games Remake Ex, and Catch the Star 2.0 — all available to play for free on our website and itch.io.'
    },
    {
        q: 'I found a bug / have feedback. How do I contact you?',
        a: 'Email us at kyonexstudios@gmail.com or reach out through any of our social media channels. We read every message!'
    }
];

const newsData = [
    { date: 'June 2026', title: 'Alpha Test Announcement', excerpt: 'LUNESGARDEN alpha testing scheduled for October 2026! Systems overhaul in progress.', tag: 'Announcement' },
    { date: 'May 2026', title: 'New Team Members', excerpt: 'Welcoming Govemmoveg and Blackman» to Kyonex Studios! Soundtrack and 3D assets incoming.', tag: 'Team' },
    { date: 'April 2026', title: 'Catch the Star 2.0 Released', excerpt: 'Our arcade mini-game gets a major upgrade — new rarities, combos, power-ups, and more!', tag: 'Release' },
];
