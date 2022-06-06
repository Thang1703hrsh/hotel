import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


export default function Select_(props) {

    const { name, label, value, onChange } = props;


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Country/Region</InputLabel>
        <Select
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        >
          <MenuItem value = {0}>Foreign</MenuItem>
          <MenuItem value = {1} >Domestic</MenuItem>
        </Select>
      </FormControl>
    )
}