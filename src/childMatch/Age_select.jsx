import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AgeSelect({ onSelect }) {
  const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
    onSelect(event.target.value);
  };

  const numbers = Array.from({ length: 38 }, (_, i) => i + 18);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="age-select-label">Age</InputLabel>
      <Select
        labelId="age-select-label"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {numbers.map((value) => (
          <MenuItem key={value} value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

