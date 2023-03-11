const initialState = {
    isHomePage: false
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {

  case "IN_HOME_PAGE":
    state.isHomePage = action.isHomePage;
    console.log(state)
    return { ...state}

    case "OUT_HOME_PAGE":
        state.isHomePage = action.isHomePage;
        return { ...state}

  default:
    return state
  }
}
