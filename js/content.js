const sambutan = "Hey! Hendrik Disini";
const introText = "Hai! Selamat datang. Situs ini merupakan situs pribadi yang digunakan sebagai tempat untuk memuat informasi pribadi dan mengarsipkan berbagai karya-karya ataupun project yang pernah saya buat atau lakukan.";
const tulisan = "📝 Tulisan Terbaru";
const githubAnalyticsTitle = "🥉 GitHub Analytics";
const technologiesTitle = "⚙️ Teknologi Yang Aku Pakai";

const techBadges = [
    '<img src="https://img.shields.io/badge/-Python-05122A?style=flat&logo=python" alt="Python Badge">',
    '<img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="JavaScript Badge">',
    '<img src="https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js" alt="Node.js Badge">',
    '<img src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git" alt="Git Badge">',
    '<img src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" alt="GitHub Badge">',
    '<img src="https://img.shields.io/badge/-Debian-c95534?style=flat&logo=debian" alt="Debian Badge">',
    '<img src="https://img.shields.io/badge/-Kali%20Linux-cfcaa1?style=flat&logo=kali-linux" alt="Kali Linux Badge">',
    '<img src="https://img.shields.io/badge/-Proxmox%20Virtual%20Environment-21211c?style=flat&logo=Proxmox" alt="Proxmox Badge">',
    '<img src="https://img.shields.io/badge/-Mikrotik-21211c?style=flat&logo=Mikrotik" alt="Mikrotik Badge">',
    '<img src="https://img.shields.io/badge/-Pihole-21211c?style=flat&logo=Pihole" alt="Pihole Badge">'
];

document.getElementById('sambut').textContent = sambutan;
document.getElementById('intro-text').textContent = introText;
document.getElementById('submedium').textContent = tulisan;
document.getElementById('github-analytics').textContent = githubAnalyticsTitle;
document.getElementById('technologies-title').textContent = technologiesTitle;

const techBadgesContainer = document.getElementById('tech-badges');
techBadges.forEach(badge => {
    techBadgesContainer.innerHTML += badge + '&nbsp;';
});
