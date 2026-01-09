const LinkData = {
    GameHeader: {
        header: 'GAME LINKS',
        SectionID: "LinkList",
        type: "Header",
    },

    DerivationInfestation: {
        LinkName : "Derivation Infestation",
        Link : "https://www.roblox.com/games/114713146902784/Derivation-Infestation-Redevelopment",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    EEAO: {
        LinkName : "Everything All At Once",
        Link : "https://www.roblox.com/games/122692017027748/Everything-All-At-Once",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    Metro: {
        LinkName : "Metro",
        Link : "https://www.roblox.com/games/18640529329/Metro",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        type: "Link",
    },
    MazePurgatory: {
        LinkName : "Maze Purgatory",
        Link : "https://www.roblox.com/games/17553090685/Untitled-Game",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        type: "Link",
    },
    TestTown: {
        LinkName : "Test Town",
        Link : "https://www.roblox.com/games/14536336419/test-town",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        type: "Link",
    },

    ContributionsHeader: {
        header: 'CONTRIBUTIONS',
        SectionID: "LinkList",
        type: "Header",
    },

    MinusElevation: {
        LinkName : "Minus Elevation",
        Link : "https://www.roblox.com/games/7836133734/Minus-Elevation",
        SectionID : "LinkList",
        CustomIcon : "Wander",
        type: "Link",
    },
    TetherdDecent: {
        LinkName : "Tethered Decent",
        Link : "https://www.roblox.com/games/15992788623/CLOSED-Tethered-Descent",
        SectionID : "LinkList",
        CustomIcon : "Null",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    AdditionAbstraction: {
        LinkName : "Addition Abstraction",
        Link : "https://www.roblox.com/games/13179256798/Addition-Abstraction",
        SectionID : "LinkList",
        CustomIcon : "AA",
        type: "Link",
    },
    Spashdown: {
        LinkName : "Splashdown",
        Link : "https://www.roblox.com/games/13620547054/Splashdown",
        SectionID : "LinkList",
        CustomIcon : "icon4",
        BadgeText: "[CLOSED]",
        type: "Link",
    },
    CrimsonChromicles: {
        LinkName : "Crimson Chronicles",
        Link : "https://www.roblox.com/games/86209472404402/CONSOLE-Crimson-Chronicles-ASYM",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        BadgeText: "[PRE-ALPHA]",
        type: "Link",
    },
    MinuzDowning: {
        LinkName : "Minuz Downing",
        Link : "https://www.roblox.com/games/87790004251798/Minuz-Downing",
        SectionID : "LinkList",
        CustomIcon : "icon3",
        BadgeText: "[INDEV]",
        type: "Link",
    },
    BoundlessPoolzone: {
        LinkName : "Boundless Poolzone",
        Link : "https://www.roblox.com/games/88548111068885/Boundless-Poolzone",
        SectionID : "LinkList",
        CustomIcon : "icon4",
        BadgeText: "[CLOSED]",
        type: "Link",
    },

    // BioHeader: {
    //     header: 'BIO LINKS',
    //     SectionID: "LinkList",
    //     type: "Header",
    // },

    // Discord: {
    //     Link : "https://discord.gg/ETgX9Az48b",
    //     SectionID: "ButtonContainer",
    //     // CustomIcon : "icon1",
    //     BrandIcon: "fa-brands fa-discord",
    //     type: "Button",
    // },
    Twitter: {
        Link : "https://x.com/Xnoir_Xnoir",
        SectionID: "ButtonContainer",
        // CustomIcon : "icon1",
        BrandIcon: "fa-brands fa-x-twitter",
        type: "Button",
    },
    Youtube: {
        Link : "https://www.youtube.com/@Alternate_Individual",
        SectionID: "ButtonContainer",
        // CustomIcon : "icon1",
        BrandIcon: "fa-brands fa-youtube",
        type: "Button",
    },
    // Roblox: {
    //     Link : "https://www.roblox.com/users/1384870146/profile",
    //     SectionID: "ButtonContainer",
    //     CustomIcon: "icon4",
    //     // BrandIcon: "fa-brands fa-roblox",
    //     type: "Button",
    // },

    // Discord: {
    //     LinkName : "Discord Community",
    //     Link : "https://discord.gg/ETgX9Az48b",
    //     SectionID : "LinkList",
    //     // CustomIcon : "icon1",
    //     BrandIcon: "fa-brands fa-discord",
    //     BadgeText: "[Derivation Infestation]",
    //     type: "Link",
    // },
    // Twitter: {
    //     LinkName : "Twitter/X",
    //     Link : "https://x.com/Xnoir_Xnoir",
    //     SectionID : "LinkList",
    //     // CustomIcon : "icon1",
    //     BrandIcon: "fa-brands fa-x-twitter",
    //     type: "Link",
    // },
    // Roblox: {
    //     LinkName : "RBLX/Roblox",
    //     Link : "https://www.roblox.com/users/1384870146/profile",
    //     SectionID : "LinkList",
    //     CustomIcon : "icon1",
    //     // BrandIcon: "fa-brands fa-roblox",
    //     type: "Link",
    // },
    // Youtube: {
    //     LinkName : "Youtube",
    //     Link : "https://www.youtube.com/@Alternate_Individual",
    //     SectionID : "LinkList",
    //     // CustomIcon : "icon1",
    //     BrandIcon: "fa-brands fa-youtube",
    //     type: "Link",
    // },
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
                if (Data.BrandIcon) {
                    const NewBrandIcon = document.createElement("i")
                    NewBrandIcon.classList.add(...Data.BrandIcon.split(" "));
                    NewLinkCon.appendChild(NewBrandIcon)
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
                const HeaderContainer = document.createElement("div");
                HeaderContainer.classList.add("HeaderContainer")
                Section.appendChild(HeaderContainer);

                const NewTextCon = document.createElement("h2");
                NewTextCon.classList.add("HeaderText")
                NewTextCon.textContent = Data.header
                HeaderContainer.appendChild(NewTextCon);

                const HeaderDivider = document.createElement("div")
                HeaderDivider.classList.add("HeaderDivider")
                HeaderContainer.appendChild(HeaderDivider);
            }
            if (Data.type == "Button") {
                const NewButton = document.createElement("a");
                NewButton.classList.add("LinkButton")
                NewButton.href = Data.Link
                Section.appendChild(NewButton);

                if (Data.BrandIcon) {
                    const NewBrandIcon = document.createElement("i")
                    NewBrandIcon.classList.add(...Data.BrandIcon.split(" "));
                    NewButton.appendChild(NewBrandIcon)
                }
                if (Data.CustomIcon) {
                    const NewIcon = document.createElement("Img")
                    NewIcon.src = `Icons/${Data.CustomIcon}.png`
                    NewButton.appendChild(NewIcon)
                }
            }
        }
     }
})