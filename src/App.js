import React, {useState, useEffect} from "react";
import './App.css';
import List from "./components/List";
import Details from "./components/Details";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {
    const [list, setList] = useState([]);
    const [details, setDetails] = useState({});
    const [status, setStatus] = useState({
        loading: false,
        error: undefined
    })

    const update = async () => {
        setStatus({loading:true});
        try {
            const list = await fetch(url, {method: 'GET'}).then(response => {
                setStatus({loading: false});
                return response.json();
            });
            setList(()=>{return  list});

        } catch (error) {
            setStatus({loading: false, error});
        }
    }

    useEffect(update, []);

    const onClickListItem = (data) => {
        setDetails(data)
    }

    if (status.loading) {
        return 'Loading...'
    }
    if (status.error) {
        console.log('error', status.error);
        setStatus({error:undefined})
        return null;
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
