const LinkData = {
    [1] : {
        header: 'BIO LINKS',
        SectionID: "LinkList",
        type: "Header",
    },

    [2] : {
        LinkName : "Discord Community",
        Link : "https://discord.gg/ETgX9Az48b",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        BadgeText: "[Derivation Infestation]",
        type: "Link",
    },
    [3] : {
        LinkName : "Twitter/X",
        Link : "https://x.com/Xnoir_Xnoir",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },
    [4] : {
        LinkName : "RBLX/Roblox",
        Link : "https://www.roblox.com/users/1384870146/profile",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },
    [5] : {
        LinkName : "Youtube",
        Link : "https://www.youtube.com/@Alternate_Individual",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },
    [6] : {
        header: 'GAME LINKS',
        SectionID: "LinkList",
        type: "Header",
    },
    [7] : {
        LinkName : "Derivation Infestation",
        Link : "https://www.roblox.com/games/114713146902784/Derivation-Infestation-Redevelopment",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    [8] : {
        LinkName : "Everything All At Once",
        Link : "https://www.roblox.com/games/122692017027748/Everything-All-At-Once",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    [9] : {
        LinkName : "Metro",
        Link : "https://www.roblox.com/games/18640529329/Metro",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },
    [10] : {
        LinkName : "Maze Purgatory",
        Link : "https://www.roblox.com/games/17553090685/Untitled-Game",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },
    [11] : {
        LinkName : "Test Town",
        Link : "https://www.roblox.com/games/14536336419/test-town",
        SectionID : "LinkList",
        CustomIcon : "icon1",
        type: "Link",
    },

    [12] : {
        header: 'CONTRIBUTIONS',
        SectionID: "LinkList",
        type: "Header",
    },

    [13] : {
        LinkName : "Minus Elevation",
        Link : "https://www.roblox.com/games/7836133734/Minus-Elevation",
        SectionID : "LinkList",
        CustomIcon : "Wander",
        type: "Link",
    },
    [14] : {
        LinkName : "Tethered Decent",
        Link : "https://www.roblox.com/games/15992788623/CLOSED-Tethered-Descent",
        SectionID : "LinkList",
        CustomIcon : "Null",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    [15] : {
        LinkName : "Addition Abstraction",
        Link : "https://www.roblox.com/games/13179256798/Addition-Abstraction",
        SectionID : "LinkList",
        CustomIcon : "AA",
        type: "Link",
    },
    [16] : {
        LinkName : "Splashdown",
        Link : "https://www.roblox.com/games/13620547054/Splashdown",
        SectionID : "LinkList",
        CustomIcon : "icon2",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    [17] : {
        LinkName : "Crimson Chronicles",
        Link : "https://www.roblox.com/games/86209472404402/CONSOLE-Crimson-Chronicles-ASYM",
        SectionID : "LinkList",
        CustomIcon : "icon2",
        BadgeText: "[PRE-ALPHA]",
        type: "Link",
    },
}

document.addEventListener("DOMContentLoaded", () => {
     for (const fl in LinkData) {
        const Data = LinkData[fl];
        const Section = document.getElementById(Data.SectionID);
        if (Section) {
            if (Data.type === "Link") {
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
            if (Data.type == "Header") {
                const NewTextCon = document.createElement("h2");
                NewTextCon.classList.add("PostHeader")
                NewTextCon.style.width = '100%'
                NewTextCon.textContent = Data.header
                Section.appendChild(NewTextCon);
            }
        }
     }
})