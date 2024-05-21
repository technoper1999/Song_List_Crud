import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Text } from '../styles/text';
import Marquee from '../styles/textmarquee_effect';
import { Button, StyledButtons } from '../styles/Button';

const SongEdit = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/song/" + id).then((res) => {
                return res.json();
            }).then((resp) => {
                setSongId(resp.songid);
                setSongName(resp.songname);
                setSongArtist(resp.songartist);
                setSongDescription(resp.songdescription);
                setActive(resp.isactive);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    const [songid, setSongId] = useState("");
    const [songname, setSongName] = useState("");
    const [songartist, setSongArtist] = useState("");
    const [songdescription, setSongDescription] = useState("");
    const [active, setActive] = useState(true);
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const songdata = { songid, songname, songartist, songdescription, active };

        fetch("http://localhost:8000/song/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(songdata),
        }).then((res) => {
                alert("Saved successfully.");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (
        <div style={{  width:'100vw',height: '81vh' ,marginTop:'50px'}}>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div >
                                <Text><Marquee text='Song Edit'></Marquee></Text>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group" style={{ textAlign: "left" }}>
                                            <label>ID</label>
                                            <input value={songid} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                                        <div className="form-group">
                                            <label>Song Name</label>
                                            <input
                                                required
                                                value={songname}
                                                onMouseDown={(e) => setValidation(true)}
                                                onChange={(e) => setSongName(e.target.value)}
                                                className="form-control"
                                            ></input>
                                            {songname.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                                        <div className="form-group">
                                            <label>Song Artist</label>
                                            <input
                                                value={songartist}
                                                onChange={(e) => setSongArtist(e.target.value)}
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "left" }}>
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
                                        <div className="form-check" style={{ textAlign: "left" }}>
                                            <input
                                                checked={active}
                                                onChange={(e) => setActive(e.target.checked)}
                                                type="checkbox"
                                                className="form-check-input"
                                            ></input>
                                            <label className="form-check-label">Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                                    <Button variant="add">
                                            Save
                                        </Button>
                                        <Button variant="add">
                                        <Link to="/" style={{textDecorationLine:'none',color:'white'}}>
                                            Cancel
                                        </Link></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SongEdit;