import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Male } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Male",
  "Female",
];

export default function SingleSelectChip({ onSelect }) {
  const theme = useTheme();
  const [selectedName, setSelectedName] = React.useState("");

  const handleChange = (event) => {
    setSelectedName(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-single-chip-label">I'm looking for a</InputLabel>
        <Select
          labelId="demo-single-chip-label"
          id="demo-single-chip"
          value={selectedName}
          onChange={handleChange}
          input={<OutlinedInput id="select-single-chip" label="Select Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        {/* {selectedName && (
          <Box sx={{ mt: 2 }}>
            <Chip label={selectedName} />
          </Box>
        )} */}
      </FormControl>
    </div>
  );
}
