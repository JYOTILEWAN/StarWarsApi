import { Movie } from "@mui/icons-material";
import { LinearProgress, List, ListItem, ListItemIcon } from "@mui/material";
import React from "react";

export default function Movielist({ movie, loading, name, year }) {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <h3
        style={{
          backgroundColor: "#DDE506",
          width: "fit-content",
        }}
      >
        Movies
      </h3>
      <div>
        <List>
          {loading ? (
            <LinearProgress />
          ) : (
            movie.map((value) => {
              return (
                <ListItem key={value.episode_id}>
                  <ListItemIcon>
                    <Movie />
                  </ListItemIcon>
                  <p>{value.title}</p>
                </ListItem>
              );
            })
          )}
        </List>
      </div>
      <div>
        {name.length === 0 && year.length === 0 ? (
          "Please Select Character"
        ) : (
          <div>
            <p
              style={{
                margin: "10px 0",
                backgroundColor: "#DDE506",
                width: "fit-content",
              }}
            >
              Name / Year of Last Movie:
            </p>
            <p
              style={{
                marginBottom: "10px",
                borderBottom: "2px solid black",
                width: "fit-content",
              }}
            >
              {name} / {year}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}