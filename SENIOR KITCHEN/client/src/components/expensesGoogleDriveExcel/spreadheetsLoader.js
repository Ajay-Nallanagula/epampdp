import { loadSpreadSheetById, testApi } from "./spreadheetsLoaderUtils"

const SpreadSheetLoader = () => {

    const handleSpreadSheetLoader = async () => {
        console.log('Hello World')
        const result = await testApi() //loadSpreadSheetById()
        console.log(result)

    }

    return (
        <button onClick={handleSpreadSheetLoader}>Load Spreadsheets</button>
    )
}

export default SpreadSheetLoader