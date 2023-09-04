
interface Props{
    theme: 'dark' | 'light'
}
function Light_dark_mode(props:Props) {
  return (
    props.theme === 'light'?<div style={{height:'100px', width:'100px',border:'1px black solid', borderRadius:'5px'}}>Light mode</div>:<div style={{height:'100px', width:'100px', background:'black', color:'white',border:'1px black solid', borderRadius:'5px'}}>dark mode</div>
  )
}

export default Light_dark_mode