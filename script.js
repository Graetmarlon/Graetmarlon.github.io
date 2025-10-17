const ImgData = {
    Alternate : {
        Name : "Alternate",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "500px",
        height: "500px",
        SizeMultiplier: 1,
        id : 'ImageView',
    },
    Alternate1 : {
        Name : "Alternate1",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "70px",
        height: "70px",
        SizeMultiplier: 0.75,
        id : 'ImageView',
    },
    Alternate2 : {
        Name : "Alternate2",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "40px",
        height: "55px",
        SizeMultiplier: 1,
        id : 'ImageView',
    },
    AlternateAlternate : {
        Name : "AlternateAlternate",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "2000px",
        height: "2000px",
        SizeMultiplier: 0.35,
        id : 'ImageView',
    },
    Angle : {
        Name : "Angle",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1000px",
        height: "1000px",
        SizeMultiplier: 0.75,
        id : 'ImageView',
    },
    Ascenders : {
        Name : "Ascenders",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1200px",
        height: "500px",
        SizeMultiplier: 1,
        id : 'ImageView',
    },
    'CoolKidArt-Alt' : {
        Name : "CoolKidArt-Alt",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "2000px",
        height: "2829px",
        SizeMultiplier: 0.25,
        id : 'ImageView',
    },
    ElementAndGumballer : {
        Name : "ElementAndGumballer",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1000px",
        height: "1000px",
        SizeMultiplier: 0.75,
        id : 'ImageView',
    },
    Lethal : {
        Name : "Lethal",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "3000px",
        height: "4243px",
        SizeMultiplier: 0.2,
        id : 'ImageView',
    },
    NullifierArt : {
        Name : "NullifierArt",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "2000px",
        height: "2000px",
        SizeMultiplier: 0.35,
        id : 'ImageView',
    },
    Parasite : {
        Name : "Parasite",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "755px",
        height: "641px",
        SizeMultiplier: 1,
        id : 'ImageView',
    },
    PeaceandTranquility : {
        Name : "PeaceandTranquility",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1000px",
        height: "1000px",
        SizeMultiplier: 0.75,
        id : 'ImageView',
    },
    Poision : {
        Name : "Poision",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1515px",
        height: "2580px",
        SizeMultiplier: 0.3,
        id : 'ImageView',
    },
    Sourling : {
        Name : "Sourling",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "632px",
        height: "714px",
        SizeMultiplier: 1,
        id : 'ImageView',
    },
    //GAME IMAGES
    DILobbyScreenshot : {
        Name : "DILobbyScreenshot",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "2200px",
        height: "1237px",
        SizeMultiplier: 0.75,
        id : 'GameImageView',
    },
    DIMap : {
        Name : "DIMap",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1317px",
        height: "781px",
        SizeMultiplier: 1,
        id : 'GameImageView',
    },
    Items : {
        Name : "Items",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1274px",
        height: "626px",
        SizeMultiplier: 1,
        id : 'GameImageView',
    },
    MapScreenshot : {
        Name : "MapScreenshot",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1276px",
        height: "597px",
        SizeMultiplier: 1.2,
        id : 'GameImageView',
    },
    Radio : {
        Name : "Radio",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1273px",
        height: "674px",
        SizeMultiplier: 1,
        id : 'GameImageView',
    },
    Smiler : {
        Name : "Smiler",
        Description : "NO DESCRIPTION",
        Date: "5/5/5",

        width: "1378px",
        height: "704px",
        SizeMultiplier: 1,
        id : 'GameImageView',
    },
}

