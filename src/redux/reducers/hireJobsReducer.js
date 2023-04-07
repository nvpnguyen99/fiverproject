const initialState = {
    jobHiredList: []
}

export const hireJobsReducer = (state = initialState, action) => {
    switch (action.type) {


        case "GET_HIRED_LIST":
            state.jobHiredList = [...action.hiredJobsList];
            console.log(state.jobHiredList);
            return { ...state }

        default:
            return state
    }
}
