import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Text2 } from "../styles/text";
import Marquee from '../styles/textmarquee_effect';
import {Button} from '../styles/Button';


const SongCreate = () => {
    const [songid, setSongId] = useState();
    const [songname, setSongName] = useState("");
    const [songartist, setSongArtist] = useState("");
    const [songdescription, setSongDescription] = useState("");
    const [active, setActive] = useState(true);
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const songdata = { songname, songartist, songdescription, active };
    
        fetch("http://localhost:8000/song", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(songdata),
        })
            .then((res) => {
                alert("Saved successfully.");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    
setSongId((id) => id + 1); 
        setSongName("");
        setSongArtist("");
        setSongDescription("");
        setActive(true);
    }

    return (
        <div style={{  width:'97vw',height: '85vh' ,marginTop:'50px'}}>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <Text2><Marquee text='Song Create'/></Text2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Song ID</label>
                                            <input
                                                value={songid}
                                                disabled="disabled"
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Song Name</label>
                                            <input
                                                required
                                                value={songname}
                                                onMouseDown={(e) => setValidation(true)}
                                                onChange={(e) => setSongName(e.target.value)}
                                                className="form-control"
                                            ></input>
                                            {songname.length === 0 &&  validation && (
                                                <span className="text-danger">Enter the Song Name</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Song Artist</label>
                                            <input
                                                value={songartist}
                                                onChange={(e) => setSongArtist(e.target.value)}
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Song Description</label>
                                            <input
                                                value={songdescription}
                                                onChange={(e) => setSongDescription(e.target.value)}
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input
                                                checked={active}
                                                onChange={(e) => setActive(e.target.checked)}
                                                type="checkbox"
                                                className="form-check-input"
                                            ></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <Button variant="add">
                                                Save
                                            </Button>
                                            <Button type="submit" variant="add">
                                            <Link to="/" style={{textDecorationLine:'none',color:'white'}}>
                                                Back
                                            </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SongCreate;