import React from 'react'

import Album from './Album'

const Artist = props => {
    return (
        <div className="container">
            <div className="text-center">
                <h3>Artist: <span>{props.artist.artist}</span></h3>
                { props.artist.albums.map((album, index) => {
                    return <Album album={album} key={index} setSongs={props.setSongs} />
                }) }
            </div>
        </div>
    )
}

export default Artist;