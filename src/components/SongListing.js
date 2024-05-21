import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, StyledButtons } from '../styles/Button';
import Marquee from '../styles/textmarquee_effect';
import { Text } from '../styles/text';

const SongListing = () => {
  const navigate = useNavigate();
  const [songdata, setSongData] = useState(null);
  const loadDetail = (songid) => {
    navigate("/song/detail/" + songid);
  };

  const loadEdit = (songid) => {
    navigate("/song/edit/" + songid);
  };

  const deleteFunction = (songid) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:8000/song/" + songid, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch('http://localhost:8000/song')
      .then((res) => res.json())
      .then((resp) => {
        setSongData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{  width: "97%", height: "90%", margin:"11px"}}>
    <div className="container" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="card" >
        <div className="card-title">
          <h2 style={{color:'darkblue'}}><Text><Marquee text="Listing of Songs" /></Text></h2>
        </div>
        <div className="card-body">
          <div className="divbtn" style={{height:'50x'}}>
          <Button variant="add">
            <Link to="/song/create" style={{textDecorationLine:'none',color:'white'}}>
              Add New (+)
            </Link>
          </Button>
          </div>
          <table
            style={{
              width: '100%',
              marginBottom: '1rem',
              backgroundColor: 'lightblue',
              animation: 'fade-in 1s ease-in-out',
            }}
          >
            <thead style={{ color: 'white', backgroundColor: '#343a40' }}>
              <tr>
                <th style={{ border: '1px solid darkblue' }}>Song ID</th>
                <th style={{ border: '1px solid darkblue' }}>Song Name</th>
                <th style={{ border: '1px solid darkblue' }}>Song Artist</th>
                <th style={{ border: '1px solid darkblue' }}>Song Description</th>
                <th style={{ border: '1px solid darkblue' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {songdata &&
                songdata.map((item) => (
                  <tr key={item.songid} style={{ border: '1px solid black' }}>
                    <td style={{ border: '1px solid darkblue' }}>{item.id}</td>
                    <td style={{ border: '1px solid darkblue' }}>{item.songname}</td>
                    <td style={{ border: '1px solid darkblue' }}>{item.songartist}</td>
                    <td style={{ border: '1px solid darkblue' }}>{item.songdescription}</td>
                    <td style={{ border: '0px solid darkblue', display: 'flex', gap: '1.9rem'}}>
                     <StyledButtons variant="success" onClick={() => loadEdit(item.id)} >
                        Edit</StyledButtons>
                      <StyledButtons variant="danger" onClick={() => deleteFunction(item.id)}>
                        Delete</StyledButtons>
                      <StyledButtons variant="primary" onClick={() => loadDetail(item.id)}>
                        Details
                     </StyledButtons>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SongListing;