import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export function RadioControl({ label, name, value, onChange }: any) {
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