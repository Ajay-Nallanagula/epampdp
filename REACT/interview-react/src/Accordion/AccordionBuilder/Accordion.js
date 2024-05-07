import React, { useState, useContext } from "react"
import { Title, Header, ItemContent, Item } from "./Accordion.styles"
import data from './data'

const ThemeContext = React.createContext()

export default function Accordion() {
    return (
        <Accordion.Title>
            Accordion Title
            {
                data.map(item => {
                    return (
                        <Accordion.Item key={item.id}>
                            <Accordion.ItemHeader>
                                {item.header}
                            </Accordion.ItemHeader>
                            <Accordion.ItemContent>
                                {item.body}
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    )
                })
            }

        </Accordion.Title>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}



Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [show, setShow] = useState(false)
    const toggleShow = (show) => setShow(!show)
    return (
        <ThemeContext.Provider value={{ show, toggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ThemeContext.Provider >
    )
}

Accordion.ItemHeader = function AccordionHeader({ children, ...restProps }) {
    const context = useContext(ThemeContext)
    const btnClick = () => {
        context.toggleShow(context.show)
    }
    return (
        <>
            <Header {...restProps} onClick={() => btnClick()}>{children}</Header>
        </>
    )
}

Accordion.ItemContent = function AccordionItemContent({ children, ...restProps }) {
    const context = useContext(ThemeContext)
    if (context.show) {
        return (<ItemContent {...restProps}>{children}</ItemContent>)
    }
    return null
}