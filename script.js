const people = [
    { name: "Buğra Yıldırım", link: "https://www.linkedin.com/in/bugra-yildirim" },
    { name: "Ayşenur Ebrar Gündüz", link: "https://www.linkedin.com/in/aysenur-ebrar-gunduz" },
    { name: "Aleyna Geçit", link: "https://www.linkedin.com/in/aleyna-gecit" },
    { name: "Fatma Nisa Paktunç", link: "https://www.linkedin.com/in/fatma-nisa-paktunc" },
    { name: "Zeynep Zilan Korkmaz", link: "https://www.linkedin.com/in/zeynep-zilan-korkmaz" },
    { name: "Fahri Gündüz", link: "https://www.linkedin.com/in/fahri-gunduz" },
    { name: "Yasemin Eyibil", link: "https://www.linkedin.com/in/yasemin-eyibil" },
    { name: "İlayda Demir", link: "https://www.linkedin.com/in/ilayda-demir" },
    { name: "Fatma Nur Günaydın", link: "https://www.linkedin.com/in/fatma-nur-gunaydin" },
    { name: "Zeynep Akbulut", link: "https://www.linkedin.com/in/zeynep-akbulut" },
    { name: "Safa Kaya", link: "https://www.linkedin.com/in/safa-kaya" },
    { name: "Nisanur Cünnük", link: "https://www.linkedin.com/in/nisanur-cunnuk" },
    { name: "Yasin Emre Sönmezsoy", link: "https://www.linkedin.com/in/yasin-emre-sonmezsoy" },
    { name: "Ruveyda Zeynep Nur Taşçı", link: "https://www.linkedin.com/in/ruveyda-zeynep-nur-tasci" },
    { name: "Zeynep Söyler", link: "https://www.linkedin.com/in/zynpsylr" },
    { name: "Gizem Çetinkaya", link: "https://www.linkedin.com/in/gizem-cetinkaya" },
    { name: "İlayda Nur Akgül", link: "https://www.linkedin.com/in/ilayda-nur-akgul" },
    { name: "Güneş Öztürk", link: "https://www.linkedin.com/in/gunes-ozturk" },
    { name: "İlke Poyraz", link: "https://www.linkedin.com/in/ilke-poyraz" },
    { name: "Murat Efe Çamoğlu", link: "https://www.linkedin.com/in/murat-efe-camoglu" },
    { name: "Ömer Coşkun", link: "https://www.linkedin.com/in/omer-coskun" },
    { name: "Hayrunnisa Uluçay", link: "https://www.linkedin.com/in/hayrunnisa-ulucay" },
    { name: "Mertcan Aydemir", link: "https://www.linkedin.com/in/mertcan-aydemir" },
    { name: "Melis Gülin Turgut", link: "https://www.linkedin.com/in/melis-gulin-turgut" },
    { name: "Fahriye Elif Dikci", link: "https://www.linkedin.com/in/fahriye-elif-dikci" },
    { name: "İrem İclal Karapınar", link: "https://www.linkedin.com/in/irem-iclal-karapinar" },
    { name: "Beyza Nur Özdemir", link: "https://www.linkedin.com/in/beyza-nur-ozdemir" }
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
