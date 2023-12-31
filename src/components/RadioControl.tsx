// React imports
import { ReactElement } from "react";
// Material UI imports
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
// Types imports
import { FormControlProps } from "../types/propTypes";

/**
 * Renders a radio button control for selecting a boolean value (Yes or No).
 *
 * @param {FormControlProps} props - Component props for the radio control.
 * @returns {ReactElement} A React element representing the radio control.
 */
export function RadioControl({ label, name, value, onChange }: FormControlProps): ReactElement {
    return (
        <FormControl>
            <FormLabel id="radio-buttons-group">{label}</FormLabel>
            <RadioGroup
                style={{ display: 'flex', flexDirection: 'row' }}
                aria-labelledby="radio-buttons-group"
                name={name}
                value={value}
                onChange={onChange}
            >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
    );
}