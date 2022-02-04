import React from 'react';

function Details({info}) {

    if (!info.id) return (<></>);

    return (
        <div key={info.id} className={"details"}>
            <img src={info.avatar} alt={"картинка"} />
            <div className={"list-details"}>{info.name}</div>
            <div className={"list-details"}>City: {info?.details?.city}</div>
            <div className={"list-details"}>Company: {info?.details?.company}</div>
            <div className={"list-details"}>Position: {info?.details?.position}</div>
        </div>
    )
}

export default Details;
