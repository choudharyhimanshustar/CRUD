import { React, useEffect, useState } from "react";
import { updateItem, getItems } from './Api';
import { useParams } from 'react-router-dom';
export default function Update() {
    const { id } = useParams();
    const [formData, setFormData] = useState({name:"",description:""});
    useEffect(() => {
        console.log(id);
        const fetch = async () => {
            const response = await getItems();
            const item = response.data.find(i => i._id === id);
            if (item) setFormData({
                name: item.name,
                description: item.description
            });
        };
        fetch();
    }, [id])
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateItem(id,formData);
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => 
                        setFormData({ ...formData, description: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

