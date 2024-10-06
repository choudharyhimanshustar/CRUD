import { deleteItem, getItems } from './Api'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Get() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchItem = async () => {
            const response = await getItems();
            console.log(response.data);
            setItems(response.data);
        };
        fetchItem();
    }, [])
    const handleClick = async (id) => {
        await deleteItem(id);
        setItems(items.filter(item => item._id !== id))
    }
    function addItem()
    {
        navigate(`/post`);
    }
    return (
        <div>
            {items.map((item) => (
                <li key={item._id}>
                    {item.name}
                    {item.description}
                    <button onClick={() => handleClick(item._id)}>Delete</button>
                </li>

            ))}
            <button onClick={()=>addItem()}>Add Items</button>
        </div>
    )
}