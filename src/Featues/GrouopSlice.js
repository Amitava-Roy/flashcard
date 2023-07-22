import { createSlice } from "@reduxjs/toolkit";
import img1 from "../components/../Images/img1.jpg";
import img2 from "../components/../Images/img2.jpg";
import img3 from "../components/../Images/img3.jpg";
import img4 from "../components/../Images/img4.jpg";

const initialState = [
  {
    groupId: "group-title",
    groupName: "title",
    description: "something",
    cards: [
      {
        title: "cardTitle1",
        details: "card details 1",
        image: img1,
      },
      {
        title: "cardTitle2",
        details: "card details 2",
        image: img2,
      },
    ],
  },
  {
    groupId: "group-title2",
    groupName: "title2",
    description: "something2",
    cards: [
      {
        title: "cardTitle1",
        details: "card details 1",
        image: img3,
      },
      {
        title: "cardTitle2",
        details: "card details 2",
        image: img4,
      },
    ],
  },
  {
    groupId: "group-title",
    groupName: "title",
    description: "something",
    cards: [
      {
        title: "cardTitle1",
        details: "card details 1",
        image: img1,
      },
      {
        title: "cardTitle2",
        details: "card details 2",
        image: img2,
      },
    ],
  },
  {
    groupId: "group-title2",
    groupName: "title2",
    description: "something2",
    cards: [
      {
        title: "cardTitle1",
        details: "card details 1",
        image: img3,
      },
      {
        title: "cardTitle2",
        details: "card details 2",
        image: img4,
      },
    ],
  },
  {
    groupId: "group-title2",
    groupName: "title2",
    description: "something2",
    cards: [
      {
        title: "cardTitle1",
        details: "card details 1",
        image: img3,
      },
      {
        title: "cardTitle2",
        details: "card details 2",
        image: img4,
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
