import React from 'react';
import { useState, useEffect } from 'react';
import Song from './Song';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'




const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  const [order, setOrder] = useState('ASC')
  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...songs].sort((a, b) =>
        a[col] > b[col] ? 1 : -1)
      setSongs(sorted)
      setOrder('DSC')
    }
    if (order === 'DSC') {
      const sorted = [...songs].sort((a, b) =>
        a[col] < b[col] ? 1 : -1)
      setSongs(sorted)
      setOrder('ASC')
    }
  }

  useEffect(() => {
    axios.get(`${API}/songs`)
      .then((response) => {setSongs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Songs">
      <section>
        <Table striped border hover>
          <thead>
            <tr>
              <th>Favorite</th>
              <th onClick={() => sorting('name')}>
                {' '}
                <Button variant="success">
                  {' '}
                  <i className="bi bi-arrow-down-up"></i> Name{' '}
                </Button>{' '}
              </th>
              <th onClick={() => sorting('artist')}>
                {' '}
                <Button variant="secondary">
                  <i className="bi bi-arrow-down-up"></i>
                  Artist
                </Button>
              </th>
              <th onClick={() => sorting('album')}>
                <Button variant="info">
                  <i className="bi bi-arrow-down-up"></i>
                  Album
                </Button>
              </th>
              <th onClick={() => sorting('time')}>
                <Button variant="warning">
                  <i className="bi bi-arrow-down-up"></i>
                  Time
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, id) => {
              return <Song key={id} song={song} id={id} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Songs;
