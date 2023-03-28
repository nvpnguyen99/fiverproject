const initialState = {
    isJobSearch: false,
    jobList: [],
    jobDetail: [],
}

export const jobListReducer = (state = initialState, action) => {
    switch (action.type) {


        case "GET_JOB_LIST_BY_NAME":
            state.jobList = [...action.jobList];
            console.log(state.jobList)
            return { ...state }

        case "GET_JOB_LIST_BY_TYPE":
            state.jobList = [...action.jobList];
            console.log("BY_TYPE", state.jobList)
            return { ...state }

        case "GET_JOB_DETAIL":
            state.jobDetail = [...action.jobDetail];
            console.log("JobDetail", state.jobDetail)
            return { ...state }
        default:
            return state
    }
}
