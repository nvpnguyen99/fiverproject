export const getInHomePageAction = () =>{
    return {
        type: "IN_HOME_PAGE",
        isHomePage: true
    }
}

export const getOutHomePageAction = () => {
    return {
        type: "OUT_HOME_PAGE",
        isHomePage: false
    }
}