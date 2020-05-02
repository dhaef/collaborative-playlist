import React, { Component } from 'react'

import Artist from './Artist'

export class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [
                {
                    id: 1,
                    artist: 'Mt. Joy',
                    albums: [
                        {
                            title: 'Mt. Joy',
                            songs: [
                                'Astrovan',
                                'Julia',
                                'Silver Lining',
                                'Dirty Love'
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    artist: 'Oasis',
                    albums: [
                        {
                            title: 'Definitely Maybe',
                            songs: [
                                'Live Forever',
                                'Supersonic',
                                'Slide Away',
                                'Sad Song'
                            ]
                        },
                        {
                            title: "(What's The Story) Morning Glory?",
                            songs: [
                                'Wonderwall',
                                "Don't Look Back In Anger",
                                'Some Might Say',
                                'Talk Tongiht'
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    artist: 'Drake',
                    albums: [
                        {
                            title: "If You're Reading This It's Too Late",
                            songs: [
                                'Legend',
                                '6 God',
                                'Preach',
                                'Jungle'
                            ]
                        }
                    ]
                },
            ],
            currentArtists: []
        };
    }

    showArtists(value) {
        if (value === '') {
            this.setState({ currentArtists: [] })
        } else {
            this.setState({
                currentArtists: this.state.artists.filter(artist => {
                    if (artist.artist.includes(value)) {
                        return artist
                    }
                })
            })
        }
    }

    render() {
        return (
            <div className="col-5">
                <h1 className="text-center">Artists</h1>
                <input className="" onChange={(e) => this.showArtists(e.target.value)} />
                <div>
                    {this.state.currentArtists.map(artist => {
                        return <Artist key={artist.id} artist={artist} setSongs={this.props.setSongs}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Artists
