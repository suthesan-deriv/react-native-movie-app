import axios from 'axios'

// const data = {
//     "items": [
//       {
//         "id": "tt8356942",
//         "title": "The 355",
//         "fullTitle": "The 355 (2022)",
//         "year": "2022",
//         "releaseState": "January 7",
//         "image": "https://imdb-api.com/images/original/MV5BNzk4MDZhNTctMDA3OC00ODdkLWIyOWYtN2M0MzA3MDY5NDk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "124",
//         "runtimeStr": "2h 4mins",
//         "plot": "When a top-secret weapon falls into mercenary hands, a wild card CIA agent joins forces with three international agents on a lethal mission to retrieve it, while staying a step ahead of a mysterious woman who's tracking their every move.",
//         "contentRating": "PG-13",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Action, Thriller",
//         "genreList": [
//           {
//             "key": "Action",
//             "value": "Action"
//           },
//           {
//             "key": "Thriller",
//             "value": "Thriller"
//           }
//         ],
//         "directors": "Simon Kinberg",
//         "directorList": [
//           {
//             "id": "nm1334526",
//             "name": "Simon Kinberg"
//           }
//         ],
//         "stars": "Jessica Chastain, Lupita Nyong'o, Diane Kruger, Penélope Cruz",
//         "starList": [
//           {
//             "id": "nm1567113",
//             "name": "Jessica Chastain"
//           },
//           {
//             "id": "nm2143282",
//             "name": "Lupita Nyong'o"
//           },
//           {
//             "id": "nm1208167",
//             "name": "Diane Kruger"
//           },
//           {
//             "id": "nm0004851",
//             "name": "Penélope Cruz"
//           }
//         ]
//       },
//       {
//         "id": "tt11245972",
//         "title": "Scream",
//         "fullTitle": "Scream (2022)",
//         "year": "2022",
//         "releaseState": "January 14",
//         "image": "https://imdb-api.com/images/original/MV5BM2E4ZGFmZTgtMDVkYS00ZTk0LWIzYWMtODk5OGVmYmEyMzEzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "114",
//         "runtimeStr": "1h 54mins",
//         "plot": "Twenty-five years after the original series of murders in Woodsboro, a new killer emerges, and Sidney Prescott must return to uncover the truth.",
//         "contentRating": "R",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Horror, Mystery, Thriller",
//         "genreList": [
//           {
//             "key": "Horror",
//             "value": "Horror"
//           },
//           {
//             "key": "Mystery",
//             "value": "Mystery"
//           },
//           {
//             "key": "Thriller",
//             "value": "Thriller"
//           }
//         ],
//         "directors": "Matt Bettinelli-Olpin, Tyler Gillett",
//         "directorList": [
//           {
//             "id": "nm2366012",
//             "name": "Matt Bettinelli-Olpin"
//           },
//           {
//             "id": "nm2419470",
//             "name": "Tyler Gillett"
//           }
//         ],
//         "stars": "Neve Campbell, Courteney Cox, David Arquette, Marley Shelton",
//         "starList": [
//           {
//             "id": "nm0000117",
//             "name": "Neve Campbell"
//           },
//           {
//             "id": "nm0001073",
//             "name": "Courteney Cox"
//           },
//           {
//             "id": "nm0000274",
//             "name": "David Arquette"
//           },
//           {
//             "id": "nm0005420",
//             "name": "Marley Shelton"
//           }
//         ]
//       },
//       {
//         "id": "tt2224162",
//         "title": "Sesame Street",
//         "fullTitle": "Sesame Street (2022)",
//         "year": "2022",
//         "releaseState": "January 14",
//         "image": "https://imdb-api.com/images/original/MV5BYmFkN2VhMDUtYjIzYy00MDVkLTllNDQtZDUyN2I3MGRmNjI3XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_Ratio1.7799_AL_.jpg",
//         "runtimeMins": "",
//         "runtimeStr": "",
//         "plot": "Big Bird and his Sesame Street friends are mysteriously expelled from their neighborhood, finding themselves in Manhattan. They team up with a plucky history show host Sally Hawthorne (Anne Hathaway) who's on a quest to save her show and prove that Sesame Street actually exists, with obstacles created by the \"evil\" Mayor, with reasons of his own for keeping Sesame Street hidden from the world.",
//         "contentRating": "",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Adventure, Comedy, Crime, Family, Fantasy, Musical, Mystery",
//         "genreList": [
//           {
//             "key": "Adventure",
//             "value": "Adventure"
//           },
//           {
//             "key": "Comedy",
//             "value": "Comedy"
//           },
//           {
//             "key": "Crime",
//             "value": "Crime"
//           },
//           {
//             "key": "Family",
//             "value": "Family"
//           },
//           {
//             "key": "Fantasy",
//             "value": "Fantasy"
//           },
//           {
//             "key": "Musical",
//             "value": "Musical"
//           },
//           {
//             "key": "Mystery",
//             "value": "Mystery"
//           }
//         ],
//         "directors": "Jonathan Krisel",
//         "directorList": [
//           {
//             "id": "nm1730037",
//             "name": "Jonathan Krisel"
//           }
//         ],
//         "stars": "Anne Hathaway, Bo Burnham, Chance the Rapper",
//         "starList": [
//           {
//             "id": "nm0004266",
//             "name": "Anne Hathaway"
//           },
//           {
//             "id": "nm3102998",
//             "name": "Bo Burnham"
//           },
//           {
//             "id": "nm5692878",
//             "name": "Chance the Rapper"
//           }
//         ]
//       },
//       {
//         "id": "tt13651628",
//         "title": "Belle",
//         "fullTitle": "Belle (2021)",
//         "year": "2021",
//         "releaseState": "January 14",
//         "image": "https://imdb-api.com/images/original/MV5BOGU2Yjc0Y2YtMDU0MS00NTFiLTlkMGMtOTcxOWIzMjhkZmZkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "121",
//         "runtimeStr": "2h 1mins",
//         "plot": "Suzu is a shy high school student living in a rural village. For years, she has only been a shadow of herself. But when she enters \"U\", a massive virtual world, she escapes into her online persona as Belle, a globally-beloved singer.",
//         "contentRating": "PG",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "89",
//         "genres": "Animation, Adventure, Drama, Fantasy, Music, Musical, Sci-Fi",
//         "genreList": [
//           {
//             "key": "Animation",
//             "value": "Animation"
//           },
//           {
//             "key": "Adventure",
//             "value": "Adventure"
//           },
//           {
//             "key": "Drama",
//             "value": "Drama"
//           },
//           {
//             "key": "Fantasy",
//             "value": "Fantasy"
//           },
//           {
//             "key": "Music",
//             "value": "Music"
//           },
//           {
//             "key": "Musical",
//             "value": "Musical"
//           },
//           {
//             "key": "Sci-Fi",
//             "value": "Sci-Fi"
//           }
//         ],
//         "directors": "Mamoru Hosoda",
//         "directorList": [
//           {
//             "id": "nm0396074",
//             "name": "Mamoru Hosoda"
//           }
//         ],
//         "stars": "Kaho Nakamura, Ryô Narita, Shôta Sometani, Tina Tamashiro",
//         "starList": [
//           {
//             "id": "nm12628737",
//             "name": "Kaho Nakamura"
//           },
//           {
//             "id": "nm6954008",
//             "name": "Ryô Narita"
//           },
//           {
//             "id": "nm2202409",
//             "name": "Shôta Sometani"
//           },
//           {
//             "id": "nm6119056",
//             "name": "Tina Tamashiro"
//           }
//         ]
//       },
//       {
//         "id": "tt2180339",
//         "title": "Deep Water",
//         "fullTitle": "Deep Water (2022)",
//         "year": "2022",
//         "releaseState": "January 14",
//         "image": "https://imdb-api.com/images/original/nopicture.jpg",
//         "runtimeMins": "153",
//         "runtimeStr": "2h 33mins",
//         "plot": "A well-to-do husband who allows his wife to have affairs in order to avoid a divorce becomes a prime suspect in the disappearance of her lovers.",
//         "contentRating": "R",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Thriller",
//         "genreList": [
//           {
//             "key": "Thriller",
//             "value": "Thriller"
//           }
//         ],
//         "directors": "Adrian Lyne",
//         "directorList": [
//           {
//             "id": "nm0001490",
//             "name": "Adrian Lyne"
//           }
//         ],
//         "stars": "Ben Affleck, Ana de Armas, Tracy Letts, Rachel Blanchard",
//         "starList": [
//           {
//             "id": "nm0000255",
//             "name": "Ben Affleck"
//           },
//           {
//             "id": "nm1869101",
//             "name": "Ana de Armas"
//           },
//           {
//             "id": "nm0504832",
//             "name": "Tracy Letts"
//           },
//           {
//             "id": "nm0004761",
//             "name": "Rachel Blanchard"
//           }
//         ]
//       },
//       {
//         "id": "tt7985704",
//         "title": "Operation Fortune: Ruse de guerre",
//         "fullTitle": "Operation Fortune: Ruse de guerre (2022)",
//         "year": "2022",
//         "releaseState": "January 21",
//         "image": "https://imdb-api.com/images/original/MV5BZGFmNmRlZmQtMDAyYy00NTJjLTg2ODQtZDI0OWE3M2I2NDcyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "",
//         "runtimeStr": "",
//         "plot": "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
//         "contentRating": "",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Action, Comedy, Thriller",
//         "genreList": [
//           {
//             "key": "Action",
//             "value": "Action"
//           },
//           {
//             "key": "Comedy",
//             "value": "Comedy"
//           },
//           {
//             "key": "Thriller",
//             "value": "Thriller"
//           }
//         ],
//         "directors": "Guy Ritchie",
//         "directorList": [
//           {
//             "id": "nm0005363",
//             "name": "Guy Ritchie"
//           }
//         ],
//         "stars": "Cary Elwes, Jason Statham, Hugh Grant, Aubrey Plaza",
//         "starList": [
//           {
//             "id": "nm0000144",
//             "name": "Cary Elwes"
//           },
//           {
//             "id": "nm0005458",
//             "name": "Jason Statham"
//           },
//           {
//             "id": "nm0000424",
//             "name": "Hugh Grant"
//           },
//           {
//             "id": "nm2201555",
//             "name": "Aubrey Plaza"
//           }
//         ]
//       },
//       {
//         "id": "tt11365186",
//         "title": "Redeeming Love",
//         "fullTitle": "Redeeming Love (2022)",
//         "year": "2022",
//         "releaseState": "January 21",
//         "image": "https://imdb-api.com/images/original/MV5BMTMxMmRmMWUtNGNhZS00MWYxLTkwNzUtM2QwNzI4MGU1ZTI2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "134",
//         "runtimeStr": "2h 14mins",
//         "plot": "Sold into prostitution as a child, Angel knows nothing but betrayal. Can her heart ever be mended? Based upon the novel by Francine Rivers.",
//         "contentRating": "PG-13",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Drama, History, Romance",
//         "genreList": [
//           {
//             "key": "Drama",
//             "value": "Drama"
//           },
//           {
//             "key": "History",
//             "value": "History"
//           },
//           {
//             "key": "Romance",
//             "value": "Romance"
//           }
//         ],
//         "directors": "D.J. Caruso",
//         "directorList": [
//           {
//             "id": "nm0142286",
//             "name": "D.J. Caruso"
//           }
//         ],
//         "stars": "Abigail Cowen, Tom Lewis, Famke Janssen, Logan Marshall-Green",
//         "starList": [
//           {
//             "id": "nm6792464",
//             "name": "Abigail Cowen"
//           },
//           {
//             "id": "nm9348659",
//             "name": "Tom Lewis"
//           },
//           {
//             "id": "nm0000463",
//             "name": "Famke Janssen"
//           },
//           {
//             "id": "nm1334869",
//             "name": "Logan Marshall-Green"
//           }
//         ]
//       },
//       {
//         "id": "tt2328678",
//         "title": "The King's Daughter",
//         "fullTitle": "The King's Daughter (2022)",
//         "year": "2022",
//         "releaseState": "January 21",
//         "image": "https://imdb-api.com/images/original/MV5BMmMyYzA2NTctMmQ0Mi00N2Y3LTljODktZDc5N2M1NWM5NGQ2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "90",
//         "runtimeStr": "1h 30mins",
//         "plot": "King Louis XIV's quest for immortality leads him to capture and steal a mermaid's life force, a move that is further complicated by his illegitimate daughter's discovery of the creature.",
//         "contentRating": "PG",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Action, Adventure, Family, Fantasy, Romance",
//         "genreList": [
//           {
//             "key": "Action",
//             "value": "Action"
//           },
//           {
//             "key": "Adventure",
//             "value": "Adventure"
//           },
//           {
//             "key": "Family",
//             "value": "Family"
//           },
//           {
//             "key": "Fantasy",
//             "value": "Fantasy"
//           },
//           {
//             "key": "Romance",
//             "value": "Romance"
//           }
//         ],
//         "directors": "Sean McNamara",
//         "directorList": [
//           {
//             "id": "nm0573732",
//             "name": "Sean McNamara"
//           }
//         ],
//         "stars": "Pierce Brosnan, William Hurt, Benjamin Walker, Kaya Scodelario",
//         "starList": [
//           {
//             "id": "nm0000112",
//             "name": "Pierce Brosnan"
//           },
//           {
//             "id": "nm0000458",
//             "name": "William Hurt"
//           },
//           {
//             "id": "nm0907548",
//             "name": "Benjamin Walker"
//           },
//           {
//             "id": "nm2546012",
//             "name": "Kaya Scodelario"
//           }
//         ]
//       },
//       {
//         "id": "tt5108870",
//         "title": "Morbius",
//         "fullTitle": "Morbius (2022)",
//         "year": "2022",
//         "releaseState": "January 28",
//         "image": "https://imdb-api.com/images/original/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6699_AL_.jpg",
//         "runtimeMins": "108",
//         "runtimeStr": "1h 48mins",
//         "plot": "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.",
//         "contentRating": "PG-13",
//         "imDbRating": "",
//         "imDbRatingCount": "",
//         "metacriticRating": "",
//         "genres": "Action, Adventure, Drama, Horror, Sci-Fi, Thriller",
//         "genreList": [
//           {
//             "key": "Action",
//             "value": "Action"
//           },
//           {
//             "key": "Adventure",
//             "value": "Adventure"
//           },
//           {
//             "key": "Drama",
//             "value": "Drama"
//           },
//           {
//             "key": "Horror",
//             "value": "Horror"
//           },
//           {
//             "key": "Sci-Fi",
//             "value": "Sci-Fi"
//           },
//           {
//             "key": "Thriller",
//             "value": "Thriller"
//           }
//         ],
//         "directors": "Daniel Espinosa",
//         "directorList": [
//           {
//             "id": "nm1174251",
//             "name": "Daniel Espinosa"
//           }
//         ],
//         "stars": "Michael Keaton, Jared Leto, Adria Arjona, Jared Harris",
//         "starList": [
//           {
//             "id": "nm0000474",
//             "name": "Michael Keaton"
//           },
//           {
//             "id": "nm0001467",
//             "name": "Jared Leto"
//           },
//           {
//             "id": "nm5245722",
//             "name": "Adria Arjona"
//           },
//           {
//             "id": "nm0364813",
//             "name": "Jared Harris"
//           }
//         ]
//       }
//     ],
//     "errorMessage": ""
//   }

const initialState = {
    coming_soon:null,
    favourites: {
        items: [],
        itemsId: [],
    }
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'LOAD_COMING_SOON_SUCCESS':
            newState.coming_soon = action.coming_soon
    }
    switch(action.type){
        case 'ADD_FAVOURITES_SUCCESS':
            newState.favourites.items = [...state.favourites.items, action.item]
            newState.favourites.itemsId = [...state.favourites.itemsId, action.item.id]
    }
    return newState;
};

export default reducer;