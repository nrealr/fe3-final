export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "GET_LIST":
      return { ...state, docList: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  }
};
