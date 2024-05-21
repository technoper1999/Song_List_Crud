import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Text } from '../styles/text';
import {Button} from '../styles/Button';

const SongDetail = () => {
    const { id } = useParams();

    const [songdata, setSongData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/song/" + id)
            .then((res) =>  {
                return res.json();})
            .then((resp) => {
                setSongData(resp);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="container" style={{  width:'100vw',height: '81vh' ,marginTop:'50px'}}>
            <div className="card row" style={{ textAlign: "left", width:'70%', marginLeft:'180px'}}>
                <div className="card-title">
                    <Text>Song Details</Text>
                </div>
                <div className="card-body"></div>

                {songdata && (
                    <div>
                        <h2>
                            The name of the song is: <b><Text>{songdata.songname}</Text></b> ({songdata.id})
                        </h2>
                        <h3>Song details</h3>
                        <h5>The Song Artist is: <Text>{songdata.songartist}</Text></h5>
                        <h5 style={{marginBottom:'20px'}}>The Song Description: <Text>{songdata.songdescription}</Text></h5>
                        <Button variant="add">
                        <Link to="/" style={{textDecorationLine:'none',color:'white'}}>
                            Back to Listing
                        </Link></Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SongDetail;