import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/menu.json') 
            .then(res => res.json())
            .then(data => {setMenu(data);
                setLoading(false);
            })
            .catch(err => console.error('Menu Fetch Error:', err));
    }, []);

    return [menu, loading]

}

export default useMenu;