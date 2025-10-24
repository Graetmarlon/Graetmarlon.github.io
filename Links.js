const LinkData = {
    [1] : {
        LinkName : "Discord Community",
        Link : "https://discord.gg/ETgX9Az48b",
        SectionID : "BioList",
        // CustomIcon : "Wander",
        BadgeText: "[Derivation Infestation]",
    },
    [2] : {
        LinkName : "Twitter/X",
        Link : "https://x.com/Xnoir_Xnoir",
        SectionID : "BioList",
        // CustomIcon : "Wander",
    },
    [3] : {
        LinkName : "RBLX/Roblox",
        Link : "https://www.roblox.com/users/1384870146/profile",
        SectionID : "BioList",
        // CustomIcon : "Wander",
    },
    [4] : {
        LinkName : "Youtube",
        Link : "https://www.youtube.com/@Alternate_Individual",
        SectionID : "BioList",
        // CustomIcon : "Wander",
    },
    [5] : {
        LinkName : "Derivation Infestation",
        Link : "https://www.roblox.com/games/114713146902784/Derivation-Infestation-Redevelopment",
        SectionID : "GamesList",
        // CustomIcon : "Wander",
        BadgeText: "[CLOSED]",
    },
    [6] : {
        LinkName : "Everything All At Once",
        Link : "https://www.roblox.com/games/122692017027748/Everything-All-At-Once",
        SectionID : "GamesList",
        // CustomIcon : "Wander",
        BadgeText: "[CLOSED]",
    },
    [7] : {
        LinkName : "Metro",
        Link : "https://www.roblox.com/games/18640529329/Metro",
        SectionID : "GamesList",
        // CustomIcon : "Wander",
    },
    [7] : {
        LinkName : "Maze Purgatory",
        Link : "https://www.roblox.com/games/17553090685/Untitled-Game",
        SectionID : "GamesList",
        // CustomIcon : "Wander",
    },
    [8] : {
        LinkName : "Test Town",
        Link : "https://www.roblox.com/games/14536336419/test-town",
        SectionID : "GamesList",
        // CustomIcon : "Wander",
    },
    [9] : {
        LinkName : "Minus Elevation",
        Link : "https://www.roblox.com/games/7836133734/Minus-Elevation",
        SectionID : "ContributionsList",
        CustomIcon : "Wander",
    },
    [10] : {
        LinkName : "Tethered Decent",
        Link : "https://www.roblox.com/games/15992788623/CLOSED-Tethered-Descent",
        SectionID : "ContributionsList",
        CustomIcon : "Null",
        BadgeText: "[CLOSED]",
    },
    [11] : {
        LinkName : "Addition Abstraction",
        Link : "https://www.roblox.com/games/13179256798/Addition-Abstraction",
        SectionID : "ContributionsList",
        CustomIcon : "AA",
    },
    [12] : {
        LinkName : "Splashdown",
        Link : "https://www.roblox.com/games/13620547054/Splashdown",
        SectionID : "ContributionsList",
        // CustomIcon : "Wander",
        BadgeText: "[CLOSED]",
    },
    [13] : {
        LinkName : "Crimson Chronicles",
        Link : "https://www.roblox.com/games/86209472404402/CONSOLE-Crimson-Chronicles-ASYM",
        SectionID : "ContributionsList",
        // CustomIcon : "Wander",
        BadgeText: "[PRE-ALPHA]",
    },
}

const ColorData = {
    [1]: '#F95D7F',
    [2]: '#F9F45D',
    [3]: '#79F95D',
    [4]: '#44EBFD',
    [5]: '#3560AC',
    [6]: '#D9DFED',
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () => {
     for (const fl in LinkData) {
        const Data = LinkData[fl];
        if (document.getElementById(Data.SectionID)) {
            const Section = document.getElementById(Data.SectionID);
            const NewLinkCon = document.createElement("a");

            NewLinkCon.classList.add("LinkContainer")
            NewLinkCon.href = Data.Link
            Section.appendChild(NewLinkCon);
            
            if (Data.CustomIcon) {
                const NewIcon = document.createElement("Img")
                NewIcon.classList.add("LinkIcon")
                NewIcon.src = `Icons/${Data.CustomIcon}.png`
                NewLinkCon.appendChild(NewIcon)
            }

            const NewSpan = document.createElement("span");
            NewLinkCon.appendChild(NewSpan)

            NewSpan.textContent = Data.LinkName

            if (Data.BadgeText) {
                const NewBadge = document.createElement("span")
                NewBadge.classList.add("Badge")
                NewBadge.textContent = Data.BadgeText

                NewLinkCon.appendChild(NewBadge)
            }
        }
     }
})