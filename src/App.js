import React, {useState, useEffect} from "react";
import './App.css';
import List from "./components/List";
import Details from "./components/Details";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {
    const [list, setList] = useState([]);
    const [details, setDetails] = useState({});

    const update = async () => {
        const list = await fetch(url, {method: 'GET'}).then(response => {
            return response.json();
        });
        setList(() => {
            return list;
        })
    }

    useEffect(update, []);

    const onClickListItem = (data) => {
        setDetails(data)
    }

    if (!list.length) {
        return 'Loading...'
    }

    return (
        <>
            <div className={"main"}>
                <List list={list} onClickListItem={onClickListItem}/>
            </div>
            <Details info={details}/>
        </>
    );
}

export default App;
