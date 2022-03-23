const adventureData = [
    {
        id: 1,
        title: 'Madrid',
        description: 'The one where we found our flat',
        image: '../assets/Madrid-1.JPG',
        link: 'destinations/Madrid/Madrid.html'
    },
    {
        id: 2,
        title: 'Oviedo',
        description: 'The one where things got lost in translation',
        image: '../assets/Oviedo-2.JPG',
        link: 'destinations/Oviedo/Oviedo.html'

    },
    {
        id: 3,
        title: 'Sevilla',
        description: 'The one where we discovered the blue dot on the map',
        image: '../assets/Sevilla-3.JPG',
        link: 'destinations/Sevilla/Sevilla.html'


    },
    {
        id: 4,
        title: 'Tarifa & Tangier',
        description: 'The one where we learned the meaning of barter, then hop on camel',
        image: '../assets/Tarifa & Tangier-4.JPG',
        link: 'destinations/Tarifa-Tangier/Tarifa-Tangier.html'
    },
    {
        id: 5,
        title: 'Granada',
        description: 'The one where the Sultan got kicked out of Spain',
        image: '../assets/Granada-5.JPG',
        link: 'destinations/Granada/Granada.html'

    },
    {
        id: 6,
        title: 'Barcelona',
        description: 'Antonio Guadi. Need I say more',
        image: '../assets/Barcelona-6.JPG',
        link: 'destinations/Barcelona/Barcelona.html'

    },
    {
        id: 7,
        title: 'Venice',
        description: 'Hello Pasta!',
        image: '../assets/Venice-7.JPG',
        link: 'destinations/Venice/Venice.html'

    },
    {
        id: 8,
        title: 'Milan',
        description: 'Where we swam through the rain',
        image: '../assets/Milan-8.JPG',
        link: 'destinations/milan/milan.html',
    },
    {
        id: 9,
        title: 'Cinque Terre',
        description: 'Pesto please',
        image: '../assets/Cinque Terre-9.JPG',
        link: 'destinations/Cinque Terre/Cinque Terre.html',
    },
    {
        id: 10,
        title: 'Pisa & Lucca',
        description: 'How do you get to Pisa',
        image: '../assets/Pisa & Lucca-10.JPG',
        link: 'destinations/Pisa-Lucca/Pisa-Lucca.html',
    },
    {
        id: 11,
        title: 'Florence & Siena',
        description: 'climb the dome',
        image: '../assets/Florence & Siena-11.JPG',
        link: 'destinations/Florence-Siena/Florence-Siena.html',
    },
    {
        id: 12,
        title: 'Rome',
        description: 'Colesum',
        image: '../assets/Rome-12.JPG',
        link: 'destinations/Rome/Rome.html',
    },
    {
        id: 13,
        title: 'Pompeii',
        description: '',
        image: '../assets/Pompeii-13.JPG',
        link: 'destinations/Pompeii/Pompeii.html',
    },
    {
        id: 14,
        title: 'Sorrento & Amalfi Coast',
        description: 'Colesum',
        image: '../assets/Sorrento & Amalfi Coast-14.JPG',
        link: 'destinations/Sorrento-Amalfi/Sorrento-Amalfi.html',
    },

    {
        id: 15,
        title: 'Naples',
        description: '',
        image: '../assets/Naples-15.JPG',
        link: 'destinations/Naples/Naples.html',
    },
    {
        id: 16,
        title: 'Albania',
        description: '',
        image: '../assets/Albania-16.JPG',
        link: 'destinations/Albania/Albania.html',
    },      
    {
        id: 17,
        title: 'Corfu',
        description: '',
        image: '../assets/Corfu-17.JPG',
        link: 'destinations/Corfu/Corfu.html',
    }, 
    {
        id: 18,
        title: 'Hydra',
        description: '',
        image: '../assets/Hydra-18.JPG',
        link: 'destinations/Hydra/Hydra.html',
    }, 
    {
        id: 19,
        title: 'Athens',
        description: '',
        image: '../assets/Athens-19.JPG',
        link: 'destinations/Athens/Athens.html',
    }, 
    {
        id: 20,
        title: 'Paris',
        description: '',
        image: '../assets/Paris-20.JPG',
        link: 'destinations/Paris/Paris.html',
    }, 
    {
        id: 21,
        title: 'D-Day beaches',
        description: '',
        image: '../assets/D-Day beaches-21.JPG',
        link: 'destinations/D-Day/D-Day.html',
    },
    {
        id: 22,
        title: 'London',
        description: '',
        image: '../assets/London-22.jpg',
        link: 'destinations/London/London.html',
    }, 
    {
        id: 23,
        title: 'Dublin',
        description: '',
        image: '../assets/Dublin-23.JPG',
        link: 'destinations/Dublin/Dublin.html',
    },
];

function populateAdventures() {
    console.log("inpopulateadventures")
    const adventurePage = document.getElementById('adventure-page')

    adventureData.forEach(adventure => {
        const adventureElements = createAdventureHTMLElements(adventure);
        appendAdventureChildrenElements(adventureElements);

        adventurePage.appendChild(adventureElements.aTag);
    });
}

function createAdventureHTMLElements(adventure) {
    const aTag = document.createElement('a');
    aTag.href = adventure.link;
    const adventureCard = document.createElement('div');
    adventureCard.className = 'adventure-card';

    const adventureContent = document.createElement('div');
    adventureContent.className = 'adventure-content';

    aTag.appendChild(adventureCard);

    const imgElement = buildImgTag(adventure.image);
    const titleElement = buildTitleElement(adventure.title);
    const descriptionElement = buildDescription(adventure.description);

    return {
        aTag,
        adventureCard,
        adventureContent,
        imgElement,
        titleElement,
        descriptionElement,
    };
}



function appendAdventureChildrenElements({ adventureCard, adventureContent, imgElement, titleElement, descriptionElement }) {

    adventureCard.appendChild(imgElement);
    adventureContent.appendChild(titleElement);
    adventureContent.appendChild(descriptionElement);
    adventureCard.appendChild(adventureContent);
}

function buildImgTag(src) {
    let img = document.createElement('img');
    img.src = src
    img.width = 300;

    return img;
}

function buildTitleElement(title) {
    let titleElement = document.createElement('div');
    titleElement.className = 'adventure-title';
    titleElement.innerHTML = title;

    return titleElement;
}

function buildDescription(description) {
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'description';
    descriptionElement.innerHTML = description;

    return descriptionElement;
}

function addDialogEventListener(element, title) {
    element.addEventListener('click', () => openDialog(title))
}

function openDialog(title) {
    modal.style.display = 'block';
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerHTML = title;
}

populateAdventures();
