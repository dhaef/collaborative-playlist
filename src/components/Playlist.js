import React, { Component } from 'react'

export class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="col-6">
                <h1 className="text-center">My Playlist</h1>
                <div>
                    {/* {console.log(this.props.songs)} */}
                    { this.props.songs.map((song, index) => <p key={index}>{song}</p>) }
                </div>
            </div>
        )
    }
}

export default Playlist
