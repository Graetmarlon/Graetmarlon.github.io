const GameData = {
    [1] : {
        GameName : "Tethered Decent",
        Link : "https://discord.gg/ETgX9Az48b",
        BGName : "TD",
        SectionID : "DelverList",
    },
    [2] : {
        GameName : "Tethered Decent",
        Link : "https://discord.gg/ETgX9Az48b",
        BGName : "TD",
        SectionID : "DelverList",
    },
    [3] : {
        GameName : "Tethered Decent",
        Link : "https://discord.gg/ETgX9Az48b",
        BGName : "TD",
        SectionID : "DelverList",
    },
}

document.addEventListener("DOMContentLoaded", () => {
    for (const fl in GameData) {
        const Data = GameData[fl];
        if (document.getElementById(Data.SectionID)) {
            const Section = document.getElementById(Data.SectionID);
            const NewCon = document.createElement("a");
            
            NewCon.href = Data.Link
            NewCon.classList.add("GameContainer")
            Section.appendChild(NewCon);

            const NewGameNameText = document.createElement("h2");
            NewGameNameText.style.margin = 0;
            NewGameNameText.style.textShadow = 'rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) 0px 2px 0px, rgb(0, 0, 0) 0px 3px 0px, rgb(0, 0, 0) 0px 4px 0px'
            NewGameNameText.textContent = Data.GameName
            NewGameNameText.classList.add("GameName")
            NewCon.appendChild(NewGameNameText)

            if (Data.BGName) {
                const NewBG = document.createElement("img");
                NewBG.classList.add("GameBG");
                // NewBG.style.backgroundImage = `url(GameIcons/${Data.BGName}.webp)`;
                NewCon.appendChild(NewBG);
            }
        }
    }
})