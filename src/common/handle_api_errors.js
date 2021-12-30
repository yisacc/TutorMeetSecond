export const HandleErrors=(error)=>{
    if (
        error?.response?.status === 401 ||
        error?.response?.status === 409 ||
        error?.response?.status === 406
    ) {
        return error?.response?.data?.error
    } else {
        return ['Something went wrong. Please try again later.']
    }
}
