import {React} from 'react'
import useInput from './useInput';

const UserForm = () => {
    
    const [firstName,bindFirstName,resetFirstName] = useInput("")
    const [lastName,bindLastName,resetLastName] = useInput("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...bindFirstName} placeholder='firstName'/>
                <input {...bindLastName} placeholder='lastName'/>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
