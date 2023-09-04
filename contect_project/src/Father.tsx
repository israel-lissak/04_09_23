import Child from "./Child"
import { useContext, useRef } from "react"
import { textContext } from "./App"


function Father() {

    const context = useContext(textContext);    
    const {state} = context
    const {setState} = context
    const myref = useRef<HTMLInputElement>(null)

    function render() {
        setState(myref.current?.value)
    }

  return (
    <>
        <Child/>

        <input ref={myref} type="text" placeholder="enter text"/>
        <button onClick={render}>render text</button>

    </>        

  )
}

export default Father