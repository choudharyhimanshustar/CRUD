import { useState } from 'react';
import { createItem } from './Api';
import {useNavigate} from 'react-router-dom'
export default function Create() {
    const [formData, setFormData] = useState({ name: "", description: "" });
    const navigate=useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        await createItem(formData);
        setFormData({ name: "",description:"" });
        navigate('/')
    }
    return (
        <form onSubmit={(e) => handleClick(e)} className='form'>
            <input
                value={formData.name}
                onChange={(e) => 
                    { setFormData({ ...formData, name: e.target.value }) }}
            />
            <input
                type="text"
                value={formData.description}
                onChange={(e) => 
                    setFormData({ ...formData, description: e.target.value })}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}