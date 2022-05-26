import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LinearProgress } from "@mui/material";

export default function Characterlist({
  value,
  moviesList,
  loading,
  handleChange,
}) {
  return (
    <div
      style={{
        width: "400px",
        marginTop: "3rem",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <h3
          style={{
            backgroundColor: "#DDE506",
            width: "fit-content",
            marginBottom: "8px",
          }}
          id="demo-simple-select-autowidth-label"
        >
          CHARACTER
        </h3>
        <Select
          sx={{
            fontWeight: "bold",
          }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          fullWidth
          value={value}
          onChange={handleChange}
        >
          {loading ? (
            <LinearProgress />
          ) : (
            moviesList.map((name, index) => {
              return (
                <MenuItem key={index} value={name.name}>
                  {name.name}
                </MenuItem>
              );
            })
          )}
        </Select>
      </FormControl>
    </div>
  );
}
