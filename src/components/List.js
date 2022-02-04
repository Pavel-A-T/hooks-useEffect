import React, {useState, useEffect} from 'react';
import '../App.css';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function List({list, onClickListItem}) {
    const [id, setId] = useState(null);

    const update = async () => {
        if (id === null) return;
        const data = await fetch(`${url}${id}.json`, {method: 'GET'}).then(response => {
            return response.json();
        });
        onClickListItem(data);
    }

    useEffect(update, [id]);

    function onClick(id) {
        setId(()=>{return id});
    }

    return (
        <>
        {list.map((element) => {
                return <input key={element.key} className={"list"} type={"button"}
                              onClick={() => onClick(element.id)} value={element.name}/>
            })
        }
        </>
    );
}

export default List;
