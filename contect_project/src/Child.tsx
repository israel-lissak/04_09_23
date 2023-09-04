import { useContext } from "react"
import { textContext } from "./App"

function Child() {

    const context = useContext(textContext);    
    const {state} = context
    const {setState} = context

  return (
    <>
        <div>{state}</div>
         
    </>
  )
}

export default Child