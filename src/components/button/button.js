const sayLabel=(props)=>{
    alert(`A label desse botão é ${props.label}`)
}

const Button =(props)=>{
    return <button onClick= {()=> sayLabel(props)} >{props.label}</button>
}
export default Button