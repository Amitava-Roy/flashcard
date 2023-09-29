import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    groupId: "group-title",
    groupName: "Planet Healers",
    description:
      "Global warming is the long-term warming of the planet's overall temperature. Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels.",
    cards: [
      {
        title: "Ice Melting in Pole",
        details: `The poles are melting due to rising temperatures caused by human activities. The poles are made up of large blocks of ice that are important for maintaining the environment. However, rising temperatures are causing these blocks of ice to melt and turn into water`,
        image: `https://images.unsplash.com/photo-1461880234904-751a2f54f1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
      },
      {
        title: "Forest Fire",
        details: `
        Forest fires can contribute to global warming by releasing carbon dioxide and other pollutants into the atmosphere. 
         Climate change can increase the risk of wildfires by creating warmer, drier conditions. 
         These conditions can lead to more frequent droughts, which can cause plants to drop leaves that fuel fires. The hotter, drier air can also make it easier for fires to spread`,
        image: `https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80`,
      },
    ],
  },
  {
    groupId: "group-title2",
    groupName: "Travelars Zone",
    description: `Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life.`,
    cards: [
      {
        title: "Europe",
        details: `Passport: You need a passport that is valid for at least 90 days after your intended departure date from the Schengen area.
        Visas: You may need visas for some countries.
        Entry requirements: Entry requirements can change quickly, so it's a good idea to keep an eye on them. Depending on where you're going, you may need to provide a negative COVID test or proof of recovery.
        Travel authorization: Starting in 2024, people from over 60 visa-exempt countries will need a travel authorization to enter most European countries.`,
        image:
          "https://media.istockphoto.com/id/1221887584/photo/camps-bay-view-from-top-of-the-table-mountain.jpg?s=1024x1024&w=is&k=20&c=VL0SihWsvopcqI7IctAjlW1-x2O697ZtcNe_Ev2QMjQ=",
      },
      {
        title: "USA",
        details: "card details 2",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
      },
    ],
  },
  {
    groupId: "group-title3",
    groupName: "Bookworm's Group ",
    description: `Books are referred to as a man’s best friend. They are very beneficial for mankind and have helped it evolve. There is a powerhouse of information and knowledge.Books leave a deep impact on us and are responsible for uplifting our mood.

    `,
    cards: [
      {
        title: "Fiction Books",
        details:
          " This relates back to why we should keep fiction books in school because fiction books allow our imaginations to run wild and give examples of how people “should” interact because some people have social anxiety which could cause mental illness such as agoraphobia. If we keep fiction books i believe that it will help more people get out there and interact with others.",
        image: `https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpY3Rpb24lMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`,
      },
      {
        title: "Science Book",
        details: `Science is a systematic and logical approach to discovering new knowledge and understanding the natural world. It involves observation, experimentation, and the formulation and testing of hypotheses. Science has led to many advancements in medicine, technology, and industry.`,
        image: `https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpY3Rpb24lMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`,
      },
    ],
  },
  {
    groupId: "group-title4",
    groupName: "Gamer's Team",
    description: "Gaming",
    cards: [
      {
        title: "Video Game",
        details: "Latest video game",
        image: `https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
      },
      {
        title: "Mobile Game",
        details: "Lates mobile game",
        image: `https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      },
    ],
  },
  {
    groupId: "group-title5",
    groupName: "Music Lovers",
    description: "Music is the our addiction.",
    cards: [
      {
        title: "Rock Music",
        details: "we rock hard.",
        image: `https://images.unsplash.com/photo-1549646075-f533f4622ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvY2slMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      },
      {
        title: "Hip Hop",
        details: "Hip hop is way of life",
        image: `https://images.unsplash.com/photo-1546528377-65924be33e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      },
    ],
  },
];

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup(state, action) {
      state.push(action.payload);
    },
  },
});

export default groupSlice.reducer;
export const { addGroup } = groupSlice.actions;