// for (const f of Images) {
document.addEventListener("DOMContentLoaded", () => {
    const imageView = document.getElementById("ImageView");
    const imageViewer = document.getElementById("ImageViewer")
    const loadImage = document.getElementById("LoadedImage")
    const loadedImageName = document.getElementById("LoadedImageName")
    const LoadedImageDesc = document.getElementById("LoadedImageDesc")
    const ImageViewerAnimatible = document.getElementById("ImageViewerAnimatible")

    function closeImageView() {
        if (parseFloat(getComputedStyle(imageViewer).opacity) >= 0.99) {
            fadeOut = imageViewer.animate([
                {opacity: 1, offset: 0 },
                {opacity: 0, offset: 0.2 },
                {opacity: 0, offset: 0.4 },
                {opacity: 0, offset: 0.6 },
                {opacity: 0, offset: 0.8 },
                {opacity: 0, offset: 1 }
                ], {
                duration: 250,
                easing: 'ease-in',
                fill: 'forwards'
            });

            slideOut = ImageViewerAnimatible.animate([
                { transform: 'translateX(0)', offset: 0 },
                { transform: 'translateX(-20px)', offset: 0.2 },
                { transform: 'translateX(-50px)', offset: 0.4 },
                { transform: 'translateX(-100px)', offset: 0.6 },
                { transform: 'translateX(-160px)', offset: 0.8 },
                { transform: 'translateX(-200px)', offset: 1 }
                ], {
                duration: 250,
                easing: 'ease-in',
                fill: 'forwards'
            });
                
                Promise.all([fadeOut.finished, slideOut.finished]).then(() => {
                    if (parseFloat(getComputedStyle(imageViewer).opacity) <= 0.01) {
                        imageViewer.style.zIndex = '-15';
                }
            });   
        }
    }

    imageViewer.style.zIndex = '-15'
    imageViewer.addEventListener('click',closeImageView);

    for (const fl in ImgData) {
            const data = ImgData[fl];
            const imageUrl = `url("Media/Images/${fl}.png")`;

            // Get the correct container based on data.id (like 'ImageView' or 'GameImageView')
            const container = document.getElementById(data.id);
            if (!container) {
                console.warn(`Container with id '${data.id}' not found for '${fl}'`);
                continue;
            }

            // Create and style the <li> element (flap)
            const flap = document.createElement("li");
            flap.dataset.file = fl;
            flap.classList.add("PostContainer");

            // Apply visual styling
            Object.assign(flap.style, {
                backgroundImage: `url("Media/Images/${fl}.png")`,
                cursor: "pointer",
            });

            // Append to the correct container
            container.appendChild(flap);

        flap.addEventListener('click', () => {
            if (parseFloat(getComputedStyle(imageViewer).opacity) <= 0.01) {
                imageViewer.animate([
                {opacity: 0, offset: 0 },
                {opacity: 1, offset: 0.2 },
                {opacity: 1, offset: 0.4 },
                {opacity: 1, offset: 0.6 },
                {opacity: 1, offset: 0.8 },
                {opacity: 1, offset: 1 }
                ], {
                    
                duration: 500,
                easing: 'ease-out',
                fill: 'forwards'
                });

                ImageViewerAnimatible.animate([
                { transform: 'translateX(200px)', opacity: 0, offset: 0 },
                { transform: 'translateX(160px)', opacity: 1, offset: 0.2 },
                { transform: 'translateX(100px)', opacity: 1, offset: 0.4 },
                { transform: 'translateX(50px)', opacity: 1, offset: 0.6 },
                { transform: 'translateX(20px)', opacity: 1, offset: 0.8 },
                { transform: 'translateX(0)', opacity: 1, offset: 1 },
                ], {
                    
                duration: 400,
                easing: 'cubic-bezier(0, .5, 0, 1)',
                fill: 'forwards'
                });

                loadImage.style.backgroundImage = imageUrl;
                const widthVal = parseInt(data.width) * data.SizeMultiplier
                const heightVal = parseInt(data.height) * data.SizeMultiplier

                loadImage.style.width = `${widthVal}px`;
                loadImage.style.height = `${heightVal}px`;
                loadedImageName.textContent = data.Name;
                LoadedImageDesc.textContent = data.Description;
                imageViewer.style.zIndex = '10'; //ZIndex -10 is the BG
            }
        });
    }
})