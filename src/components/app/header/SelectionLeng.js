import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {IconButton} from "@mui/material";
import {
    IconFlagES,
    IconFlagUS,
    IconFlagTR
} from 'material-ui-flags';

export default function SelectionLength({setLocale, locale}) {


    const handleChange = (event) => {
        setLocale(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 30 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locale}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'es-Es'}>
                        <IconButton>
                            <IconFlagES/>
                        </IconButton>
                    </MenuItem>
                    <MenuItem value={'en-US'}>
                        <IconButton>
                            <IconFlagUS/>
                        </IconButton>
                    </MenuItem>
                    <MenuItem value={'tr-TR'}>
                        <IconButton>
                            <IconFlagTR/>
                        </IconButton>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );

}
