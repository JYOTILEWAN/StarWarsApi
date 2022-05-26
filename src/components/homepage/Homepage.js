import React from "react";
import Characterlist from "../characterlist/Characterlist";
import Movielist from "../movielist/Movielist";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import { store } from "../../redux/storeConfig/store";
import { fetchCharacterList } from "../../redux/reducers/api";

export default function Homepage() {
  useEffect(() => {
    store.dispatch(fetchCharacterList);
  }, []);

  const characterList = useSelector((state) => state.apiReducer);

  const [character, setCharacter] = useState(null);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState([]);
  const [year, setYear] = useState([]);

  const handleChange = (event) => {
    setCharacter(event.target.value);
    setLoading(true);
  };

  const fetchmoviesName = () => {
    let film = [];
    let item = [];

    characterList.map((x) => {
      if (x.name === character) film = x.films;
    });

    setTimeout(() => {
      film.map((x) => {
        var config = {
          method: "get",
          url: x,
          headers: {},
        };
        axios(config)
          .then(function (response) {
            if (response.status === 200) {
              item.push(response.data);
              setMovie([...movie, ...item]);
            }
          })
          .catch(function (error) {});
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (movie.length === 0) {
      fetchmoviesName();
    } else if (movie.length) {
      setName(movie[movie.length - 1].title);
      setYear(movie[movie.length - 1].release_date);
    }
  }, [movie]);

  useEffect(() => {
    if (character) {
      setMovie([]);
    }
  }, [character]);

  return (
    <div className="homepage__wrapper">
      <div className="card">
        <div className="homepage__title-wrapper">
          <h1
            style={{
              marginBottom: "10px",
              borderBottom: "6px solid #DDE506",
            }}
            className="homepage__title"
          >
            Star Wars - Character Guide
          </h1>
        </div>
        <div className="flex">
          <Characterlist
            value={character}
            moviesList={characterList}
            loading={loading}
            handleChange={handleChange}
          />
          <Movielist movie={movie} loading={loading} name={name} year={year} />
        </div>
      </div>
    </div>
  );
}