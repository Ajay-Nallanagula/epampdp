//https://react-hook-form.com/get-started/
import { useForm } from "react-hook-form";
import './App.css';
import { calculatePackages, calculateCumulativeTotal, displayPackageList, claculatePackageMax10 } from "./utils";
import { useEffect, useState } from 'react'

const menu = {
    curry: 'Curry',
    dal: 'Dal',
    chapathi: 'Chapathi',
    sambhar: 'Sambhar',
    fry: 'Fry',
    rice: 'Rice',
    pulka: 'Pulka',
    curd: 'Curd'
}

export default function TestForm() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [menuCollation, setMenuCollation] = useState({})
    const [cumulative, setCumulative] = useState({
        curry: {},
        dal: {},
        chapathi: {},
        sambhar: {},
        fry: {},
        rice: {},
        pulka: {},
        curd: {},
    })
    const [aggregatedUserOrder, setAggregatedUserOrder] = useState({})
    const [userName, setUserName] = useState()

    const onSubmit = data => {
        let cumulativeTotals
        Object.keys(data).forEach(item => {
            const isItemPresent = data[item].length > 0
            const isItemNumber = !isNaN(data[item])
            const quantity = parseInt(data[item])

            if (quantity) {
                // const boxSize = calculatePackages(quantity, item)
                const boxSize = claculatePackageMax10(quantity, item)
                cumulativeTotals = calculateCumulativeTotal(cumulative, { [item]: boxSize }, item)
            }

        })
        setAggregatedUserOrder(cumulativeTotals)
        reset()
    }

    const handleBlur = (e) => {
        // const menuItem = e.target.name
        // const quantity = parseInt(e.target.value)
        // if (quantity) {
        //     const boxSize = calculatePackages(quantity, menuItem)
        //     setMenuCollation((prevValues) => ({ ...prevValues, [menuItem]: boxSize }))
        //     const cumulativeTotals = calculateCumulativeTotal(cumulative, { [menuItem]: boxSize }, menuItem)
        //     //  setCumulative((prev) => ({ ...prev, cumulativeTotals }))
        //     //setAggregatedUserOrder((prevValues) => ({ ...prevValues, [userName]: cumulativeTotals }))
        //     setAggregatedUserOrder(cumulativeTotals)

        // }
    }

    const handleBlurUserName = (e) => {
        setUserName(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-parent-name">
                    <div className="flex-child-element"><label name='name'>Name</label></div>
                    <div className="flex-child-element"> <input placeholder="enter name"  {...register("name")} onBlur={handleBlurUserName} /></div>
                </div>

                {Object.keys(menu).map(menuKey => {
                    return (
                        <div className="flex-parent-element" key={menu[menuKey]}>
                            <div className="flex-child-element"><label name={menuKey}>{menu[menuKey]}</label></div>
                            <div className="flex-child-element"><input  {...register(menuKey)} type="number" onBlur={handleBlur} placeholder="enter quantity" /></div>
                            {menuCollation?.[menuKey] && <div className="flex-child-element"><label name={menuKey}>{JSON.stringify(menuCollation[menuKey])}</label></div>}
                        </div>
                    )
                })}

                <input type="submit" />
                <div>
                    {Object.keys(aggregatedUserOrder).map(aggKey => {
                        return (
                            <div>
                                <span style={{ padding: '4px' }}><strong>{aggKey}</strong></span>
                                {[...displayPackageList(aggregatedUserOrder[aggKey])].map(item => {
                                    return (<>
                                        <span style={{ padding: '2px' }}>{item}</span>
                                    </>)
                                })}
                            </div>
                        )
                    })}
                </div>
            </form >


        </>
    );
}



















// <>
// <div><h3><strong>{aggKey}</strong></h3></div>
// {[...displayPackageList(aggregatedUserOrder[aggKey])].map(item => {
//     return (<>
//         <div>{item}</div>
//     </>)
// })}
// </>


{/* <table>
{Object.keys(aggregatedUserOrder).map(aggKey => {
    return (
        <tr>
            <td><div><h3><strong>{aggKey}</strong></h3></div></td>
            {[...displayPackageList(aggregatedUserOrder[aggKey])].map(item => {
                return (<>
                    <td>{item}</td>
                </>)
            })}
        </tr>
    )
})}
</table> */}