import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'
import { generatePackageCount } from '../newPackageUtils';
import MenuItemPackageDetail from './menuItemPackageDetail';

const ExcelToJsonReader = (props) => {
    const [data, setData] = useState([])
    const [pacakagedata, setPackageData] = useState(null)
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                //  console.log(json);
                setData(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    useEffect(() => {
        if (data?.length) {
            const finalResult = generatePackageCount(data)
            console.log(finalResult)
            setPackageData(finalResult)
        }
    }, [data])

    if (pacakagedata) {
        const packageDataKeys = Object.keys(pacakagedata)
        if (packageDataKeys?.length) {
            return (
                <div style={{ display: 'flex' }}>
                    {
                        packageDataKeys.map(item => {
                            return (
                                <MenuItemPackageDetail key={item} menuKey={item} menuPackValues={pacakagedata[item]} />
                            )
                        })
                    }
                </div>
            )

        }
    }

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ padding: '10px' }}> <label htmlFor="upload">Upload File</label></div>
                <div style={{ padding: '10px' }}>
                    <input
                        type="file"
                        name="upload"
                        id="upload"
                        onChange={readUploadFile}
                    />
                </div>
            </div>
        </form>
    )

}

export default ExcelToJsonReader