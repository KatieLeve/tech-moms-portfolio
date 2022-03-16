const adventureData = [
    {
        id: 1,
        title: 'Madrid',
        description: 'The one where we found our flat',
        image: 'assets/Madrid-1.jpg',
        link: 'components/destinations/Madrid/Madrid.html'
    },
    {
        id: 2,
        title: 'Oviedo',
        description: 'The one where things got lost in translation',
        image: 'assets/Oviedo-2.jpg',
        link: 'components/destinations/Oviedo/Oviedo.html'

    },
    {
        id: 3,
        title: 'Sevilla',
        description: 'The one where we discovered the blue dot on the map',
        image: 'assets/Sevilla-3.jpg',
        link: 'components/destinations/Sevilla/Sevilla.html'


    },
    {
        id: 4,
        title: 'Tarifa & Tangier',
        description: 'The one where we learned the meaning of barter, then hop on camel',
        image: 'assets/Tarifa & Tangier-4.jpg',
    },
    {
        id: 5,
        title: 'Granada',
        description: 'The one where the Sultan got kicked out of Spain',
        image: 'assets/Granada-5.jpg',
    },
    {
        id: 6,
        title: 'Barcelona',
        description: 'Antonio Guadi. Need I say more',
        image: 'assets/Barcelona-6.jpg',
    },
    {
        id: 7,
        title: 'Venice',
        description: 'Hello Pasta!',
        image: 'assets/Venice-7.jpg',
    },
    {
        id: 8,
        title: 'Milan',
        description: 'Where we swam through the rain',
        image: 'assets/Milan-8.jpg',
        link: 'components/destinations/milan/milan.html',
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

    function appendAdventureChildrenElements({ adventureCard, adventureContent, imgElement, titleElement, descriptionElement}) {

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
setActiveLink();
