import {React} from 'react'
import ReactDom from 'react-dom'
const Modal = () => {
    
    return (
        ReactDom.createPortal(<h1>Modal</h1>,document.getElementById("modal-root"))
    )
}

export default Modal
