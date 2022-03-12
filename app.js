const adventureData = [
    {
        id: 1,
        title: 'Madrid',
        description: 'Enjoy kayaking on a smooth reservoir. No motorized boats are allowed here. Great for beginners.',
        image: 'assets/Madrid-1.jpg',
        link: 'components/destinations/destinations.html'
    },
    {
        id: 2,
        title: 'Oviedo',
        description: 'Want the ultimate adventure? Kayak through caves in this expert guided tour.',
        image: 'assets/Oviedo-2.jpg',
    },
    {
        id: 3,
        title: 'Sevilla',
        description: 'Enjoy a beautiful sunset from a kayak. With dinner provided, it doesn\'t get much better than this. All levels welcome.',
        image: 'assets/Sevilla-3.jpg',

    },
    {
        id: 4,
        title: 'Tarifa & Tangier',
        description: 'Take a scenic float surrounded by mountains',
        image: 'assets/Tarifa & Tangier-4.jpg',
    },
    {
        id: 5,
        title: 'Granada',
        description: 'Feeling adventurous? Join us on a three day kayak trip',
        image: 'assets/Granada-5.jpg',
    },
    {
        id: 6,
        title: 'Barcelona',
        description: 'Includes flight to a tropical location and lodging for 3 days and 2 nights of beach kayaking.',
        image: 'assets/Barcelona-6.jpg',
    },
    {
        id: 7,
        title: 'Venice',
        description: 'Bring the whole family along for this easy and relaxing river kayak day trip. Includes trip for a family of 4.',
        image: 'assets/Venice-7.jpg',
    },
    {
        id: 8,
        title: 'Milan',
        description: 'Take on the highest level rapids on this extreme adventure. Test required to participate.',
        image: 'assets/Milan-8.jpg',
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
