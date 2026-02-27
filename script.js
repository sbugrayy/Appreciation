const people = [
    { name: "Buğra Yıldırım", link: "https://www.linkedin.com/in/bugra-yildirim" },
    { name: "Ayşenur Ebrar Gündüz", link: "https://www.linkedin.com/in/ay%C5%9Fenur-g%C3%BCnd%C3%BCz/" },
    { name: "Aleyna Geçit", link: "https://www.linkedin.com/in/aleyna-ge%C3%A7it-727a1529a/" },
    { name: "Fatma Nisa Paktunç", link: "https://www.linkedin.com/in/fatma-nisa-paktun%C3%A7/" },
    { name: "Zeynep Zilan Korkmaz", link: "https://www.linkedin.com/in/zeynep-zilan-korkmaz-6621a62a4/" },
    { name: "Fahri Gündüz", link: "https://www.linkedin.com/in/fahri-g%C3%BCnd%C3%BCz-fg2004/" },
    { name: "Yasemin Eyibil", link: "https://www.linkedin.com/in/yasemin-eyibil-28244338a/" },
    { name: "İlayda Demir", link: "https://www.linkedin.com/in/ilayda-demir-215608291/" },
    { name: "Fatma Nur Günaydın", link: "https://www.linkedin.com/in/fatma-nur-g%C3%BCnayd%C4%B1n-1a2998297/" },
    { name: "Zeynep Akbulut", link: "https://www.linkedin.com/in/zeynep-akbulut-649905253/" },
    { name: "Safa Kaya", link: "https://www.linkedin.com/in/safa-kaya-278254342/" },
    { name: "Nisanur Cünnük", link: "https://www.linkedin.com/in/nisanur-c%C3%BCnn%C3%BCk-39a27b387/" },
    { name: "Yasin Emre Sönmezsoy", link: "https://www.linkedin.com/in/yasin-s%C3%B6nmezsoy-a170732a2/" },
    { name: "Ruveyda Zeynep Nur Taşcı", link: "https://www.linkedin.com/in/zeynep-ta%C5%9Fc%C4%B1-65a910346/" },
    { name: "Zeynep Söyler", link: "https://www.linkedin.com/in/zynpsylr/" },
    { name: "Gizem Çetinkaya", link: "https://www.linkedin.com/in/gizem-%C3%A7etinkaya-04483131a/" },
    { name: "İlayda Nur Akgül", link: "https://www.linkedin.com/in/ilaydaakgul/" },
    { name: "Güneş Öztürk", link: "https://www.linkedin.com/in/g%C3%BCne%C5%9F-%C3%B6zt%C3%BCrk-2b5a27332/" },
    { name: "İlke Poyraz", link: "https://www.linkedin.com/in/ilke-poyraz-a1b190358/" },
    { name: "Murat Efe Çamoğlu", link: "https://www.linkedin.com/in/murat-efe-%C3%A7amo%C4%9Flu/" },
    { name: "Ömer Coşkun", link: "https://www.linkedin.com/in/%C3%B6mer-co%C5%9Fkun-220157295/" },
    { name: "Hayrunnisa Uluçay", link: "https://www.linkedin.com/in/nisa-ulu%C3%A7ay-49515b388/" },
    { name: "Mertcan Aydemir", link: "https://www.linkedin.com/in/mertcan-aydemir-2b6b29387/" },
    { name: "Melis Gülin Turgut", link: "https://www.linkedin.com/in/melis-g%C3%BClin-turgut-b92891353/" },
    { name: "Fahriye Elif Dikci", link: "https://www.linkedin.com/in/fahriye-elif-dikci-55b4a62b3/" },
    { name: "İrem İclal Karapınar", link: "https://www.linkedin.com/in/irem-iclal-karap%C4%B1nar-4257972a3/" },
    { name: "Beyza Nur Özdemir", link: "https://www.linkedin.com/in/beyza-nur-%C3%B6zdemir-830752319/" }
];

function getInitials(name) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

const container = document.getElementById("card-container");

const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;

people.forEach((person, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.style.transitionDelay = `${(index % 10) * 0.1}s`;

    card.innerHTML = `
        <div class="avatar">${getInitials(person.name)}</div>
        <h3 class="name">${person.name}</h3>
        <a href="${person.link}" target="_blank" rel="noopener noreferrer" class="linkedin-btn">
            ${linkedinIcon} LinkedIn
        </a>
    `;

    container.appendChild(card);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "50px"
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
