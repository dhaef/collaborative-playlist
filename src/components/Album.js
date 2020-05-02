import React, { Fragment, useState } from 'react'

import Song from './Song'

const Album = props => {

    const [active, setActive] = useState(false);
    
    const showSongs = (e) => {
        setActive(!active);
        props.setSongs(props.album.songs);
        e.target.style.backgroundColor = 'lightgrey';
    };

    return (
        <Fragment>
            <p className="cursor" onClick={(e) => showSongs(e)}>Album: {props.album.title}</p>
            { active && <ol>
                { props.album.songs.map((song, index) => {
                    return <Song song={song} key={index} />
                }) }
            </ol> }
        </Fragment>
    )
}

export default Album
