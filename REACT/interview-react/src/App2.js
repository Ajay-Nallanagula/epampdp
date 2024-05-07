import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"

const App = () =>{
    const [text,setText] = useState()

    const handleText = (e) =>{
        const val =e.target.value
        setText(val)
    }

    return(
        <>
        <ComponentA onChange={handleText}/>
        <ComponentB labelText={text}/>
        </>
    )

}