window.onload = () => {
    document.body.innerHTML =
        data["apps"][0]["books"].map(book => `
            <details>
                <summary style="background-color: ${book["colour"]["css"]}">${book["title"]}</summary>
                ${
                    book["sections"].map(section => `
                        <details>
                            <summary style="background-color: ${book["colour"]["css"]}">${section["title"]}</summary>
                            ${
                                section["chapters"].map(chapter => `
                                    <div>
                                        <p>${chapter["title"]}</p>
                                        <audio controls>
                                            <source src="${chapter["audioFile"]}" type="audio/mpeg">
                                        </audio>
                                    </div>
                                `).join("")
                            }
                        </details>
                    `).join("")
                }
            </details>
        `).join("");
};

let data = {
    "apps": [
        {
            "id": "ckwamxragbx2l0c56ijrvc1vn",
            "title": "Hugo",
            "settings": {
                "chapterLabel": "Day",
                "sectionLabel": "Week",
                "audioFilePath": "awsPath"
            },
            "books": [
                {
                    "id": "ckwamyakwbxug0b08wduqldgm",
                    "title": "French In 3 Months",
                    "colour": {
                        "hex": "#99cae6",
                        "css": "rgb(153,202,230)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/qtGKTw87Ty6zO3ikbBLF",
                        "fileName": "French_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckwewob48vrzw0e638j292kah",
                            "title": "Pronunciation",
                            "colour": null,
                            "index": 0,
                            "chapters": [
                                {
                                    "id": "ckwca3rugxi1g0c04dbwa16z9",
                                    "title": "Vowels",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.1.F.mp3"
                                },
                                {
                                    "id": "ckwca3cewx0gn0b082f2x7rnq",
                                    "title": "Consonants",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.2.F.mp3"
                                },
                                {
                                    "id": "ckwca3rugxbg30e6343rmzkg1",
                                    "title": "Nasal sounds",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.3.F.mp3"
                                },
                                {
                                    "id": "ckwca3rugxbg90e63x9gxt9sg",
                                    "title": "Variations",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.4.F.mp3"
                                },
                                {
                                    "id": "ckwca3sm8xpil0c56swmvdyij",
                                    "title": "Liaison",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.5.F.mp3"
                                },
                                {
                                    "id": "ckwca3sm8xi6p0a01yorslsgn",
                                    "title": "The French Alphabet",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.6.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9elzcwdka0e6353wo5bbi",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwca3sm8xpld0c56nf9mn9ph",
                                    "title": "1.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.1.F.mp3"
                                },
                                {
                                    "id": "ckwca3te0xi270c04szm53ds4",
                                    "title": "1.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.2.F.mp3"
                                },
                                {
                                    "id": "ckwca3te0xi2z0c04xw1swx0j",
                                    "title": "1.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.3.F.mp3"
                                },
                                {
                                    "id": "ckwca3te0x17g0b082x9p5rz6",
                                    "title": "1.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.4.F.mp3"
                                },
                                {
                                    "id": "ckwca3te0xi830a01kogif2r8",
                                    "title": "1.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.5.F.mp3"
                                },
                                {
                                    "id": "ckwca3u5sxi890a01p3svoask",
                                    "title": "1.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.6.F.mp3"
                                },
                                {
                                    "id": "ckwca3u5sxply0c56kgjkrbdu",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca3u5sxpm40c56oi51gnju",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E2.F.mp3"
                                },
                                {
                                    "id": "ckwca3u5sx1830b08wvd9eyic",
                                    "title": "1.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.7.F.mp3"
                                },
                                {
                                    "id": "ckwca3uxkxi6w0c04owfr859y",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca3uxkx8y00c54d489qg7v",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca3uxkx8y60c54paf8agz0",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9ghvswfse0e634o9c5tv2",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwca3vpcxbmg0e63qqhg5dww",
                                    "title": "2.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.1.F.mp3"
                                },
                                {
                                    "id": "ckwca3vpcxpr90c56n3ga35y6",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca3vpcx1a00b08r69yyybw",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.F.mp3"
                                },
                                {
                                    "id": "ckwca3wh4x1a70b083mreg042",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca3wh4x8z00c5416tf20mk",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E2.F.mp3"
                                },
                                {
                                    "id": "ckwca3wh4x8z60c54ihceigkm",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.F.mp3"
                                },
                                {
                                    "id": "ckwca3wh4xbs50e63hftb10az",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca3x8wx8zc0c54cr1977q2",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca3x8wxia10c04f53cy4dn",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.F.mp3"
                                },
                                {
                                    "id": "ckwca3x8wxps50c5612ie271n",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca3x8wxpsb0c56vlhpy3dv",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.F.mp3"
                                },
                                {
                                    "id": "ckwca3y0oxia70c040qx8fhcg",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca3y0oxiad0c04m47yy26h",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9ghvsw4oy0b08f1xfp8n3",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwca3y0oxido0a01910wr4fz",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.F.mp3"
                                },
                                {
                                    "id": "ckwca3y0ox8zi0c54r0jwbvfa",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca3y0oxiao0c04eju84fxb",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.F.mp3"
                                },
                                {
                                    "id": "ckwca3ysgxbts0e63nhwnnnbx",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca3ysgxiey0a01o7yewenu",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.F.mp3"
                                },
                                {
                                    "id": "ckwca3ysgxptl0c56sbqhnlv5",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca3ysgx8zx0c54stdylkyn",
                                    "title": "3.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.4.F.mp3"
                                },
                                {
                                    "id": "ckwca3zk8x1np0b088tt1yo4f",
                                    "title": "Vocbulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca3zk8xiay0c0491amd5o2",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E4.F.mp3"
                                },
                                {
                                    "id": "ckwca3zk8xifa0a018m2sb0jw",
                                    "title": "3.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.5.F.mp3"
                                },
                                {
                                    "id": "ckwca3zk8x9030c54uxzyfhgw",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca3zk8xbus0e63w05a9rze",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E5.F.mp3"
                                },
                                {
                                    "id": "ckwca40c0xpub0c56plv4u2j8",
                                    "title": "3.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.6.F.mp3"
                                },
                                {
                                    "id": "ckwca40c0xigw0a01riyfwktn",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca40c0xbv10e63b0pkuo5u",
                                    "title": "Vocabulary 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V6.F.mp3"
                                },
                                {
                                    "id": "ckwca40c0xib90c04rz86k6v8",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9ginkw4p40b0805bvra4n",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwca413sxih20a010326aue5",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.F.mp3"
                                },
                                {
                                    "id": "ckwca413sxbve0e63g2c4vk8b",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca413sx9400c54ugiwlkxx",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.F.mp3"
                                },
                                {
                                    "id": "ckwca413sxpuy0c568d7g0l80",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.F.mp3"
                                },
                                {
                                    "id": "ckwca41vkxpv50c56al2rjyje",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.F.mp3"
                                },
                                {
                                    "id": "ckwca41vkxiby0c04srtpvo6n",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca41vkxih90a01k2w0k2tr",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.F.mp3"
                                },
                                {
                                    "id": "ckwca41vkxpvb0c564yplso6i",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca41vkxic60c041wb4sx6p",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E4.F.mp3"
                                },
                                {
                                    "id": "ckwca42ncxicc0c049g0s34b3",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.F.mp3"
                                },
                                {
                                    "id": "ckwca42ncx1yk0b08qz6rg5ay",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca42ncxick0c04us9pi8p3",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E5.F.mp3"
                                },
                                {
                                    "id": "ckwca42ncxii30a0100srqvim",
                                    "title": "4.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.6.F.mp3"
                                },
                                {
                                    "id": "ckwca43f4xbx10e6397sx34pg",
                                    "title": "4.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.7.F.mp3"
                                },
                                {
                                    "id": "ckwca43f4xbxb0e63d6djy03e",
                                    "title": "4.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.8.F.mp3"
                                },
                                {
                                    "id": "ckwca43f4x9520c54ul5pf980",
                                    "title": "4.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.9.F.mp3"
                                },
                                {
                                    "id": "ckwca446wx1z50b083w7d2274",
                                    "title": "4.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.10.F.mp3"
                                },
                                {
                                    "id": "ckwca446wxbxh0e63bsb4amwj",
                                    "title": "4.11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.11.F.mp3"
                                },
                                {
                                    "id": "ckwca446wxpz90c56k5xfct4u",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca446wx1zi0b08a78gqeix",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9ginkwkw50c04eyf6jqph",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwca44yox95l0c54uoq6hm7g",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.F.mp3"
                                },
                                {
                                    "id": "ckwca44yoxpzi0c56ehrf1jys",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca44yox1zo0b08hzdquedh",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.F.mp3"
                                },
                                {
                                    "id": "ckwca44yoxpzo0c56hcjvsvlt",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E2.F.mp3"
                                },
                                {
                                    "id": "ckwca45qgxc090e63jswx733z",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.F.mp3"
                                },
                                {
                                    "id": "ckwca45qgxik00a01u9sta6xc",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca45qgx96q0c544q3szzbh",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca45qgxc160e63r8cg1afd",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.F.mp3"
                                },
                                {
                                    "id": "ckwca45qgx20e0b083y1nay0n",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca46i8xigr0c04mz65dqlk",
                                    "title": "5.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.5.F.mp3"
                                },
                                {
                                    "id": "ckwca46i8xila0a012zl8eicv",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca46i8x9bu0c545b00eqg8",
                                    "title": "5.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.6.F.mp3"
                                },
                                {
                                    "id": "ckwca46i8x9c00c54argf2kvy",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca47a0xc4j0e63gftqz31p",
                                    "title": "Exercise 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E6.F.mp3"
                                },
                                {
                                    "id": "ckwca47a0xc4p0e63qff66ge6",
                                    "title": "5.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.7.F.mp3"
                                },
                                {
                                    "id": "ckwca47a0xq290c56pzwybox9",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E7.F.mp3"
                                },
                                {
                                    "id": "ckwca47a0xc4v0e637bjz5hbv",
                                    "title": "Vocabulary 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V6.F.mp3"
                                },
                                {
                                    "id": "ckwca47a0xq2p0c56u1o52q1q",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9ginkwkwb0c04i8w4pq2u",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwca481sx21x0b08u7jq6701",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.F.mp3"
                                },
                                {
                                    "id": "ckwca481sx2230b08u6n4p0q9",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.F.mp3"
                                },
                                {
                                    "id": "ckwca481sxiig0c04dettdan4",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca481sximz0a01z82ipty9",
                                    "title": "6.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.3.F.mp3"
                                },
                                {
                                    "id": "ckwca48tkxin60a01puw0h2eh",
                                    "title": "6.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.4.F.mp3"
                                },
                                {
                                    "id": "ckwca48tkx9ez0c547ny6m52e",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca48tkxc8o0e63sx5tqyhm",
                                    "title": "6.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.5.F.mp3"
                                },
                                {
                                    "id": "ckwca48tkx9fc0c54bxtuou5v",
                                    "title": "6.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.6.F.mp3"
                                },
                                {
                                    "id": "ckwca49lcx24j0b08s4ogm9lt",
                                    "title": "6.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.7.F.mp3"
                                },
                                {
                                    "id": "ckwca49lcxq4v0c5639fh6m7a",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca49lcx24q0b085ks9fbn8",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca49lcxq550c56z92cx256",
                                    "title": "6.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.8.F.mp3"
                                },
                                {
                                    "id": "ckwca4ad4x2530b08zhcpmodf",
                                    "title": "6.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.9.F.mp3"
                                },
                                {
                                    "id": "ckwca4ad4x2590b083mftwju7",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4ad4xinv0c041uyqckgy",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E5.F.mp3"
                                },
                                {
                                    "id": "ckwca4ad4x25m0b08bmewo2ui",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca4ad4x9gq0c546juif3qg",
                                    "title": "6.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.10.F.mp3"
                                },
                                {
                                    "id": "ckwca4b4wx9gw0c54pm4yoqzl",
                                    "title": "Vocabulary 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V6.F.mp3"
                                },
                                {
                                    "id": "ckwca4b4wxq720c56mlxo1oxh",
                                    "title": "6.11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.11.F.mp3"
                                },
                                {
                                    "id": "ckwca4b4wx25t0b08151gsqhw",
                                    "title": "Vocabulary 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V7.F.mp3"
                                },
                                {
                                    "id": "ckwca4bwoxixd0a01nhjko3kr",
                                    "title": "Vocabulary 8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V8.F.mp3"
                                },
                                {
                                    "id": "ckwca4bwoxios0c0497qmgmpt",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gjfcwlrq0a01ctu9vvsl",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwca4bwoxq850c5606gxxlra",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4cogxipg0c04w9lygqce",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4cogxck50e63sxonskrq",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E1.F.mp3"
                                },
                                {
                                    "id": "ckwca4cogxckd0e63n4ntzwjd",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4cogx26u0b08zwhnvz5i",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4dg8xiqn0c04r2ylceyk",
                                    "title": "7.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4dg8xis50c04nkqkt80u",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4dg8x9jg0c54tp3smv34",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4e80xq9n0c56ea194r54",
                                    "title": "7.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4e80xiu60c04t0bu0vop",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4e80xiud0c04sgsda61s",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gjfcwuqr0c568g3uhr7c",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwca4e80xj0g0a018rksrksb",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4ezsx9k80c5438tqv2zg",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4ezsx9ke0c544dthbgrj",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4ezsxcmy0e63gojpt51x",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4ezsxqa60c56pes0kaeg",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4ezsx2880b08ffmxuyi5",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4frkxium0c04wiu649r1",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca4frkxj0q0a01r9k3u2o1",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4frkxius0c040aw2juv6",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4frkx9m30c54wevszh7p",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4gjcxco60e63d5zukuy4",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca4gjcxqaf0c56jnfbtnfm",
                                    "title": "Vocabulary 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V6.F.mp3"
                                },
                                {
                                    "id": "ckwca4gjcx2970b08e0noe4mw",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gjfcwlrx0a01eqt4l5co",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwca4hb4x29d0b08qusr5w3g",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4hb4x29n0b08h43do6gd",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4hb4xiw90c043lk0z37y",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4i2wxj3b0a01q1nh2d8q",
                                    "title": "9.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4i2wx9ps0c54dblp81es",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4iuoxj6c0a014f4ijfv9",
                                    "title": "9.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4iuox2ai0b08phym34ml",
                                    "title": "9.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4iuox2ao0b08btpoy20t",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4iuoxcph0e63prubn6zb",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca4iuoxcpp0e63lq8t4kyp",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4jmgx2au0b083jl1aijz",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gjfcwuqz0c56d83zzh9e",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwca4jmgxj0c0c04of5i2png",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4jmgxj6p0a01gab7s1yc",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4ke8xj6v0a01oevhlue5",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4ke8xj0i0c048nlvpfwg",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4ke8xj0o0c04i949a5q4",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4ke8xj9l0a01nyjm0hkt",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4l60x9wq0c54d4y5t8fj",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E3.F.mp3"
                                },
                                {
                                    "id": "ckwca4l60x2dy0b08zp7xw69n",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4l60x9yi0c54ckjdsxpx",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4l60xqp30c563rm85zof",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E4.F.mp3"
                                },
                                {
                                    "id": "ckwca4l60x2ed0b08fherd08l",
                                    "title": "10.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4lxsxqp90c56n8uhxemw",
                                    "title": "10.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.6.F.mp3"
                                },
                                {
                                    "id": "ckwca4lxsx9yp0c54lbnba24e",
                                    "title": "10.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.7.F.mp3"
                                },
                                {
                                    "id": "ckwca4lxsx2el0b081me9y2i2",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca4lxsxja90a01jefdhtps",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gk74w4r70b08vvjegjkj",
                            "title": "Week 11",
                            "colour": null,
                            "index": 11,
                            "chapters": [
                                {
                                    "id": "ckwca4mpkxj5u0c04yrffcso6",
                                    "title": "11.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4nhcx9zh0c54texk4q2o",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4nhcxqq90c568wz8gy2x",
                                    "title": "11.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4nhcx2fd0b08w5mh4rk6",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4nhcxj6u0c04fabtubyz",
                                    "title": "11.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4o94xqrb0c56133w4gns",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4o94xa0i0c54hqzz18kk",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E4.F.mp3"
                                },
                                {
                                    "id": "ckwca4o94xjf70a01hh7ko88x",
                                    "title": "11.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4o94xcrn0e633hkfdbv1",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V4.F.mp3"
                                },
                                {
                                    "id": "ckwca4p0wxj7i0c04el2ic23x",
                                    "title": "11.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4p0wxj7p0c04vhgn8xfx",
                                    "title": "11.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.6.F.mp3"
                                },
                                {
                                    "id": "ckwca4p0wxj7v0c041h5t725q",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V5.F.mp3"
                                },
                                {
                                    "id": "ckwca4p0wxcrv0e63zrynz2eb",
                                    "title": "11.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.7.F.mp3"
                                },
                                {
                                    "id": "ckwca4psoxa1b0c54bbj3t1wn",
                                    "title": "11.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.8.F.mp3"
                                },
                                {
                                    "id": "ckwca4psoxcs10e63kklp3wc3",
                                    "title": "11.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.9.F.mp3"
                                },
                                {
                                    "id": "ckwca4psox2gr0b08afeje45o",
                                    "title": "Vocabulary 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V6.F.mp3"
                                },
                                {
                                    "id": "ckwca4psoxa3t0c548fmwejh9",
                                    "title": "Exercise 8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E8.F.mp3"
                                },
                                {
                                    "id": "ckwca4qkgx2gx0b08b88c6cv5",
                                    "title": "Vocabulary 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V7.F.mp3"
                                },
                                {
                                    "id": "ckwca4qkgxj830c04ikfpff1s",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.C.F.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gk74wurd0c56hm0lkzba",
                            "title": "Week 12",
                            "colour": null,
                            "index": 12,
                            "chapters": [
                                {
                                    "id": "ckwca4qkgxjgi0a010cx9my7f",
                                    "title": "12.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.1.F.mp3"
                                },
                                {
                                    "id": "ckwca4qkgxcsf0e638td6ppw6",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V1.F.mp3"
                                },
                                {
                                    "id": "ckwca4rc8xcsv0e634eartbbp",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.E1.F.mp3"
                                },
                                {
                                    "id": "ckwca4rc8xct70e632my3gtrn",
                                    "title": "12.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.2.F.mp3"
                                },
                                {
                                    "id": "ckwca4rc8xqt10c56cddn6kcm",
                                    "title": "12.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.3.F.mp3"
                                },
                                {
                                    "id": "ckwca4rc8xjgv0a01c0ucouvk",
                                    "title": "12.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.4.F.mp3"
                                },
                                {
                                    "id": "ckwca4rc8xa680c54hlw3tbwa",
                                    "title": "12.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.5.F.mp3"
                                },
                                {
                                    "id": "ckwca4s40xj9j0c04v7s1oxxj",
                                    "title": "12.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.6.F.mp3"
                                },
                                {
                                    "id": "ckwca4s40xa6e0c54ylb6ffzq",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V2.F.mp3"
                                },
                                {
                                    "id": "ckwca4s40xctu0e63rsc0ffph",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V3.F.mp3"
                                },
                                {
                                    "id": "ckwca4s40xqtq0c56myqtv9iu",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.C.F.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-french",
                    "baseColour": {
                        "css": "rgb(52,149,205)",
                        "hex": "#3495cd"
                    }
                },
                {
                    "id": "ckwbw1atkdlok0a015gueort0",
                    "title": "Dutch In 3 Months",
                    "colour": {
                        "hex": "#99d7ef",
                        "css": "rgb(153,215,239)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/H01WqGqZSza2jGqZW84L",
                        "fileName": "Dutch_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckwc9grwwwv3o0c562lylc9rr",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwca8eigxfht0c54r37q5fqm",
                                    "title": "1.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.2.D.mp3"
                                },
                                {
                                    "id": "ckwca8eigx7tu0b082jpqs3je",
                                    "title": "1.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.3.D.mp3"
                                },
                                {
                                    "id": "ckwca8eigxx4p0c56m9znadfd",
                                    "title": "1.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.4.D.mp3"
                                },
                                {
                                    "id": "ckwca8eigxfle0c543dat4xy7",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca8fa8xx530c56gvsm8uv2",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.D1.D.mp3"
                                },
                                {
                                    "id": "ckwca8fa8xx590c56oeb4owdf",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca8fa8x7w20b08k9lwfegl",
                                    "title": "1.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.6.D.mp3"
                                },
                                {
                                    "id": "ckwca8fa8xq4j0c04hwbsv8d0",
                                    "title": "1.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.7.D.mp3"
                                },
                                {
                                    "id": "ckwca8g20xq630c04iptombic",
                                    "title": "1.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.8.D.mp3"
                                },
                                {
                                    "id": "ckwca8g20xx5n0c569wgl6y2z",
                                    "title": "1.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.9.D.mp3"
                                },
                                {
                                    "id": "ckwca8g20xq9e0a01qcrytw2o",
                                    "title": "1.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.10.D.mp3"
                                },
                                {
                                    "id": "ckwca8g20xfnc0c54uyft7v3s",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca8g20xx6z0c56qpwgcpqi",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E3.D.mp3"
                                },
                                {
                                    "id": "ckwca8gtsx81z0b08go32hdcx",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E4.D.mp3"
                                },
                                {
                                    "id": "ckwca8gtsx8250b08erb2v10n",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca8gtsxidf0e631ehhvuee",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9grwwwv4j0c56cfrdru3i",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwca8gtsx82o0b08r59sbo1r",
                                    "title": "2.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.1.D.mp3"
                                },
                                {
                                    "id": "ckwca8hlkxq7a0c04qkoxkq3k",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.D.mp3"
                                },
                                {
                                    "id": "ckwca8hlkxfoz0c547d5k4qwy",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.D.mp3"
                                },
                                {
                                    "id": "ckwca8hlkxfp50c5433taeqjx",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca8hlkxxb10c56z8ye6vgt",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.D.mp3"
                                },
                                {
                                    "id": "ckwca8idcx83c0b08fx7rvlma",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca8idcx83i0b084ha7k1x8",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca8j54xqlk0a014ssqw6z5",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.D1.D.mp3"
                                },
                                {
                                    "id": "ckwca8j54xxc30c56bbx1miwj",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca8jwwxfqj0c548a45enqq",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.D.mp3"
                                },
                                {
                                    "id": "ckwca8jwwxxdv0c56f63uetce",
                                    "title": "2.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.6.D.mp3"
                                },
                                {
                                    "id": "ckwca8kooxxek0c56uab7pwfu",
                                    "title": "2.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.7.D.mp3"
                                },
                                {
                                    "id": "ckwca8lggxqrp0a01dc9rpvo4",
                                    "title": "2.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.8.D.mp3"
                                },
                                {
                                    "id": "ckwca8lggxxg10c56qwm1keai",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca8m88xfsz0c54i3cizahg",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E4.D.mp3"
                                },
                                {
                                    "id": "ckwca8m88xft50c547x681atm",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E5.D.mp3"
                                },
                                {
                                    "id": "ckwca8m88xftj0c54r9tx8lal",
                                    "title": "Exercise 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E6.D.mp3"
                                },
                                {
                                    "id": "ckwca8n00xink0e63qlghp7zx",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca8n00xfuk0c54u0pv6jse",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gsoow4z60b088phc3bmr",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwca8nrsxqyw0a01ohzbe15v",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.D.mp3"
                                },
                                {
                                    "id": "ckwca8nrsx8ep0b08kmtuavb4",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.D.mp3"
                                },
                                {
                                    "id": "ckwca8nrsx8f90b08pnd3810r",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.D.mp3"
                                },
                                {
                                    "id": "ckwca8nrsxiq50e63m29vpktd",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V.D.mp3"
                                },
                                {
                                    "id": "ckwca8ojkxfvl0c540miof6rd",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca8ojkxxq60c56bt25uctv",
                                    "title": "Drills",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.D.D.mp3"
                                },
                                {
                                    "id": "ckwca8ojkxqkr0c04il0k1bm8",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gsoowl2g0c04dbonr5vi",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwca8pbcxr290a01cidnht02",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.D.mp3"
                                },
                                {
                                    "id": "ckwca8pbcxirh0e630i2tpipw",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.D.mp3"
                                },
                                {
                                    "id": "ckwca8pbcx8jo0b08ygl9ow02",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.D.mp3"
                                },
                                {
                                    "id": "ckwca8pbcxqm10c04x7sobtgp",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.D.mp3"
                                },
                                {
                                    "id": "ckwca8q34xfyr0c54u2cmbfv5",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca8q34xit00e631bvqnqlo",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca8t68xxyg0c56zlg9hzmn",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca8t68xy070c562x3xk588",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.D1.D.mp3"
                                },
                                {
                                    "id": "ckwca8t68xr9g0a016lfh7j0x",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca8ty0xg2p0c54u9ptkhxq",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.D.mp3"
                                },
                                {
                                    "id": "ckwca8upsx8rs0b08kzsnnk0g",
                                    "title": "4.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.6.D.mp3"
                                },
                                {
                                    "id": "ckwca8upsxg6t0c5477wt3t4s",
                                    "title": "4.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.7.D.mp3"
                                },
                                {
                                    "id": "ckwca8upsxy510c56o0pzlo8r",
                                    "title": "4.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.8.D.mp3"
                                },
                                {
                                    "id": "ckwca8upsx8s80b08j2fw6wmb",
                                    "title": "4.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.9.D.mp3"
                                },
                                {
                                    "id": "ckwca8vhkxy5c0c5654ywlk3x",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca8vhkxr0p0c04fzqpiycp",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E4.D.mp3"
                                },
                                {
                                    "id": "ckwca8vhkxg780c54s7absbwk",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E5.D.mp3"
                                },
                                {
                                    "id": "ckwca8w9cxg7e0c54chr9z0t9",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca8w9cxg7m0c5473jlnyd5",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gsoowlzu0a01cfn9gf2v",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwca8w9cxj850e63rnepbyif",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.D.mp3"
                                },
                                {
                                    "id": "ckwca8w9cx8to0b08lkqqo4bx",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.D.mp3"
                                },
                                {
                                    "id": "ckwca8x14xy7i0c56xa9fixpr",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.D.mp3"
                                },
                                {
                                    "id": "ckwca8x14x8ue0b08yyii10fy",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.D.mp3"
                                },
                                {
                                    "id": "ckwca8x14xrda0a01zjv0jd20",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca8xswxjdd0e63vjyqlad0",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca8xswxy8b0c563btyvbjc",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca8xswxr3s0c04dyesq059",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.D.mp3"
                                },
                                {
                                    "id": "ckwca8ykox8v10b08z0gbuvan",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D1.D.mp3"
                                },
                                {
                                    "id": "ckwca8ykoxre10a01w7nnq1op",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca8ykoxr4c0c0424k706aq",
                                    "title": "5.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.5.D.mp3"
                                },
                                {
                                    "id": "ckwca8ykoxgbg0c544am065dq",
                                    "title": "5.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.6.D.mp3"
                                },
                                {
                                    "id": "ckwca8zcgx90a0b08szbrv5cu",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca8zcgx90g0b08hl8c96yo",
                                    "title": "Exercise 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E6.D.mp3"
                                },
                                {
                                    "id": "ckwca8zcgxrkg0a018oukdkj4",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca9048xjn90e63p243q5mq",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gsoowv880c56y6ezt622",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwca9048xr6q0c04vqeigiit",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.D.mp3"
                                },
                                {
                                    "id": "ckwca9048xyf90c56zzyvwe8r",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.D.mp3"
                                },
                                {
                                    "id": "ckwca90w0xrop0a01d1t3i1y0",
                                    "title": "6.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.3.D.mp3"
                                },
                                {
                                    "id": "ckwca91nsxgha0c54a7m130r2",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V.D.mp3"
                                },
                                {
                                    "id": "ckwca91nsxrpa0a017vojvnq8",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca91nsxrpn0a01wjufj4yk",
                                    "title": "Drills",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.D.D.mp3"
                                },
                                {
                                    "id": "ckwca92fkxr8h0c04pi0xuv9h",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gtggw50q0b08rko5l93w",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwca92fkxgj00c541xfm1yca",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.D.mp3"
                                },
                                {
                                    "id": "ckwca93z4x95p0b08xb0i4u8k",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.D.mp3"
                                },
                                {
                                    "id": "ckwca93z4xyj90c56bhc13vvk",
                                    "title": "7.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.3.D.mp3"
                                },
                                {
                                    "id": "ckwca93z4x97g0b088j5gtqaw",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca94qwxrak0c04jbz04v1d",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca94qwxrb30c042b3h5yp2",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca94qwxgkl0c54ro08h5d3",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D1.D.mp3"
                                },
                                {
                                    "id": "ckwca94qwxrcn0c04ei1ex7kx",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca94qwxrsr0a01iua50fev",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.D.mp3"
                                },
                                {
                                    "id": "ckwca95iox98x0b08bjfnbfew",
                                    "title": "7.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.5.D.mp3"
                                },
                                {
                                    "id": "ckwca95ioxrct0c04hxaj0yrx",
                                    "title": "7.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.6.D.mp3"
                                },
                                {
                                    "id": "ckwca95iox9930b085c42mzsc",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca95ioxrt20a011hhtswhg",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E4.D.mp3"
                                },
                                {
                                    "id": "ckwca95ioxjwm0e63je0vom4p",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E5.D.mp3"
                                },
                                {
                                    "id": "ckwca96agxglr0c54r5qot8rq",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca96agxyoq0c563zvi5j6g",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gtggwg7t0e63mc5unagr",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwca96agxjxx0e635x0zcvj3",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.D.mp3"
                                },
                                {
                                    "id": "ckwca96agxs0k0a01n2pxymjm",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.D.mp3"
                                },
                                {
                                    "id": "ckwca9728xs1d0a01hi3ok0bg",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.D.mp3"
                                },
                                {
                                    "id": "ckwca9728xk3a0e63bdbdcfs8",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca9a5cx9fy0b087kpfraf0",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca9ax4x9lx0b08xcltiegp",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca9bowxs4m0a01kciogjm6",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.D2.D.mp3"
                                },
                                {
                                    "id": "ckwca9bowxgzy0c54itj00l79",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca9bowxs6o0a01obta8ly2",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.D.mp3"
                                },
                                {
                                    "id": "ckwca9cgox9sd0b085arw69qj",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.D.mp3"
                                },
                                {
                                    "id": "ckwca9cgoxk850e63di3j9325",
                                    "title": "8.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.6.D.mp3"
                                },
                                {
                                    "id": "ckwca9cgoxk8r0e637dvnvy8i",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca9cgoxz060c56lfy59alg",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E4.D.mp3"
                                },
                                {
                                    "id": "ckwca9d8gx9t80b085g3omchd",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E5.D.mp3"
                                },
                                {
                                    "id": "ckwca9d8gxh260c54br7vh705",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gtggwl440c04b9cta6pq",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwca9d8gxk9l0e63ijjjv36m",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.D.mp3"
                                },
                                {
                                    "id": "ckwca9d8gxk9r0e6319vx5mq1",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.D.mp3"
                                },
                                {
                                    "id": "ckwca9e08x9u70b08ewge9vm3",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V.D.mp3"
                                },
                                {
                                    "id": "ckwca9e08xrv90c04n6wkw42d",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E1.D.mp3"
                                },
                                {
                                    "id": "ckwca9e08xshg0a01iu6g1wa1",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E2.D.mp3"
                                },
                                {
                                    "id": "ckwca9es0xrvk0c040j7vu2c5",
                                    "title": "Drills",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.D.D.mp3"
                                },
                                {
                                    "id": "ckwca9es0xsjh0a01n1t6c58k",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gu88wedy0c54xgl4owld",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwca9es0xz3h0c56ttg4ni8l",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.D.mp3"
                                },
                                {
                                    "id": "ckwca9gbkxh650c54jj8202kv",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.D.mp3"
                                },
                                {
                                    "id": "ckwca9h3cxz5r0c56o7eqrl4f",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.D.mp3"
                                },
                                {
                                    "id": "ckwca9h3cx9xo0b08hrnt7rt7",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.D.mp3"
                                },
                                {
                                    "id": "ckwca9hv4xso90a01ihh16zew",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V1.D.mp3"
                                },
                                {
                                    "id": "ckwca9hv4xs1t0c04q2slotrx",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E1.D.mp3"
                                },
                                {
                                    "id": "ckwf0ztvs1vl60a01go5ick5d",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.D1.D.mp3"
                                },
                                {
                                    "id": "ckwf0ztvs1oxm0c56e815ua4f",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C1.D.mp3"
                                },
                                {
                                    "id": "ckwca9vr4xzfs0c563q5lgijm",
                                    "title": "10.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.5.D.mp3"
                                },
                                {
                                    "id": "ckwca9xaoxafs0b080b8j80df",
                                    "title": "10.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.6.D.mp3"
                                },
                                {
                                    "id": "ckwca9yu8xzxg0c569u0rsnc1",
                                    "title": "10.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.7.D.mp3"
                                },
                                {
                                    "id": "ckwca9zm0xl3u0e63crcrf5ly",
                                    "title": "10.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.8.D.mp3"
                                },
                                {
                                    "id": "ckwca9zm0xaoi0b08bj9ybxh9",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V2.D.mp3"
                                },
                                {
                                    "id": "ckwca9zm0xhsc0c54zlrrrmay",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E5.D.mp3"
                                },
                                {
                                    "id": "ckwcaa0dsy07u0c56a1cjjxwt",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.D2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa0dsxaqb0b08vz4aqvt4",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gu88wv8n0c56anu9qkny",
                            "title": "Week 11",
                            "colour": null,
                            "index": 11,
                            "chapters": [
                                {
                                    "id": "ckwcaa0dsy0ct0c56mq4mx8cx",
                                    "title": "11.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa0dsxsrl0c04xxr1hlto",
                                    "title": "11.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa15kxarp0b08t08j2ppt",
                                    "title": "11.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.3.D.mp3"
                                },
                                {
                                    "id": "ckwcaa15kxarv0b08drnfmpd2",
                                    "title": "11.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.4.D.mp3"
                                },
                                {
                                    "id": "ckwcaa15kxl9v0e63j08bnnti",
                                    "title": "11.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.5.D.mp3"
                                },
                                {
                                    "id": "ckwcaa1xcxi650c54zj2jvgx4",
                                    "title": "11.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.6.D.mp3"
                                },
                                {
                                    "id": "ckwcaa2p4y0fu0c56lcghlghd",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa2p4y0i00c5689rl4qb9",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa3gwxibz0c54jk03sb9y",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.D1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa48oxb410b08rijfvsv7",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.C1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa3gwxsyl0c04b8tosyb6",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa48oxb490b08b6qh03av",
                                    "title": "11.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.7.D.mp3"
                                },
                                {
                                    "id": "ckwcaa48oy0ob0c56kglkw1iq",
                                    "title": "11.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.8.D.mp3"
                                },
                                {
                                    "id": "ckwcaa50gxt7x0c04jhkzmni8",
                                    "title": "11.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.9.D.mp3"
                                },
                                {
                                    "id": "ckwcaa50gxtyi0a01fov0m4b6",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa50gxif30c54gxzesyai",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E4.D.mp3"
                                },
                                {
                                    "id": "ckwcaa5s8xif90c54i98819og",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E5.D.mp3"
                                },
                                {
                                    "id": "ckwcaa5s8xlhq0e63resvqgtj",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.D2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa5s8xlhy0e63hnwxtu3d",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.C2.D.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gv00wefx0c54873gqvm6",
                            "title": "Week 12",
                            "colour": null,
                            "index": 12,
                            "chapters": [
                                {
                                    "id": "ckwcaa5s8y0ui0c562rlrjo3p",
                                    "title": "12.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.1.D.mp3"
                                },
                                {
                                    "id": "ckwcaa6k0xb7k0b08lq8sv7vv",
                                    "title": "12.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.2.D.mp3"
                                },
                                {
                                    "id": "ckwcaa6k0xu3y0a0134ht36pl",
                                    "title": "12.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.3.D.mp3"
                                },
                                {
                                    "id": "ckwcaa7bsxige0c54o4sxmgju",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V.D.mp3"
                                },
                                {
                                    "id": "ckwcaa7bsxll20e63vfl2d7vj",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.E2.V.mp3"
                                },
                                {
                                    "id": "ckwcaa7bsy0w30c567kekc70v",
                                    "title": "Drills",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.D.V.mp3"
                                },
                                {
                                    "id": "ckwcaa7bsy0wb0c56fgyzhbdk",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.C.V.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-dutch",
                    "baseColour": {
                        "css": "rgb(51,176,224)",
                        "hex": "#33b0e0"
                    }
                },
                {
                    "id": "ckwbwobiwe1vc0a012393cx2m",
                    "title": "German In 3 Months",
                    "colour": {
                        "hex": "#eecca6",
                        "css": "rgb(238,204,166)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/lKbPKCFTtGPjgFdwRX66",
                        "fileName": "German_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckwc9gv00wg8i0e63gqahmizy",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwcaa7bsxtbi0c04hfk25lwf",
                                    "title": "The alphabet",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.A.G.mp3"
                                },
                                {
                                    "id": "ckwcaa83kxllk0e63v82exb7c",
                                    "title": "Pronunciation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.P.G.mp3"
                                },
                                {
                                    "id": "ckwcaa83kxu5f0a01frajzcdv",
                                    "title": "Vowel combinations",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaa83kxigx0c540912ncec",
                                    "title": "Consonants",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C.G.mp3"
                                },
                                {
                                    "id": "ckwcaa83kxlm30e63t0wyk5rt",
                                    "title": "The hiatus",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.H.G.mp3"
                                },
                                {
                                    "id": "ckwcaa8vcxbp80b08owai50c6",
                                    "title": "Stressed syllables",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.S.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gv00wl570c04env6omr6",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwcaa8vcxihm0c54nani6ige",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaa8vcxlnd0e63zrgar15g",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaa8vcy0xz0c56nld0iej8",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaa9n4xu6c0a01884n4d2v",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaa9n4xii50c5450c5bjy5",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaa9n4xlnr0e63sa6ratqw",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaa9n4y0yk0c56227294ui",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E3.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gv00w52n0b082pjq9skw",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwcaa9n4xtfk0c04unnysndb",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaaaewxbre0b08us27478y",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaaaewxtge0c04eubijapc",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaaaewxik80c5434qfk8et",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaab6oxth10c04foe9iod5",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaab6oxlpj0e63x2nr28oo",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gvrswvae0c5675snhsin",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwcaab6oxiki0c5492p6dqq4",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaabygxikq0c54jwf3k3uf",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaabygxubi0a01p42llzsa",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaabygxlqe0e6321mid2nn",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaabygxthy0c04w0utfo7t",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaacq8xlqt0e636aq9no1j",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaacq8y10a0c565l795q22",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.G.mp3"
                                },
                                {
                                    "id": "ckwf62p7s8mwd0c04r0du7uhf",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V.G.mp3"
                                },
                                {
                                    "id": "ckwf635f47drq0b08w1x8dj7w",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gwjkwvak0c56fy5a73rw",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwcaadi0xilt0c54cd7tfyr7",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaadi0y13t0c56j75f253p",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaadi0y1550c567blp5o2f",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaae9sxc130b089uura514",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.G.mp3"
                                },
                                {
                                    "id": "ckwcaae9sy16o0c56idfdi50k",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaae9sxue90a01llsz98hk",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaaf1kxuew0a010hug77w6",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.G.mp3"
                                },
                                {
                                    "id": "ckwcaaf1kxini0c548ijmk42u",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.G.mp3"
                                },
                                {
                                    "id": "ckwcaaftcxc6o0b086uoqkmoa",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gwjkwm3u0a0193v4q0fx",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwcaaftcy17n0c56ix32jk5o",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaaftcy17t0c56y0b0s2wv",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V1.G.mp3"
                                },
                                {
                                    "id": "ckwcaaftcxuf60a017rt26kkf",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaagl4xlzf0e63t3zh15zp",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaagl4xc8d0b08dnwycahr",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaagl4xc8k0b08zhlz1s3b",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V2.G.mp3"
                                },
                                {
                                    "id": "ckwcaagl4xug10a010sjxv607",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E3.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gwjkw52w0b08jd0e0a6t",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwcaahcwxtpl0c04d6epdqtp",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaahcwy1dl0c56bh7vjzbo",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaahcwxc980b08kr0jbx9p",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaahcwxulk0a013fd5gj2c",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaai4oxm1f0e63ff6sr6u9",
                                    "title": "7.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaabygxthy0c04w0utfo7t",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaai4oy1f10c56347cpyca",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaai4oy1fq0c56zizw1x5x",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gwjkwg980e63wbc1h8wf",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwcaaiwgxtqq0c045bbh5ffd",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaaiwgxulv0a01t2so5jz0",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaaiwgxuma0a0195pexycu",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaaiwgxtrr0c04h4y56bo6",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.G.mp3"
                                },
                                {
                                    "id": "ckwcaajo8xumi0a01sbz74ncx",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C.G.mp3"
                                },
                                {
                                    "id": "ckwcaajo8xm2h0e63ekl3fby8",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaajo8y1gu0c56149mrwwq",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaajo8xcer0b08oivr651t",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaakg0y1h00c56cu4b0q0v",
                                    "title": "8.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaakg0xung0a01yanew08n",
                                    "title": "8.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.7.G.mp3"
                                },
                                {
                                    "id": "ckwcaakg0xm3a0e63q6997j0y",
                                    "title": "8.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.8.G.mp3"
                                },
                                {
                                    "id": "ckwcaal7sxtxf0c04ffugr3rg",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.G.mp3"
                                },
                                {
                                    "id": "ckwcaal7sxm4l0e63t46jfldd",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E3.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gxbcwg9e0e63u5cuvl5q",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwcaal7sxm5b0e63teypqpsd",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaal7sxcgk0b08xcl4bo50",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaalzkxupd0a01i7gfpqjw",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaalzkxm620e63dl33xzrj",
                                    "title": "9.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaalzkxuqy0a01f41k1cow",
                                    "title": "9.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaalzkxurc0a013oxm89ez",
                                    "title": "9.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaamrcxiyt0c54uzcq6hga",
                                    "title": "9.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaamrcxusb0a019tyqo03y",
                                    "title": "9.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.7.G.mp3"
                                },
                                {
                                    "id": "ckwcaanj4xut40a01ttis2go9",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaanj4xm8n0e63ioof7fsa",
                                    "title": "9.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.8.G.mp3"
                                },
                                {
                                    "id": "ckwcaanj4y1or0c56lo1mfnw2",
                                    "title": "9.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.9.G.mp3"
                                },
                                {
                                    "id": "ckwcaaoawxclb0b08bznsfrad",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaaoawxu510c042es1rwa7",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gxbcweit0c54dcy4l97t",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwcaacq8xlsg0e63il303zpx",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaaoawxj6y0c54spzvzy0s",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaap2oxj8e0c54qkld0m3k",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaap2oxma30e63rv1fydte",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaap2oxcmr0b08txqoydyf",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaap2oy1rc0c56ontdq7z7",
                                    "title": "10.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaapugxu8b0c04sbx76urt",
                                    "title": "10.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.7.G.mp3"
                                },
                                {
                                    "id": "ckwcaapugxcol0b08i94di9t4",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E2.G.mp3"
                                },
                                {
                                    "id": "ckwcaapugxmbk0e63upi5tkag",
                                    "title": "10.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.8.G.mp3"
                                },
                                {
                                    "id": "ckwcaaqm8xcp70b08xl60tjbk",
                                    "title": "10.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.9.G.mp3"
                                },
                                {
                                    "id": "ckwcaaqm8xv3o0a01o9gjmqvp",
                                    "title": "10.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.10.G.mp3"
                                },
                                {
                                    "id": "ckwcaare0xjh90c54rb9dqmbc",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gxbcweiz0c5443ajwmfa",
                            "title": "Week 11",
                            "colour": null,
                            "index": 11,
                            "chapters": [
                                {
                                    "id": "ckwcaas5sy1yx0c561jezk0ee",
                                    "title": "11.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaas5sxuay0c04fxgcpfwx",
                                    "title": "11.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaas5sxv4p0a01efftt0k9",
                                    "title": "11.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.3.mp3"
                                },
                                {
                                    "id": "ckwcaasxkxjin0c54mowk4fzm",
                                    "title": "11.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.4.mp3"
                                },
                                {
                                    "id": "ckwcaasxkxmfo0e63b16n1v37",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaasxkxctt0b083ooc8vtb",
                                    "title": "11.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaasxky2490c566ma8t566",
                                    "title": "11.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaatpcxucz0c044z27tjpt",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaacq8xucl0a01h83dj9s1",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gxbcwgdo0e63bcqob4hn",
                            "title": "Week 12",
                            "colour": null,
                            "index": 12,
                            "chapters": [
                                {
                                    "id": "ckwcaauh4xuge0c04cu7gjfv0",
                                    "title": "12.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaauh4xcws0b084q82ergw",
                                    "title": "12.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaauh4xjmk0c54g5w4jvqr",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.E1.G.mp3"
                                },
                                {
                                    "id": "ckwcaav8wxmle0e63llstytdg",
                                    "title": "12.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.3.G.mp3"
                                },
                                {
                                    "id": "ckwcaav8wy2720c56w9ddl83u",
                                    "title": "12.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaav8wy27n0c56ios5j0je",
                                    "title": "12.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaaw0oxcyt0b08vpaky6gy",
                                    "title": "12.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaaw0oxjog0c54fc6rbc2c",
                                    "title": "12.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.7.G.mp3"
                                },
                                {
                                    "id": "ckwcaaw0oxmmz0e634mkkm2iu",
                                    "title": "12.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.8.G.mp3"
                                },
                                {
                                    "id": "ckwcaawsgy29l0c56amtdxn1h",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaawsgxd0l0b08tliimz7r",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.C.G.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckxextrww5sil0b15roovofdq",
                            "title": "Week 13",
                            "colour": null,
                            "index": 13,
                            "chapters": [
                                {
                                    "id": "ckwcaawsgy2a30c56wuuqzyhk",
                                    "title": "13.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.1.G.mp3"
                                },
                                {
                                    "id": "ckwcaawsgxuli0c04pa1kv1l5",
                                    "title": "13.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.2.G.mp3"
                                },
                                {
                                    "id": "ckwcaaxk8xvd70a01aduwichk",
                                    "title": "13.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.4.G.mp3"
                                },
                                {
                                    "id": "ckwcaaxk8xvdf0a01uf8w50x3",
                                    "title": "13.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.5.G.mp3"
                                },
                                {
                                    "id": "ckwcaaxk8y2b10c56w4dsnjge",
                                    "title": "13.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.6.G.mp3"
                                },
                                {
                                    "id": "ckwcaaxk8xvdy0a01reie7jkd",
                                    "title": "13.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.7.G.mp3"
                                },
                                {
                                    "id": "ckwcaayc0xjtu0c54lfgwogpu",
                                    "title": "13.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.8.G.mp3"
                                },
                                {
                                    "id": "ckwcaayc0xmrl0e63wifvcffm",
                                    "title": "13.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.9.G.mp3"
                                },
                                {
                                    "id": "ckwcaaz3sxund0c040uqyiqvr",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.V.G.mp3"
                                },
                                {
                                    "id": "ckwcaaz3sxjvx0c54qm5ee97h",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.C.G.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-german",
                    "baseColour": {
                        "css": "rgb(221,153,77)",
                        "hex": "#dd994d"
                    }
                },
                {
                    "id": "ckwbwpa8we2le0a01uws4crgd",
                    "title": "Italian In 3 Months",
                    "colour": {
                        "hex": "#a9d5b6",
                        "css": "rgb(169,213,182)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/l9up8WOFQjeBDfpA2PeA",
                        "fileName": "hugo-itlaian-9780241537411_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckxfx8gswkghz0c03qfvkchhz",
                            "title": "Pronuncation",
                            "colour": null,
                            "index": 0,
                            "chapters": [
                                {
                                    "id": "ckwca4svsxquh0c56ty6sz3d9",
                                    "title": "Stress",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.1.I.mp3"
                                },
                                {
                                    "id": "ckwca4svsx2lc0b08nr29xed7",
                                    "title": "Vowels",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.2.I.mp3"
                                },
                                {
                                    "id": "ckwca4svsx2lk0b083xuvdmdp",
                                    "title": "Consonants",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.3.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gk74wkxf0c048waj664w",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwca4svsxjam0c04nr1yjepw",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca4tnkxjkq0a01250ik3u8",
                                    "title": "1.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.1.I.mp3"
                                },
                                {
                                    "id": "ckwca4tnkxa810c54tx4anofk",
                                    "title": "1.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.2.I.mp3"
                                },
                                {
                                    "id": "ckwca4tnkxa890c54d48t4e7g",
                                    "title": "1.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.3.I.mp3"
                                },
                                {
                                    "id": "ckwca4tnkxcu90e63mcxj5eyq",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca4ufcxqv80c56spp1p16p",
                                    "title": "1.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.4.I.mp3"
                                },
                                {
                                    "id": "ckwca4ufcxqvm0c568o9kxrc9",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca4v74xjev0c04h9pbph2y",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca4vywxaci0c54s35e2qsr",
                                    "title": "1.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.5.I.mp3"
                                },
                                {
                                    "id": "ckwca4vywx2qt0b080mlzwcuy",
                                    "title": "1.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.6.I.mp3"
                                },
                                {
                                    "id": "ckwca4wqoxjks0c04p9cgdaia",
                                    "title": "1.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.7.I.mp3"
                                },
                                {
                                    "id": "ckwca4xigxagt0c54af4bvb8x",
                                    "title": "1.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.8.I.mp3"
                                },
                                {
                                    "id": "ckwca4xigxahk0c54h0afhrvu",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca4xigxahq0c54asjyzj0e",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca4ya8xd210e63ug0zchkc",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.P.1.mp3"
                                },
                                {
                                    "id": "ckwca4ya8x2rt0b081qdk0flu",
                                    "title": "Vocabulary A–C",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca4z20xr0y0c56rrzwjder",
                                    "title": "Vocabulary D–L",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca4z20xjp40c04szrhvqwc",
                                    "title": "Vocabulary M–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca4z20xjxa0a0110ql6qb6",
                                    "title": "Vocabulary Q–Z",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V4.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gkywwe770c54hfy1qipc",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwca4z20xaid0c54nnd47dye",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca4ztsx2w40b08mpwwuadw",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca4ztsxjxg0a015m8zs2di",
                                    "title": "2.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.1.I.mp3"
                                },
                                {
                                    "id": "ckwca4ztsxail0c54hxdp49x2",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.I.mp3"
                                },
                                {
                                    "id": "ckwca50lkxait0c5422wj3dg3",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.I.mp3"
                                },
                                {
                                    "id": "ckwca50lkxda60e635f8hxoqs",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca50lkxr7e0c56l7fro914",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E3.I.mp3"
                                },
                                {
                                    "id": "ckwca50lkx2xh0b08mfj2k0oy",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.I.mp3"
                                },
                                {
                                    "id": "ckwca51dcxjqw0c04ctmdo01v",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.I.mp3"
                                },
                                {
                                    "id": "ckwca51dcx2xv0b08r58gln7x",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca51dcxk070a01nkw22no0",
                                    "title": "2.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5254xaj30c54iefxcibw",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca5254xr920c561ur231lb",
                                    "title": "2.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5254xjs90c04r33eq2v9",
                                    "title": "2.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.8.I.mp3"
                                },
                                {
                                    "id": "ckxfxur9slap30c14zotzx311",
                                    "title": "2.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.9.I.mp3"
                                },
                                {
                                    "id": "ckwca52wwx2y10b086o4fkbmb",
                                    "title": "Exercise 8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E8.I.mp3"
                                },
                                {
                                    "id": "ckwca52wwx2y70b08zhp54ozj",
                                    "title": "Exercise 9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E9.I.mp3"
                                },
                                {
                                    "id": "ckwca52wwxjsf0c04lmvpbnq6",
                                    "title": "Exercise 10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E10.I.mp3"
                                },
                                {
                                    "id": "ckwca52wwxk1d0a01ht8s5r50",
                                    "title": "Excercise 11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E11.I.mp3"
                                },
                                {
                                    "id": "ckwca53ooxddn0e63mz0fdybw",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.P.I.mp3"
                                },
                                {
                                    "id": "ckwca53oox2yn0b08j8az5qle",
                                    "title": "Vocabulary A–B",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca53ooxak10c547arnq9y4",
                                    "title": "Vocabulary C–D",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca53ooxr9v0c56xpo57byc",
                                    "title": "Vocabulary E–L",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca53ooxra10c56609lywdn",
                                    "title": "Vocabulary M–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca54ggxra70c56j3kyz3he",
                                    "title": "Vocabulary Q–S",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V5.I.mp3"
                                },
                                {
                                    "id": "ckwca54ggx32g0b08an8z8pf9",
                                    "title": "Vocabulary T–Z",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V6.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gkywwe7e0c5406h43upf",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwca54ggxk6a0a01o6zgd4h1",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca54ggxjy90c04t7ebcceo",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca5588xdei0e63zg5fjt74",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5588xraf0c56h280ow7x",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca5588xaly0c54zcyrrcj2",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5588xk6y0a0137rchwwf",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5600xk740a01kynkmd3y",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca5600xam40c54s1daqtjf",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5600xdf70e6303cwhzxi",
                                    "title": "3.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5600xk7k0a01rxuwcvi7",
                                    "title": "Exercise 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E6.I.mp3"
                                },
                                {
                                    "id": "ckwca5600xdfd0e63f566zxxt",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca56rsxrf60c56lo33iit7",
                                    "title": "3.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.5.I.mp3"
                                },
                                {
                                    "id": "ckwca56rsx34t0b08oupnhfm3",
                                    "title": "3.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.6.I.mp3"
                                },
                                {
                                    "id": "ckwca56rsxrfe0c56odabtgdb",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca56rsx3530b089hnng3nt",
                                    "title": "Exercise 8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E8.I.mp3"
                                },
                                {
                                    "id": "ckwca57jkxk2m0c04pjl7f0tb",
                                    "title": "Exercise 9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E9.I.mp3"
                                },
                                {
                                    "id": "ckwca57jkxdg00e635a9rbsve",
                                    "title": "Conversation 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C4.I.mp3"
                                },
                                {
                                    "id": "ckwca57jkxk2s0c04hjywlafp",
                                    "title": "3.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.7.I.mp3"
                                },
                                {
                                    "id": "ckwca57jkx35k0b0861ezqxmb",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.P.I.mp3"
                                },
                                {
                                    "id": "ckwca58bcxrmm0c56rnj6vra8",
                                    "title": "Vocabulary A–B",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca58bcx35t0b08th2dfrsn",
                                    "title": "Vocabulary C–E",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca58bcxao30c5441g3keuz",
                                    "title": "Vocabulary F–L",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5934xk3b0c048psapsgv",
                                    "title": "Vocabulary M–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca5934xao90c54fm09lxnc",
                                    "title": "Vocabulary Q–S",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V5.I.mp3"
                                },
                                {
                                    "id": "ckwca5934xkcn0a01ay9cb4b5",
                                    "title": "Vocabulary T–Z",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V6.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gkywwfuv0e638j3z4vd6",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwca5934xdgz0e63zdrnm5ee",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca59uwxdh80e63o90986ti",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.I.mp3"
                                },
                                {
                                    "id": "ckwca59uwxro10c56v00bqiz0",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.I.mp3"
                                },
                                {
                                    "id": "ckwca59uwxap60c54g0povtzo",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca59uwxk4c0c04mo0mfjv5",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5amoxrod0c56vc4x3dw2",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E3.I.mp3"
                                },
                                {
                                    "id": "ckwca5amox37g0b08ccw960ze",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5amoxdhn0e63qhs6l9a4",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca5amoxkgq0a011gqv0wvn",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5begxkgy0a01k22ze5si",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca5begxaqg0c54sk9zfpjg",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5begxaqo0c54k68wq683",
                                    "title": "4.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5begxdim0e63gjym0e3e",
                                    "title": "4.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5c68xrro0c565gsvtzfq",
                                    "title": "4.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.8.I.mp3"
                                },
                                {
                                    "id": "ckwca5c68xdiu0e630ekubtqn",
                                    "title": "Exercise 9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E9.I.mp3"
                                },
                                {
                                    "id": "ckwca5c68x3ap0b08yehheyr2",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca5cy0xrty0c56u8rls56q",
                                    "title": "Exercise 10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E10.I.mp3"
                                },
                                {
                                    "id": "ckwca5cy0xdj20e63pdghwl8p",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5cy0x3dy0b083it7emaa",
                                    "title": "Vocabulary A–C",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5cy0xryz0c56hnbm9je7",
                                    "title": "Vocabulary D–L",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca5dpsxasm0c542w0pev45",
                                    "title": "Vocabulary M–R",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5dpsxkb70c04ikgoxyhy",
                                    "title": "Vocabulary S–V",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V4.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gkywwfv30e6354el14dk",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwca5dpsxkir0a01reucv3mw",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca5ehkxrz70c56ap8zmzo9",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca5ehkxkbd0c04994skeup",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5ehkxkix0a01p3r1cexq",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca5ehkx3f60b08aacbus14",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.I.mp3"
                                },
                                {
                                    "id": "ckwca5ehkxatq0c548r3dpp79",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5f9cxkbj0c04hs1ahc4c",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E5.I.mp3"
                                },
                                {
                                    "id": "ckwca5f9cxrzj0c565uann833",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5f9cx3fq0b08kmbqedyj",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5f9cxdp00e63ii3a1utk",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca5g14xkc90c04it9bzjut",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5g14xkk80a0166efkyux",
                                    "title": "5.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5g14xkck0c04xex759ex",
                                    "title": "5.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5g14xdpc0e630n4u3hpz",
                                    "title": "5.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5gswxs0s0c56r59l2nea",
                                    "title": "Exercise 10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E10.I.mp3"
                                },
                                {
                                    "id": "ckwca5gswx3g30b08xyh8wuip",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca5gswx3g90b08e6vvsezm",
                                    "title": "Exercise 11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E11.I.mp3"
                                },
                                {
                                    "id": "ckwca5gswxaub0c54mtv61rg0",
                                    "title": "5.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.8.I.mp3"
                                },
                                {
                                    "id": "ckwca5hkox3gn0b0841kmwkmx",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5hkoxkh90c04iogdg9kh",
                                    "title": "Vocabulary A–B",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5hkoxkhu0c04js5rlbqp",
                                    "title": "Vocabulary C–E",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca5hkoxklv0a01iqs1z35d",
                                    "title": "Vocabulary F–M",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5icgxav80c54ze3kpllr",
                                    "title": "Vocabulary N–R",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca5icgxdpp0e63xe0vuq1d",
                                    "title": "Vocabulary S–Z",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V5.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9glqowkyk0c04nob3bufm",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwca5icgxs3y0c56zfsdbqy3",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca5j48x3h40b08roi96fr3",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca5j48xki00c040o2l4m2l",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5j48xs440c56lxo0bgra",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca5j48x3ha0b08cs88qn2k",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5j48xki60c04gcc7v3ui",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E3.I.mp3"
                                },
                                {
                                    "id": "ckwca5jw0x3hg0b08ybtaftrp",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5jw0x3hm0b08eptuonn5",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca5jw0xawk0c54poeyn2y7",
                                    "title": "6.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5jw0xkii0c042h4aexic",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E5.I.mp3"
                                },
                                {
                                    "id": "ckwca5knsxduj0e63c3m4onyy",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca5knsxs7w0c566yck5mn5",
                                    "title": "Exercise 10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E10.I.mp3"
                                },
                                {
                                    "id": "ckwca5knsx3in0b08ie05ykk5",
                                    "title": "6.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5knsxkiq0c045aecfk2k",
                                    "title": "6.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5lfkxaxv0c54dzbdiqsb",
                                    "title": "Conversation 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C4.I.mp3"
                                },
                                {
                                    "id": "ckwca5lfkxksb0a01y7ppt55z",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5mz4xdzi0e633d3031u8",
                                    "title": "Vocabulary A–B",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5mz4xsa30c56nz80rh3p",
                                    "title": "Vocabulary C–D",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca5mz4x3kl0b08l2xa4lh2",
                                    "title": "Vocabulary E–M",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5nqwxkl10c04tjhc4tpw",
                                    "title": "Vocabulary N–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca5nqwxklv0c04fiflymus",
                                    "title": "Vocabulary R–V",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V5.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9glqowltb0a0194atzjsm",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwca5oiox3lr0b08uzat1sz5",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca5oioxe0v0e635nq87wad",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca5oioxazz0c54zhl44ac5",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5oioxb050c54mw92t8fd",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca5pagxe130e63jfb73ava",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5pagxsb00c56obmuuzvm",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca5pagxsb70c565mmia0xi",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5pagxsbd0c56xfn12fa9",
                                    "title": "7.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5q28x3nb0b08ecbove2k",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5q28xkzt0a01jpbdmp3w",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca5q28xkn00c04jjokjyyf",
                                    "title": "7.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5q28xkzz0a010fqbzt8i",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca5q28xl050a014k82iqu2",
                                    "title": "Exercise 9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E9.I.mp3"
                                },
                                {
                                    "id": "ckwca5qu0xb0y0c547b39jpeh",
                                    "title": "7.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5qu0xb320c54hhpd886g",
                                    "title": "7.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5qu0xe5p0e63aims1s2g",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5rlsxe680e6307v3fv07",
                                    "title": "Vocabulary A–B",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5rlsxl0e0a01a1h33inl",
                                    "title": "Vocabulary C–F",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca5rlsxscz0c56u3rvcogr",
                                    "title": "Vocabulary G–M",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5rlsxkow0c04kdre2bsw",
                                    "title": "Vocabulary O–R",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca5rlsxe6l0e63b8uzw9yx",
                                    "title": "Vocabulary S–V",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V5.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9glqow4t40b08fptb28ml",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwca5sdkxb9a0c54ciopo5zd",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca5sdkxe6r0e6380rsuwoi",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca5sdkxkpb0c04etdn5m46",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5sdkxsd80c56df8rtlkv",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5sdkxkqa0c04jy06lcyu",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5t5cxb9h0c549moum209",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5t5cxb9n0c54edi34azv",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca5t5cxe6x0e63hularwow",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5t5cxkrr0c04hh4mwn43",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5tx4xe7x0e63fszrob9k",
                                    "title": "8.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5tx4xl5c0a014kotqqe5",
                                    "title": "8.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5tx4xsij0c56u8f5bnfp",
                                    "title": "8.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.8.I.mp3"
                                },
                                {
                                    "id": "ckwca5tx4x3tw0b08mnzf1mq6",
                                    "title": "8.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.9.I.mp3"
                                },
                                {
                                    "id": "ckwca5uowxl680a01b6nn2roz",
                                    "title": "Exercise 8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E8.I.mp3"
                                },
                                {
                                    "id": "ckwca5uowxebb0e636ekx9w6y",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5uowxsj40c56etr0y26e",
                                    "title": "Vocabulary A–D",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5uowxebk0e63iyi23xh2",
                                    "title": "Vocabulary E–I",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca5vgoxska0c56ten72ym1",
                                    "title": "Vocabulary L–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca5vgoxl6g0a01cmp4lu7v",
                                    "title": "Vocabulary R–S",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca5vgoxbbd0c5498pma7kg",
                                    "title": "Vocabulary T–V",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V5.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gmigw4ta0b08fnp3ay5w",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwca5vgoxebt0e63mpo3vazx",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca5w8gxebz0e63ythu5vnl",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E1.I.mp3"
                                },
                                {
                                    "id": "ckxfzmpqonll40d5785s7codr",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.I.mp3"
                                },
                                {
                                    "id": "ckwca5w8gx3v30b0891zzgrd4",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca5w8gxky40c0436wvt125",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca5w8gxkya0c0451uxwd3w",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.I.mp3"
                                },
                                {
                                    "id": "ckwca5x08xkyg0c04zumx1cp7",
                                    "title": "9.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.3.I.mp3"
                                },
                                {
                                    "id": "ckwca5x08xl7c0a01hv95sv46",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca5x08x3wr0b08syqo65kz",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E5.I.mp3"
                                },
                                {
                                    "id": "ckwca5x08xbcj0c54j50zyzry",
                                    "title": "9.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.4.I.mp3"
                                },
                                {
                                    "id": "ckwca5xs0xee10e63cspxops6",
                                    "title": "9.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.5.I.mp3"
                                },
                                {
                                    "id": "ckwca5xs0xl7u0a01yeo5sufk",
                                    "title": "9.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.6.I.mp3"
                                },
                                {
                                    "id": "ckwca5xs0xssr0c56l81lvif6",
                                    "title": "9.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.7.I.mp3"
                                },
                                {
                                    "id": "ckwca5xs0xssx0c566v9av2fh",
                                    "title": "9.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.8.I.mp3"
                                },
                                {
                                    "id": "ckwca5yjsxeem0e6348tcimts",
                                    "title": "9.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.9.I.mp3"
                                },
                                {
                                    "id": "ckwca5yjsxl8d0a01uhwhp5xv",
                                    "title": "Exercise 7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E7.I.mp3"
                                },
                                {
                                    "id": "ckwca5w8gxskl0c56nrc7e86u",
                                    "title": "9.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.10.I.mp3"
                                },
                                {
                                    "id": "ckwca5zbkxegb0e63eig9w7ir",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.P.I.mp3"
                                },
                                {
                                    "id": "ckwca5zbkx3y10b08kfqaxywd",
                                    "title": "Vocabulary A–C",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca5zbkxl9n0a01fh5uug8z",
                                    "title": "Vocabulary D–F",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca603cxego0e63p797nh8y",
                                    "title": "Vocabulary G–M",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca603cxl9t0a01cv3brrr3",
                                    "title": "Vocabulary N–R",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V4.I.mp3"
                                },
                                {
                                    "id": "ckwca603cxl0u0c04hsltgycn",
                                    "title": "Vocabulary S–V",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V5.I.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gmigwkyr0c04wr4vwtg1",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwca603cxeh20e631oj1w1gy",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C1.I.mp3"
                                },
                                {
                                    "id": "ckwca603cxla10a01njql0f5a",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E1.I.mp3"
                                },
                                {
                                    "id": "ckwca60v4xbgi0c54xubi7dst",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.I.mp3"
                                },
                                {
                                    "id": "ckwca60v4xbgq0c5434ne338k",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.I.mp3"
                                },
                                {
                                    "id": "ckwca60v4xsuy0c56uaja04bc",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E2.I.mp3"
                                },
                                {
                                    "id": "ckwca60v4xbhb0c54pwuhrc41",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.I.mp3"
                                },
                                {
                                    "id": "ckwca60v4xl1v0c040430dgpc",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C2.I.mp3"
                                },
                                {
                                    "id": "ckwca61mwxlad0a017w42id12",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E4.I.mp3"
                                },
                                {
                                    "id": "ckwca61mwxsv80c56to9txsul",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.I.mp3"
                                },
                                {
                                    "id": "ckwca61mwxlaj0a01hrzd1wcz",
                                    "title": "10.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.5.I.mp3"
                                },
                                {
                                    "id": "ckwca61mwxbk20c54dhqidfd5",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C3.I.mp3"
                                },
                                {
                                    "id": "ckwca62eoxehv0e63yg47qdby",
                                    "title": "Exercise 6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E6.I.mp3"
                                },
                                {
                                    "id": "ckwca62eoxl2e0c0427rhypsm",
                                    "title": "10.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.6.I.mp3"
                                },
                                {
                                    "id": "ckwca62eoxl2k0c04jpjr495l",
                                    "title": "Key Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.P.I.mp3"
                                },
                                {
                                    "id": "ckwca62eoxsvg0c56a9e7amlm",
                                    "title": "Vocabulary A–C",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V1.I.mp3"
                                },
                                {
                                    "id": "ckwca62eoxl2u0c04swagir92",
                                    "title": "Vocabulary D–L",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V2.I.mp3"
                                },
                                {
                                    "id": "ckwca636gxld60a01zt9e2n0v",
                                    "title": "Vocabulary M–P",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V3.I.mp3"
                                },
                                {
                                    "id": "ckwca636gxbl20c54q886l53r",
                                    "title": "Vocabulary R–U",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V4.I.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-italian",
                    "baseColour": {
                        "css": "rgb(82,170,109)",
                        "hex": "#52aa6d"
                    }
                },
                {
                    "id": "ckwbwpfnce2ri0a01xbwwn1ap",
                    "title": "Spanish In 3 Months",
                    "colour": {
                        "hex": "#f7e3a3",
                        "css": "rgb(247,227,163)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/jXoKgZfT9GhDNsKhlkRQ",
                        "fileName": "Spanish_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckxg04c00o6e00b512px4cpg0",
                            "title": "Pronunciation",
                            "colour": null,
                            "index": 0,
                            "chapters": [
                                {
                                    "id": "ckwca636gxeiy0e63bw8hy24i",
                                    "title": "Stress",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.1.S.mp3"
                                },
                                {
                                    "id": "ckwca636gxsxx0c56vtz7ukt3",
                                    "title": "Vowels",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.2.S.mp3"
                                },
                                {
                                    "id": "ckwca63y8x41d0b08swdq7fa8",
                                    "title": "Consonants",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.3.S.mp3"
                                },
                                {
                                    "id": "ckwca63y8x41y0b08pb6pxb1h",
                                    "title": "The Spanish Alphabet",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.4.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gmigwe840c544tesmip4",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwca63y8xblv0c5429b35b3p",
                                    "title": "1.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.1.S.mp3"
                                },
                                {
                                    "id": "ckwca64q0xsyi0c56rbqthdqa",
                                    "title": "1.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.2.S.mp3"
                                },
                                {
                                    "id": "ckwca64q0xl4c0c04b1aiz7qb",
                                    "title": "1.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.3.S.mp3"
                                },
                                {
                                    "id": "ckwca64q0x45p0b08vtpozay1",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E1.S.mp3"
                                },
                                {
                                    "id": "ckwca64q0xl4i0c04l9i78mlf",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca64q0xl4o0c04c7ylkokj",
                                    "title": "1.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.4.S.mp3"
                                },
                                {
                                    "id": "ckwca65hsxbmq0c54syrvtwfw",
                                    "title": "1.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.5.S.mp3"
                                },
                                {
                                    "id": "ckwca65hsxbmw0c54xbyb4g4j",
                                    "title": "1.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.6.S.mp3"
                                },
                                {
                                    "id": "ckwca65hsxbn20c54n8fmbgwi",
                                    "title": "1.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.7.S.mp3"
                                },
                                {
                                    "id": "ckwca65hsxeks0e63hl38rxy8",
                                    "title": "1.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.8.S.mp3"
                                },
                                {
                                    "id": "ckwca669kxt550c563fx4bqzv",
                                    "title": "1.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.9.S.mp3"
                                },
                                {
                                    "id": "ckwca669kxlnd0a014sqqrril",
                                    "title": "Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V.S.mp3"
                                },
                                {
                                    "id": "ckwca669kxt8v0c566jv85wei",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca669kxl5a0c04c7tgwo78",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C1.S.mp3"
                                },
                                {
                                    "id": "ckwca669kxbna0c54gne56771",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C2.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gmigwe8c0c54u1pmtuzt",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwca671cxlq40a017pgrz8fk",
                                    "title": "2.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.1.S.mp3"
                                },
                                {
                                    "id": "ckwca671cxt950c569zl0onvo",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.S.mp3"
                                },
                                {
                                    "id": "ckwca671cx4860b0801ncmtg0",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.S.mp3"
                                },
                                {
                                    "id": "ckwca67t4xeo60e63gsiir688",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca67t4xl5j0c04bc4j44gz",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca67t4xlrk0a01t6on07w3",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.S.mp3"
                                },
                                {
                                    "id": "ckwca67t4xlsl0a01mvifie27",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.S.mp3"
                                },
                                {
                                    "id": "ckwca68kwx48d0b089oxq8tsa",
                                    "title": "2.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.6.S.mp3"
                                },
                                {
                                    "id": "ckwca68kwxbon0c543j31ljqe",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E3.S.mp3"
                                },
                                {
                                    "id": "ckwca68kwxeoe0e630vlrlbdz",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca68kwxtdg0c56scb1f8vj",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C1.S.mp3"
                                },
                                {
                                    "id": "ckwca69cox48j0b080fevfkr0",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C2.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gna8wuui0c56qqfgeo46",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwca69cox48p0b08mchqoima",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.S.mp3"
                                },
                                {
                                    "id": "ckwca69coxlt80a01e907bkdk",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6a4gxlab0c04zlan28d7",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6a4gxese0e63o4b90uao",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6a4gxtem0c566v0bxoul",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca6a4gx49w0b08u2pumpr3",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6aw8xlah0c04hjc658tj",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca6aw8x4bq0b08i5q2lrr6",
                                    "title": "3.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6aw8xbpa0c54a5tvswq5",
                                    "title": "3.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6bo0xld30c04nn4rkhvo",
                                    "title": "3.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6bo0xbq80c54yn7gycab",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V4.S.mp3"
                                },
                                {
                                    "id": "ckwca6bo0xeue0e63qwvwurbu",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6bo0xtjr0c565x57bjro",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca6cfsx4cv0b08v1uvnu3u",
                                    "title": "Drill 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.D4.S.mp3"
                                },
                                {
                                    "id": "ckwca6cfsxlit0c04n17nzko4",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gna8w4tr0b08cdf2xfzc",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwca6cfsxeuo0e63el80hssn",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6d7kxtl60c56r821wrfj",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6dzcxbr80c54j47p3u8e",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6er4xlrg0c04kdjbe831",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca6er4xbtf0c549l22qrr3",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6fiwx4gm0b08f6wg4m17",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6fiwx4h80b08llgl1j51",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6fiwxlud0c04vm60x8et",
                                    "title": "4.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6fiwxf0g0e63eetaj5i0",
                                    "title": "4.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6fiwxf0m0e636l6fwz6d",
                                    "title": "4.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6gaoxtr50c56h6b1vayc",
                                    "title": "4.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6gaoxf0s0e63d6uoraxk",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6gaoxts10c56no43yr0h",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9go20w4tx0b08n8lwv115",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwca6gaox4hr0b0801p6hmh2",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6h2gx4i10b08c50pj8xd",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6h2gxlus0c044g32a6v0",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6h2gxc4c0c5438b6rrlk",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6h2gx4j40b08tjw9ibgq",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6hu8xlwm0c043pa4mtur",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6hu8xlws0c04cuhh1zam",
                                    "title": "5.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6hu8xc4x0c544kbuxhst",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca6hu8xu050c56ccytr6ly",
                                    "title": "Excercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.S.mp3"
                                },
                                {
                                    "id": "ckwca6im0xf3j0e630oits6lr",
                                    "title": "5.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6im0xf3p0e63pbd8u9vs",
                                    "title": "5.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6im0xu2a0c56dmqddoi7",
                                    "title": "5.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6im0xc5n0c54g9fw0eqm",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V4.S.mp3"
                                },
                                {
                                    "id": "ckwca6jdsxf500e63ftb8mfni",
                                    "title": "Exercise 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E5.S.mp3"
                                },
                                {
                                    "id": "ckwca6jdsxu4f0c56kre74tqv",
                                    "title": "5.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6jdsxu4p0c56ryt87yel",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca6jdsxlxq0c04us42lt4e",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6k5kxml60a01smgw9zoy",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca6k5kxf5g0e63ju2ydcrw",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9go20we920c54hbu09jhh",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwca6k5kxu4w0c56gd3p0n81",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6k5kxu520c56dm16qmkf",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6kxcxlz10c04mlz8ft9q",
                                    "title": "6.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6kxcxmm40a01sm19z6dh",
                                    "title": "6.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6kxcxcch0c54p0qfl66m",
                                    "title": "6.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6kxcxu580c565e5iplwu",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6kxcx4no0b08e8vcudtc",
                                    "title": "6.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6lp4xmnw0a019hstxdjg",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6lp4xm0j0c04hitlt5td",
                                    "title": "6.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6lp4xmo20a01pcozgkvy",
                                    "title": "6.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6lp4xm0q0c04r5lbbeex",
                                    "title": "6.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6mgwxu5n0c56ue4fhj6l",
                                    "title": "6.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.10.S.mp3"
                                },
                                {
                                    "id": "ckwca6mgwxmoj0a01gh888nft",
                                    "title": "6.11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.11.S.mp3"
                                },
                                {
                                    "id": "ckwca6mgwxmpm0a01uh38jipo",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca6mgwx4q50b08vc626jyw",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6n8oxcg60c548cmogodd",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca6n8oxubd0c5611m5i7p5",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9go20wfx50e63t22n01vs",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwca6n8ox4qx0b08ryv8372g",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6o0gxm5f0c047vksvj4b",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6o0gxfi70e6343zplj10",
                                    "title": "7.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6o0gxcjz0c5480k204cd",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6o0gxmsy0a0190hd8318",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6os8xfii0e63tm3sue3p",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6os8xm5l0c04ioxl8r2m",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca6os8xck80c54lraip5eq",
                                    "title": "7.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6os8xfiz0e63knsdi1mg",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E3.S.mp3"
                                },
                                {
                                    "id": "ckwca6os8xfj80e63vfiop2y9",
                                    "title": "7.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6pk0xubl0c56eckgtyrr",
                                    "title": "7.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6pk0x4sk0b08npen1y1z",
                                    "title": "7.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6pk0xmto0a01bn6wbqgv",
                                    "title": "7.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6pk0xcoj0c54m6klq9ds",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca6qbsxucp0c56mphgy7ap",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca6qbsxcop0c54dnoogfhj",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6qbsxmhk0c04w85j6nmp",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca6qbsxucw0c561z3jrye1",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9go20wlvh0a01nuaiw1bp",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwca6r3kxmji0c04j8s120du",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6r3kxmxf0a01kk7ylog9",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6r3kxmml0c04lmd02gbf",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6r3kxcp10c545b9azzln",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6r3kxmmr0c04b6n5iuol",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6rvcxmxr0a01xwofn1x7",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6rvcxfkd0e63ohpqgunr",
                                    "title": "8.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6rvcxudz0c56qh60fjoe",
                                    "title": "8.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6rvcxuew0c56karpkfwe",
                                    "title": "8.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6sn4x4tr0b083b5gutul",
                                    "title": "8.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6sn4x4ud0b08nc9yck55",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6sn4xmn30c04rzq49zpt",
                                    "title": "8.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.10.S.mp3"
                                },
                                {
                                    "id": "ckwca6sn4xn0m0a01vdno2hm8",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca6tewx4w90b08ix9ylh1r",
                                    "title": "8.11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.11.S.mp3"
                                },
                                {
                                    "id": "ckwca6tewxcrg0c54kk34jsyq",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca6tewxflg0e637ldh7thh",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6tewxcrm0c54v3o4xsj9",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gotswkzi0c04hnymj0fe",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwca6u6oxflm0e63kpo3qjb4",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.S.mp3"
                                },
                                {
                                    "id": "ckwca6u6oxn1k0a01jxhkkumr",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.S.mp3"
                                },
                                {
                                    "id": "ckwca6u6oxcs30c542v5l7bdm",
                                    "title": "9.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.3.S.mp3"
                                },
                                {
                                    "id": "ckwca6u6oxugw0c56e4wnippz",
                                    "title": "9.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.4.S.mp3"
                                },
                                {
                                    "id": "ckwca6u6oxfmg0e63l7g6d7jc",
                                    "title": "9.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.5.S.mp3"
                                },
                                {
                                    "id": "ckwca6u6ox4wk0b08v89ja99w",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca6uygxuky0c56116rr7i6",
                                    "title": "9.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.6.S.mp3"
                                },
                                {
                                    "id": "ckwca6uygxmr00c04uk0kdcjl",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca6vq8xmr90c048wxaz6rh",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E2.S.mp3"
                                },
                                {
                                    "id": "ckwca6x9sxcvb0c54vma54rpo",
                                    "title": "9.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.7.S.mp3"
                                },
                                {
                                    "id": "ckwca6y1kx50y0b08e830nsu7",
                                    "title": "9.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.8.S.mp3"
                                },
                                {
                                    "id": "ckwca6y1kxmsh0c04z54pjcf4",
                                    "title": "9.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.9.S.mp3"
                                },
                                {
                                    "id": "ckwca6y1kxcvj0c54vh1mipz6",
                                    "title": "9.10",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.10.S.mp3"
                                },
                                {
                                    "id": "ckwca6y1kxfto0e63da21mwli",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca6ytcxuth0c56vkvcotnh",
                                    "title": "9.11",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.11.S.mp3"
                                },
                                {
                                    "id": "ckwca6ytcx51w0b08knrfyvh1",
                                    "title": "9.12",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.12.S.mp3"
                                },
                                {
                                    "id": "ckwca6zl4xcwp0c54u480tff0",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V4.S.mp3"
                                },
                                {
                                    "id": "ckwca6zl4xmyk0c04lu4zf1ys",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca6zl4xuud0c566mpp99sx",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca6zl4xnaa0a0196keq6jv",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca6zl4xmyr0c04mt9nk68e",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gotswfxx0e63asl11byz",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwca70cwx53e0b08cgox3geb",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.S.mp3"
                                },
                                {
                                    "id": "ckwca70cwxcy70c54brl0ka9p",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca70cwxfvk0e63eeqx6h70",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E1.S.mp3"
                                },
                                {
                                    "id": "ckwca70cwxmz80c04j8t9m9ql",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.S.mp3"
                                },
                                {
                                    "id": "ckwca714oxn180c046daq3x7x",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.S.mp3"
                                },
                                {
                                    "id": "ckwca714oxnbp0a01emw8egfg",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca714oxnbv0a014hhqvd11",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.S.mp3"
                                },
                                {
                                    "id": "ckwca714oxn1o0c044xeh7fjp",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca71wgxd0e0c54oo9jn66b",
                                    "title": "10.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.5.S.mp3"
                                },
                                {
                                    "id": "ckwca71wgxn2e0c04jmom6q5j",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V4.S.mp3"
                                },
                                {
                                    "id": "ckwca71wgxfxi0e636wpc4onh",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca71wgxuww0c569vvcwoao",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca71wgxn2l0c044l6myp9f",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca72o8xd1w0c545znp16fp",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gotsw4wg0b08na0q7sf5",
                            "title": "Week 11",
                            "colour": null,
                            "index": 11,
                            "chapters": [
                                {
                                    "id": "ckwca72o8x59f0b08cow8p4sn",
                                    "title": "11.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.1.S.mp3"
                                },
                                {
                                    "id": "ckwca72o8xn3h0c04ln8hyuqn",
                                    "title": "11.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.2.S.mp3"
                                },
                                {
                                    "id": "ckwca72o8xne40a015brsh67l",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca73g0xnea0a014ltquv7r",
                                    "title": "11.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.3.S.mp3"
                                },
                                {
                                    "id": "ckwca73g0xd250c544prejnq7",
                                    "title": "11.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.4.S.mp3"
                                },
                                {
                                    "id": "ckwca73g0xd2b0c54rrci4d2w",
                                    "title": "11.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.5.S.mp3"
                                },
                                {
                                    "id": "ckwca73g0xd2j0c54mzu5ewzb",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca747sxfyh0e63nbs3t5k5",
                                    "title": "11.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.6.S.mp3"
                                },
                                {
                                    "id": "ckwca747sxuyc0c567z39x0wb",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.E3.S.mp3"
                                },
                                {
                                    "id": "ckwca747sxfzb0e636lds6yg4",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca747sxuyw0c56qycz01l1",
                                    "title": "11.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.7.S.mp3"
                                },
                                {
                                    "id": "ckwca74zkxn400c04xwcn55s3",
                                    "title": "11.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.8.S.mp3"
                                },
                                {
                                    "id": "ckwca74zkxuzs0c56t1ki6f7p",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca74zkxni70a01jeen1l5z",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca74zkxg2l0e6370b3wm9p",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/.mp3"
                                },
                                {
                                    "id": "ckwca75rcxv000c56pa33lt6m",
                                    "title": "Drill 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/.mp3"
                                },
                                {
                                    "id": "ckwca75rcxnio0a01ilwq62ok",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/11.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gotswkzw0c04rj49eeu3",
                            "title": "Week 12",
                            "colour": null,
                            "index": 12,
                            "chapters": [
                                {
                                    "id": "ckwca75rcxv060c561hkh94em",
                                    "title": "12.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.1.S.mp3"
                                },
                                {
                                    "id": "ckwca75rcxnjl0a013f2ckgm2",
                                    "title": "12.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.2.S.mp3"
                                },
                                {
                                    "id": "ckwca75rcxg3y0e631f42q1n7",
                                    "title": "12.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.3.S.mp3"
                                },
                                {
                                    "id": "ckwca76j4xd6u0c54jndgatxe",
                                    "title": "12.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.4.S.mp3"
                                },
                                {
                                    "id": "ckwca76j4xn6z0c047uw2odr7",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca76j4xd720c54ilkaxo07",
                                    "title": "12.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.5.S.mp3"
                                },
                                {
                                    "id": "ckwca76j4xg460e63dezbxa6y",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca77awxv0t0c56k6bygjfn",
                                    "title": "12.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.6.S.mp3"
                                },
                                {
                                    "id": "ckwca77awxv1q0c56acy58qf2",
                                    "title": "12.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.7.S.mp3"
                                },
                                {
                                    "id": "ckwca77awx5d40b08bgo8wft7",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca77awxn8w0c04r1zpgg4q",
                                    "title": "12.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.8.S.mp3"
                                },
                                {
                                    "id": "ckwca782oxd8i0c54ixyvlogu",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.V4.S.mp3"
                                },
                                {
                                    "id": "ckwca782oxnmj0a013jlqnjvr",
                                    "title": "12.9",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.9.S.mp3"
                                },
                                {
                                    "id": "ckwca782oxd8t0c540ew9gomg",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca782oxv2r0c56ppt6jh2u",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca782oxv3d0c560bgq3a2u",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca78ugxg8l0e63npyepagt",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.C.S.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckxg0uoawq7e20d57jxhmm19c",
                            "title": "Week 13",
                            "colour": null,
                            "index": 13,
                            "chapters": [
                                {
                                    "id": "ckwca78ugxv3w0c566lp9l4ur",
                                    "title": "13.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.1.S.mp3"
                                },
                                {
                                    "id": "ckwca78ugxv510c5661y6jhgk",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.V1.S.mp3"
                                },
                                {
                                    "id": "ckwca78ugx5ic0b08badp23jq",
                                    "title": "13.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.2.S.mp3"
                                },
                                {
                                    "id": "ckwca79m8xday0c54cz5hn7cg",
                                    "title": "13.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.3.S.mp3"
                                },
                                {
                                    "id": "ckwca79m8xn9p0c04i1gefxqv",
                                    "title": "13.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.4.S.mp3"
                                },
                                {
                                    "id": "ckwca79m8x5il0b08rm171qf0",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.V2.S.mp3"
                                },
                                {
                                    "id": "ckwca79m8xnns0a01aryvqmzf",
                                    "title": "13.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.5.S.mp3"
                                },
                                {
                                    "id": "ckwca7ae0xnad0c04fh5ufjmo",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.V3.S.mp3"
                                },
                                {
                                    "id": "ckwca7ae0xdd40c54qrr0wp42",
                                    "title": "13.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.6.S.mp3"
                                },
                                {
                                    "id": "ckwca7ae0xdda0c54qmd6hk22",
                                    "title": "13.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.7.S.mp3"
                                },
                                {
                                    "id": "ckwca7ae0xv5o0c5697jjq8mj",
                                    "title": "Drill 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.D1.S.mp3"
                                },
                                {
                                    "id": "ckwca7ae0xgb30e63zoz0a11g",
                                    "title": "Drill 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.D2.S.mp3"
                                },
                                {
                                    "id": "ckwca7b5sx5kz0b08kr04nu9a",
                                    "title": "Drill 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.D3.S.mp3"
                                },
                                {
                                    "id": "ckwca7b5sxnop0a01wp3g6enb",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/13.C.S.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-spanish",
                    "baseColour": {
                        "css": "rgb(238,200,70)",
                        "hex": "#eec846"
                    }
                },
                {
                    "id": "ckwbwqtswdrhk0c04p4r4jz5c",
                    "title": "Portuguese In 3 Months",
                    "colour": {
                        "hex": "#cec2e0",
                        "css": "rgb(206,194,224)"
                    },
                    "coverImage": {
                        "url": "https://media.graphcms.com/69ZCJR82S02wgl4TKikY",
                        "fileName": "Portuguese_cover.jpeg"
                    },
                    "sections": [
                        {
                            "id": "ckxey6lc05r3e0c03k38gdt8a",
                            "title": "Pronunciation",
                            "colour": null,
                            "index": 0,
                            "chapters": [
                                {
                                    "id": "ckwca7b5sxnc50c04lili1y91",
                                    "title": "The Portuguese Alphabet",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7b5sx5l50b08phspkpat",
                                    "title": "Vowels",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7b5sxncd0c04sjjgwxzu",
                                    "title": "Diphthongs",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7bxkxnow0a0167pxh665",
                                    "title": "Nasal Vowels & Diphthongs",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7bxkxnp20a01cha8dyyt",
                                    "title": "Consonants",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/0.5.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gplkwea00c5461ekobx0",
                            "title": "Week 1",
                            "colour": null,
                            "index": 1,
                            "chapters": [
                                {
                                    "id": "ckwca7bxkxdf90c5444ravolc",
                                    "title": "Useful Phrases",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.UP.P.mp3"
                                },
                                {
                                    "id": "ckwca7bxkxgbe0e635j754ygs",
                                    "title": "1.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7cpcxdfo0c54o98pfja1",
                                    "title": "1.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7cpcxnd30c04ccj8lbfq",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7cpcxv690c569p57eh2b",
                                    "title": "1.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7dh4xgbv0e63ytq3k1mg",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca7dh4x5md0b08pctfvlb9",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7dh4xv9d0c564zsayay7",
                                    "title": "1.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7dh4xnqr0a01e5m3aht2",
                                    "title": "1.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7dh4xdjc0c54srypycq3",
                                    "title": "1.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.6.P.mp3"
                                },
                                {
                                    "id": "ckwca7e8wx5mz0b082r56q474",
                                    "title": "1.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.7.P.mp3"
                                },
                                {
                                    "id": "ckwca7e8wxgcp0e637lb5a0ii",
                                    "title": "1.8",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.8.P.mp3"
                                },
                                {
                                    "id": "ckwca7e8wxni60c04ebx5mlrt",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7e8wxv9p0c56uqsip6kg",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C1.P.mp3"
                                },
                                {
                                    "id": "ckwca7e8wxnif0c04b4s9553q",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C2.P.mp3"
                                },
                                {
                                    "id": "ckwca7f0oxdl90c540lf0psjk",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.C3.P.mp3"
                                },
                                {
                                    "id": "ckwca7f0oxnvb0a010x0dj62c",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7f0oxva30c567ivqf4xj",
                                    "title": "Practice Text",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.PT.P.mp3"
                                },
                                {
                                    "id": "ckwca7f0oxdlv0c54cvp1kiq5",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.PV.P.mp3"
                                },
                                {
                                    "id": "ckwca7fsgxnma0c04ofgdxp1f",
                                    "title": "Practice Exercise",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/1.PE.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gplkwfy70e63doowhsy1",
                            "title": "Week 2",
                            "colour": null,
                            "index": 2,
                            "chapters": [
                                {
                                    "id": "ckwca7fsgxvaf0c567ldowmew",
                                    "title": "2.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7fsgx5rg0b08nl8mjk1i",
                                    "title": "2.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7fsgx5s70b0876bjo1is",
                                    "title": "2.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7gk8xnzy0a01zuidmby0",
                                    "title": "2.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7gk8xnmq0c04gy381s95",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7gk8xgkm0e63bnm47an2",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7gk8xdml0c54q66q83vt",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca7hc0xvd40c5658dk9wf7",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7hc0xo4b0a01scymgjfj",
                                    "title": "2.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7hc0xgm70e63lpzez18e",
                                    "title": "2.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.6.P.mp3"
                                },
                                {
                                    "id": "ckwca7hc0xvf00c568ffy8ein",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7i3sxgmd0e63us3ty52t",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7i3sxvfi0c56u4gs587c",
                                    "title": "2.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.7.P.mp3"
                                },
                                {
                                    "id": "ckwca7i3sxvfo0c56qcuzvqqi",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca7i3sx5u70b08kr4e7hll",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.C.P.mp3"
                                },
                                {
                                    "id": "ckwca7i3sxdp80c54j3b96xf7",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.V5.P.mp3"
                                },
                                {
                                    "id": "ckwca7ivkxgoj0e63omhgeqwt",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.D.P.mp3"
                                },
                                {
                                    "id": "ckwca7ivkx5uf0b08af7libk9",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/2.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gplkweaa0c543b2u7qxb",
                            "title": "Week 3",
                            "colour": null,
                            "index": 3,
                            "chapters": [
                                {
                                    "id": "ckwca7ivkxvhb0c56qjl8exct",
                                    "title": "3.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7ivkx5un0b0865a4xhr0",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7jncxo5a0a01lmvud0wd",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7jncxdr40c54gfi7rn41",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca7jncxvi70c56estc9hyk",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7kf4x5wg0b08i2uy8sn2",
                                    "title": "3.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7kf4xvio0c56bqpzpnhf",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7kf4xgsi0e63ezur7y2z",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7l6wxoby0a01pgyyztme",
                                    "title": "3.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7lyoxnsz0c04m7fkiet7",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.E4.P.mp3"
                                },
                                {
                                    "id": "ckwca7lyoxdu90c54ud3d5xec",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca7lyoxguu0e634rgh086z",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.C.P.mp3"
                                },
                                {
                                    "id": "ckwca7mqgxvki0c5608bha610",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.V5.P.mp3"
                                },
                                {
                                    "id": "ckwca7mqgx65a0b08aakht8yl",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.D.P.mp3"
                                },
                                {
                                    "id": "ckwca7mqgxoez0a0191zc4s8g",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/3.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gqdcwfyh0e6368idvstt",
                            "title": "Week 4",
                            "colour": null,
                            "index": 4,
                            "chapters": [
                                {
                                    "id": "ckwca7ni8xnxm0c04rdjdaovk",
                                    "title": "4.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7ni8xdyq0c5440s2lwmz",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7ni8xdyw0c5495566t1f",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7oa0xvpu0c56aq5ksru5",
                                    "title": "4.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7oa0xgya0e630kqcplmi",
                                    "title": "4.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7oa0xvr60c568mk2985y",
                                    "title": "4.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7p1sx6cn0b08z4ovkn7p",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca7p1sxo2t0c0458ug31bt",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7p1sxh0n0e63ntgt9t9b",
                                    "title": "4.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7ptkxoib0a012q6yz65y",
                                    "title": "4.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.6.P.mp3"
                                },
                                {
                                    "id": "ckwca7ptkxoir0a01zxiygvv5",
                                    "title": "4.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.7.P.mp3"
                                },
                                {
                                    "id": "ckwca7ptkxe170c5458m0hlmf",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7ptkxe1j0c54ecqh5g7c",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7ptkxvt40c56q0xvua20",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C1.P.mp3"
                                },
                                {
                                    "id": "ckwca7qlcxo540c041suyworg",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C2.P.mp3"
                                },
                                {
                                    "id": "ckwca7qlcxvtc0c56u4o690ho",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.C3.P.mp3"
                                },
                                {
                                    "id": "ckwca7qlcxo5j0c04ikk514ls",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca7qlcxokw0a01a41dajgw",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.D.P.mp3"
                                },
                                {
                                    "id": "ckwca7rd4x6g40b08nvzu557q",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/4.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gqdcwv0o0c56xnthb853",
                            "title": "Week 5",
                            "colour": null,
                            "index": 5,
                            "chapters": [
                                {
                                    "id": "ckwca7rd4xe220c54cl5to6hs",
                                    "title": "5.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7rd4xo6s0c04szvkeifk",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7s4wx6ia0b08v2jy5c9g",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7s4wxo760c040jofdwf6",
                                    "title": "5.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7s4wxonm0a01kcqy5ozs",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7s4wxe3s0c54g9ywdvj7",
                                    "title": "5.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7s4wxvv30c56nu2yfvtj",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7swoxh490e63glwknyni",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7swoxvvt0c56w9jc9uu5",
                                    "title": "5.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7swox6jv0b08irhjh8sd",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.E4.P.mp3"
                                },
                                {
                                    "id": "ckwca7swoxo9n0c04bquyeswm",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca7togxopp0a01uj5yj6jh",
                                    "title": "5.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7togxopv0a017lg5zft3",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.C.P.mp3"
                                },
                                {
                                    "id": "ckwca7togxvzv0c56bl300m0b",
                                    "title": "Vocabulary 5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.V5.P.mp3"
                                },
                                {
                                    "id": "ckwca7togxw020c5631v1l216",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.D.P.mp3"
                                },
                                {
                                    "id": "ckwca7ug8xw0f0c56tiaf66oz",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/5.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gqdcwv0v0c56a3av27xi",
                            "title": "Week 6",
                            "colour": null,
                            "index": 6,
                            "chapters": [
                                {
                                    "id": "ckwca7ug8x6mg0b08kohoaurv",
                                    "title": "6.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7ug8x6mm0b082dixbdhi",
                                    "title": "6.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7v80xeic0c543hevbywy",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7v80xorr0a01umdcnuc1",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7v80x6n70b089zg6q2nd",
                                    "title": "6.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7vzsxogt0c04utfickcl",
                                    "title": "6.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7vzsxosi0a01q3mk1o5r",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca7vzsx6qa0b0865jh18aa",
                                    "title": "6.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7vzsxoux0a01qafvf53x",
                                    "title": "Exercise 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.E3.P.mp3"
                                },
                                {
                                    "id": "ckwca7wrkxha20e63wdhmxbgi",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7wrkxek30c54flpy0q6l",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7wrkxw7r0c56xfbtaod6",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.D.P.mp3"
                                },
                                {
                                    "id": "ckwca7xjcxel30c541yekhkh6",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/6.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gqdcw4xb0b08gtqywb7a",
                            "title": "Week 7",
                            "colour": null,
                            "index": 7,
                            "chapters": [
                                {
                                    "id": "ckwca7xjcx6uv0b08bjtqcggp",
                                    "title": "7.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.1.P.mp3"
                                },
                                {
                                    "id": "ckwca7xjcxoxl0a01kiutxe08",
                                    "title": "7.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.2.P.mp3"
                                },
                                {
                                    "id": "ckwca7xjcxhbx0e632ekb2s0e",
                                    "title": "7.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.3.P.mp3"
                                },
                                {
                                    "id": "ckwca7xjcxw8c0c56saljz3e1",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca7yb4xoxy0a01eh3etede",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca7yb4xop60c04ego1lh13",
                                    "title": "7.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.4.P.mp3"
                                },
                                {
                                    "id": "ckwca7yb4x6w90b08mtkeluho",
                                    "title": "7.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.5.P.mp3"
                                },
                                {
                                    "id": "ckwca7yb4xemb0c54vnzcjh90",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca7yb4xemn0c54q7i77blt",
                                    "title": "7.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.6.P.mp3"
                                },
                                {
                                    "id": "ckwca7z2wx6wy0b08txtmx4a0",
                                    "title": "7.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.7.P.mp3"
                                },
                                {
                                    "id": "ckwca7z2wxhd60e634mpad0u1",
                                    "title": "Exercise 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.E4.P.mp3"
                                },
                                {
                                    "id": "ckwca7z2wxp1k0a01iothuvgk",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca7zuox6xn0b082psot84d",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.C.P.mp3"
                                },
                                {
                                    "id": "ckwca7zuoxhef0e63gi6lzwvb",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca7zuoxhel0e63r5cm1dmf",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.D.P.mp3"
                                },
                                {
                                    "id": "ckwca80mgxwfq0c56zrjsh48w",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/7.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gr54wlyj0a01iwz5xjw9",
                            "title": "Week 8",
                            "colour": null,
                            "index": 8,
                            "chapters": [
                                {
                                    "id": "ckwca80mgxos10c0474qqlg0e",
                                    "title": "8.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.1.P.mp3"
                                },
                                {
                                    "id": "ckwca80mgxwh10c560r7wwykk",
                                    "title": "8.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.2.P.mp3"
                                },
                                {
                                    "id": "ckwca80mgxery0c54h0ft7fdl",
                                    "title": "8.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.3.P.mp3"
                                },
                                {
                                    "id": "ckwca81e8xosw0c04ybj2hs1a",
                                    "title": "8.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.4.P.mp3"
                                },
                                {
                                    "id": "ckwca81e8xp520a01e8le4y0x",
                                    "title": "8.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.5.P.mp3"
                                },
                                {
                                    "id": "ckwca81e8xp580a01zu25slg8",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca81e8xwid0c569wzsvuzf",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca8260xesm0c54vmja51r5",
                                    "title": "8.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.6.P.mp3"
                                },
                                {
                                    "id": "ckwca8260xhhi0e63uipilrlo",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca8260xwj60c5657md5ya4",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca8260x76h0b08w6qj0qm5",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca82xsxet90c54xrq070un",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C1.P.mp3"
                                },
                                {
                                    "id": "ckwca83pkxeto0c54vtslk29m",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.C2.P.mp3"
                                },
                                {
                                    "id": "ckwca84hcxetw0c54qdqkdgdn",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca84hcxwpc0c567m9pz87p",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.D.P.mp3"
                                },
                                {
                                    "id": "ckwca84hcxhkj0e638nfdvjac",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/8.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gr54wlyp0a018iixscdh",
                            "title": "Week 9",
                            "colour": null,
                            "index": 9,
                            "chapters": [
                                {
                                    "id": "ckwca84hcx7as0b08k7wdb7w9",
                                    "title": "9.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.1.P.mp3"
                                },
                                {
                                    "id": "ckwca8594xeul0c54zwrc2mm4",
                                    "title": "9.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.2.P.mp3"
                                },
                                {
                                    "id": "ckwca8594xpff0a01wyax1lep",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca8594xhl90e631uvpul3k",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca8594xpe60c04583nmxaf",
                                    "title": "9.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.3.P.mp3"
                                },
                                {
                                    "id": "ckwca8594xph20a01otjtgx92",
                                    "title": "9.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.4.P.mp3"
                                },
                                {
                                    "id": "ckwca860wx7by0b08mxzz1he1",
                                    "title": "9.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.5.P.mp3"
                                },
                                {
                                    "id": "ckwca860wx7ck0b085ol23ihz",
                                    "title": "9.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.6.P.mp3"
                                },
                                {
                                    "id": "ckwca860wxpf00c049a0kpddc",
                                    "title": "9.7",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.7.P.mp3"
                                },
                                {
                                    "id": "ckwca860wxpf60c04injhcirn",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca86soxphq0a01i29xbk05",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca86soxhoi0e63e194n0y3",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca87kgx7ej0b08easi99fa",
                                    "title": "Conversation",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.C.P.mp3"
                                },
                                {
                                    "id": "ckwca87kgxf150c54i36u358m",
                                    "title": "Vocabulary 4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.V4.P.mp3"
                                },
                                {
                                    "id": "ckwca87kgxpj10c04evlffsnm",
                                    "title": "Dialogue",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.D.P.mp3"
                                },
                                {
                                    "id": "ckwca88c8xpml0a01en110qgt",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/9.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9gr54wl1q0c04s3u0v50s",
                            "title": "Week 10",
                            "colour": null,
                            "index": 10,
                            "chapters": [
                                {
                                    "id": "ckwca88c8xwv10c562ufanfy1",
                                    "title": "10.1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.1.P.mp3"
                                },
                                {
                                    "id": "ckwca88c8x7gm0b08o63n2md1",
                                    "title": "Exercise 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E1.P.mp3"
                                },
                                {
                                    "id": "ckwca8940xpkn0c04llk7oy0i",
                                    "title": "Vocabulary 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V1.P.mp3"
                                },
                                {
                                    "id": "ckwca8940xpku0c04iv1cbwi1",
                                    "title": "10.2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.2.P.mp3"
                                },
                                {
                                    "id": "ckwca8940x7h90b08740wam9g",
                                    "title": "10.3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.3.P.mp3"
                                },
                                {
                                    "id": "ckwca8940xf3z0c54qr33co46",
                                    "title": "10.4",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.4.P.mp3"
                                },
                                {
                                    "id": "ckwca8940x7if0b08wpd67w9x",
                                    "title": "10.5",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.5.P.mp3"
                                },
                                {
                                    "id": "ckwca89vsxf9n0c54auexhzzl",
                                    "title": "10.6",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.6.P.mp3"
                                },
                                {
                                    "id": "ckwca89vsxht10e63t18utrtb",
                                    "title": "Exercise 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.E2.P.mp3"
                                },
                                {
                                    "id": "ckwca8ankxpss0a01knkp6n4o",
                                    "title": "Vocabulary 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V2.P.mp3"
                                },
                                {
                                    "id": "ckwca8ankxhy60e63dphj0153",
                                    "title": "Conversation 1",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C1.P.mp3"
                                },
                                {
                                    "id": "ckwca8ankxwz60c56awaqezeo",
                                    "title": "Conversation 2",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C2.P.mp3"
                                },
                                {
                                    "id": "ckwca8ankxwzj0c56cug2lyhc",
                                    "title": "Conversation 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.C3.P.mp3"
                                },
                                {
                                    "id": "ckwca8bfcxpsr0c04z0wk2xlj",
                                    "title": "Vocabulary 3",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.V3.P.mp3"
                                },
                                {
                                    "id": "ckwca8bfcxpxe0a010mbvbs3i",
                                    "title": "Practice Vocabulary",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/10.PV.P.mp3"
                                }
                            ]
                        },
                        {
                            "id": "ckwc9grwwwv320c56p9o1mifm",
                            "title": "Week 12",
                            "colour": null,
                            "index": 11,
                            "chapters": [
                                {
                                    "id": "ckwca8c74xfdl0c54zenu3e0j",
                                    "title": "dar",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.1.P.mp3"
                                },
                                {
                                    "id": "ckwca8c74xfds0c54qilelnlm",
                                    "title": "deixar",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.2.P.mp3"
                                },
                                {
                                    "id": "ckwca8cywxfdz0c54ba4p68nc",
                                    "title": "estar",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.3.P.mp3"
                                },
                                {
                                    "id": "ckwca8cywxfea0c5499j0ot9h",
                                    "title": "fazer",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.4.P.mp3"
                                },
                                {
                                    "id": "ckwca8cywxx1m0c56t707m5ud",
                                    "title": "ficar",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.5.P.mp3"
                                },
                                {
                                    "id": "ckwca8dqox7s70b082lvn9nzp",
                                    "title": "querer",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.8.P.mp3"
                                },
                                {
                                    "id": "ckwca8dqoxi3u0e63hup0tkfd",
                                    "title": "ir",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.6.P.mp3"
                                },
                                {
                                    "id": "ckwca8dqoxpx40c046yzjsz0u",
                                    "title": "pôr",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.7.P.mp3"
                                },
                                {
                                    "id": "ckwca8dqoxq1v0a010oxj2g76",
                                    "title": "ser",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.9.P.mp3"
                                },
                                {
                                    "id": "ckwca8dqoxq2h0a01ubdexmpv",
                                    "title": "Idioms",
                                    "colour": null,
                                    "audioFile": "https://hugo-audio.s3.eu-west-1.amazonaws.com/12.10.P.mp3"
                                }
                            ]
                        }
                    ],
                    "key": "hugo-portuguese",
                    "baseColour": {
                        "css": "rgb(157,133,193)",
                        "hex": "#9d85c1"
                    }
                }
            ],
            "homepage": {
                "backgroundImage": null,
                "buttonText": "Choose Book",
                "title": "In 3 Months",
                "dkLogo": {
                    "fileName": "dklogo.jpg",
                    "url": "https://media.graphcms.com/2otvU4IxR364yX6YjpJO"
                },
                "bookLogo": {
                    "fileName": "hugo.webp",
                    "url": "https://media.graphcms.com/m5F4gpqQUe01DA6yOWCg"
                }
            },
            "header": {
                "id": "ckwklkdp45pqx0a53m7xveobf",
                "title": "Hugo Header",
                "bookLogo": {
                    "url": "https://media.graphcms.com/m5F4gpqQUe01DA6yOWCg",
                    "fileName": "hugo.webp"
                },
                "dkLogo": {
                    "fileName": "dklogo.jpg",
                    "url": "https://media.graphcms.com/2otvU4IxR364yX6YjpJO"
                },
                "menu": {
                    "title": "Menu",
                    "submenus": [
                        {
                            "title": "Help",
                            "path": "/en-gb/help"
                        },
                        {
                            "title": "Choose a book",
                            "path": "/en-gb/bookSelection"
                        }
                    ]
                }
            }
        }
    ]
};
