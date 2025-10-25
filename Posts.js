const PostData = {
    IDontKnowWhatToCallThis: {
        text: `<p style="font-weight: 700; font-size: 25px; margin-top: 0px">BIO UPDATED 10/24/25</p>
               Hi hi!, I'm Alternate and welcome to my wip website, I like being a workaholic on scripting(Html, js, css, lua, frag), modeling, or drawing. 
               <br><br>
               <img src="Gifs/cirno-touhou.gif" style="max-width: 200px; float:left; margin:5px; border-radius: 10px;">
               I mainly sit around on my pc working on new things that I want to focus on. (I need to go outside more)
               <br><br>
               I may or may not push myself too hard doing stuff.
               <br><br>
               Anyways, thats all you need to know about me, if you want to see more of me, you can check out the links below.
               <br><br>
               See you soon!`,
        SectionID: "PostList",
        type: "RegularPost",
    },
    TestVideo: {
        text: `<p style="font-weight: 700; font-size: 25px; margin-top: 0px">10/25/25 1:38 PM (EST)</p>
                Test Video. (No Im not adding a description for this.)
                <video width="100%" height="400" controls><source src="Videos/MD_Fangame_Dev.mp4" type="video/mp4" /></video>`,
        SectionID: "PostList",
        type: "RegularPost",
    },
    MoreJavaLessHtml: {
        text: `<p style="font-weight: 700; font-size: 25px; margin-top: 0px">10/24/25 11:28 AM (EST)</p>
                I wanted to update the website again with more java script instead of html.
                And New Stuff like adding posts! (This was not easy to do, but it was worth it)
                <br>
                <img src="Gifs/luna-cat-crunchy-cat.gif" style="max-width: 200px; float:left; margin:5px">`,
        SectionID: "PostList",
        type: "RegularPost",
    },
    
    ArtHeader: {
        header: 'ARTISTIC ENDEAVOURS',
        SectionID: "PostList",
        type: "Header",
    },

    AlternateArt: {
        ImageUrl: "AlternateAlternate",
        Date: "7/28/25",
        SectionID: "PostList",
        type: "ImagePost",
    },
    GumballerArt: {
        ImageUrl: "GUMBALLER",
        Date: "5/4/25",
        SectionID: "PostList",
        type: "ImagePost",
    },
    LethalCompanyArt: {
        ImageUrl: "Lethal",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    AlternitiveArt: {
        ImageUrl: "Alternate2",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    AlternitiveArt1: {
        ImageUrl: "Alternate1",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    AlternateArt1: {
        ImageUrl: "Alternate",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    SmilerModel: {
        ImageUrl: "Smiler",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    SourlingArt: {
        ImageUrl: "Sourling",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    CookkidArt: {
        ImageUrl: "CoolKidArt-Alt",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    AAGroupArt: {
        ImageUrl: "Ascenders",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    PoisionArt: {
        ImageUrl: "Poision",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
    PSArtSubmission: {
        ImageUrl: "PeaceandTranquility",
        Date: "nil/nil/nil",
        SectionID: "PostList",
        type: "ImagePost",
    },
};

document.addEventListener("DOMContentLoaded", () => {
    for (const fl in PostData) {
        const Data = PostData[fl];
        const Section = document.getElementById(Data.SectionID);
        if (Section) {
            if (Data.type === "RegularPost") {
                const NewLinkCon = document.createElement("p");
                NewLinkCon.classList.add("PostContainer");
                NewLinkCon.innerHTML = Data.text;
                Section.appendChild(NewLinkCon);
            }
            if (Data.type === "ImagePost") {
                const NewPostCon = document.createElement("div");
                NewPostCon.classList.add("ImagePostContainer");
                Section.appendChild(NewPostCon);

                const NewLinkCon = document.createElement("img");
                Object.assign(NewLinkCon.style, {
                    backgroundImage: `url("Images/${Data.ImageUrl}.png")`,
                });
                
                NewLinkCon.classList.add("ImagePost");
                NewPostCon.appendChild(NewLinkCon);

                const NewTextCon = document.createElement("p");
                NewTextCon.textContent = Data.Date
                NewTextCon.classList.add("ImagePostDate");
                NewPostCon.appendChild(NewTextCon)
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
});
