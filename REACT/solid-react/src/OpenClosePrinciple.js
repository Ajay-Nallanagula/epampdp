const Input = ({ label, style }) => {
    return (
        <input type="text" style={style || {}} label={label}></input>
    )
}

const FancyInput = () => {
    return (
        <Input label="Fancy Input" style={{ border: "10px solid black" }} />
    )
}

const YellowInput = () => {
    return (
        <Input label="Fancy Input" style={{ background: 'yellow' }} />
    )
}

export {FancyInput, YellowInput}