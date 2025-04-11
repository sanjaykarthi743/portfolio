// DOM Elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const loader = document.querySelector('.loader');
const featuredGrid = document.querySelector('.featured-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const photoGrid = document.getElementById('photo-grid');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');


const celebrities = [
    {
        id: 1,
        name: 'Hiphop Thamizha',
        category: 'pop',
        description: 'Recharge-25',
        image: 'images/celebrity1/featured.jpg'
    },
    {
        id: 2,
        name: 'Priyanka NK',
        category: 'r&b',
        description: 'Recharge-25',
        image: 'images/celebrity2/featured.jpg'
    },
    {
        id: 3,
        name: 'Sai abhyankkar',
        category: 'pop',
        description: 'Recharge-25',
        image: 'images/celebrity3/featured.jpg'
    },
    {
        id: 4,
        name: 'Yogisekar',
        category: 'pop',
        description: 'Recharge-25',
        image: 'images/celebrity4/featured.jpg'
    },
    {
        id: 5,
        name: 'Yuvan Shankar Raja',
        category: 'alternative',
        description: 'Celanza-25',
        image: 'images/celebrity5/featured.jpg'
    },
    {
        id: 6,
        name: 'Andrea Jeremiah',
        category: 'latin',
        description: 'Celanza-25',
        image: 'images/celebrity6/featured.jpg'
    },
    {
        id: 7,
        name: 'Priyanka NK',
        category: 'latin',
        description: 'Celanza-25',
        image: 'images/celebrity7/featured.jpg'
    },
    {
        id: 8,
        name: 'Diwakar',
        category: 'latin',
        description: 'Celanza-25',
        image: 'images/celebrity8/featured.jpg'
    },
    {
        id: 9,
        name: 'Adithya RKay',
        category: 'latin',
        description: 'Celanza-25',
        image: 'images/celebrity9/featured.jpg'
    }
    
    
];

const photos = {
    1: [
        { id: 1, src: 'images/celebrity1/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity1/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity1/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity1/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity1/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity1/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity1/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity1/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity1/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity1/10.jpg', category: 'crowd'}
    ],
    2: [
        { id: 1, src: 'images/celebrity2/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity2/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity2/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity2/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity2/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity2/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity2/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity2/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity2/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity2/10.jpg', category: 'crowd'}
    ],
    3: [
        { id: 1, src: 'images/celebrity3/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity3/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity3/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity3/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity3/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity3/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity3/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity3/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity3/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity3/10.jpg', category: 'crowd'}
    ],
    4: [
        { id: 1, src: 'images/celebrity4/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity4/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity4/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity4/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity4/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity4/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity4/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity4/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity4/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity4/10.jpg', category: 'crowd'}
    ], 
    5: [
        { id: 1, src: 'images/celebrity5/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity5/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity5/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity5/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity5/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity5/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity5/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity5/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity5/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity5/10.jpg', category: 'crowd'}
    ],
    6: [
        { id: 1, src: 'images/celebrity6/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity6/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity6/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity6/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity6/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity6/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity6/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity6/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity6/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity6/10.jpg', category: 'crowd'}
    ],
    7: [
        { id: 1, src: 'images/celebrity7/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity7/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity7/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity7/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity7/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity7/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity7/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity7/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity7/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity7/10.jpg', category: 'crowd'}
    ],
    8: [
        { id: 1, src: 'images/celebrity8/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity8/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity8/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity8/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity8/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity8/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity8/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity8/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity8/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity8/10.jpg', category: 'crowd'}
    ],
    9: [
        { id: 1, src: 'images/celebrity9/1.jpg', category: 'closeup'},
        { id: 2, src: 'images/celebrity9/2.jpg', category: 'stage'},
        { id: 3, src: 'images/celebrity9/3.jpg', category: 'crowd'},
        { id: 4, src: 'images/celebrity/4.jpg', category: 'closeup'},
        { id: 5, src: 'images/celebrity9/5.jpg', category: 'stage'},
        { id: 6, src: 'images/celebrity9/6.jpg', category: 'crowd'},
        { id: 7, src: 'images/celebrity9/7.jpg', category: 'crowd'},
        { id: 8, src: 'images/celebrity9/8.jpg', category: 'crowd'},
        { id: 9, src: 'images/celebrity9/9.jpg', category: 'crowd'},
        { id: 10, src: 'images/celebrity9/10.jpg', category: 'crowd'}
    ]
};


window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1500);
});


burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});


window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});


function populateFeatured() {
    featuredGrid.innerHTML = '';
    celebrities.forEach(celebrity => {
        const item = document.createElement('div');
        item.className = 'featured-item fade-in';
        item.innerHTML = `
            <img src="${celebrity.image}" alt="${celebrity.name}" class="featured-img">
            <div class="featured-overlay">
                <h3>${celebrity.name}</h3>
                <p>${celebrity.description}</p>
            </div>
        `;
        item.addEventListener('click', () => {
            window.location.href = `gallery.html?id=${celebrity.id}`;
        });
        featuredGrid.appendChild(item);
    });
}


function loadCelebrityGallery() {
    const urlParams = new URLSearchParams(window.location.search);
    const celebrityId = urlParams.get('id');
    
    if (celebrityId && photos[celebrityId]) {
        const celebrity = celebrities.find(c => c.id == celebrityId);
        if (celebrity) {
            document.getElementById('celebrity-name').textContent = celebrity.name;
            document.getElementById('celebrity-description').textContent = celebrity.description;
            document.title = `${celebrity.name} | SanSnaps`;
            
            
            populatePhotos(photos[celebrityId]);
        }
    }
}


function populatePhotos(photoArray, filter = 'all') {
    photoGrid.innerHTML = '';
    
    const filteredPhotos = filter === 'all' 
        ? photoArray 
        : photoArray.filter(photo => photo.category === filter);
    
    filteredPhotos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = photo.category;
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" data-id="${photo.id}">
        `;
        item.addEventListener('click', () => openLightbox(photoArray, photo.id));
        photoGrid.appendChild(item);
    });
}


if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const urlParams = new URLSearchParams(window.location.search);
            const celebrityId = urlParams.get('id');
            
            if (celebrityId && photos[celebrityId]) {
                populatePhotos(photos[celebrityId], btn.dataset.filter);
            }
        });
    });
}


if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        
        
        contactForm.reset();
        
      
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    populateFeatured();
} else if (window.location.pathname.includes('gallery.html')) {
    loadCelebrityGallery();
}