import axios from "axios";

const initialValues = [];

export const apiReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "characters/list":
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export async function fetchCharacterList(dispatch, getState) {
  const response = await axios.get("https://swapi.dev/api/people/");
  dispatch({
    type: "characters/list",
    payload: response.data.results.map((data) => ({
      ...data,
      name: `${data.name}`,
    })),
  });
}