


export const testApi = async () => {
    const pendingResult = await fetch('http://localhost:3001/api/googleSheetLoader/')
    const result = await pendingResult.json()
    return result

}