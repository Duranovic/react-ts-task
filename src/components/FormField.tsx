// React imports
import { ReactElement } from "react";
// Material UI imports
import { TextField } from "@mui/material";
// Custom component imports
import { RadioControl } from "./RadioControl";
import { DatePickerControl } from "./DatePickerControl";
// Types imports
import { FormControlProps } from "../types/propTypes";

/**
 * Renders a form field component based on the specified type.
 *
 * @param {FormControlProps} props - Component props for the form field.
 * @returns {ReactElement} A React element representing the form field component.
 */
export function FormField(props: FormControlProps): ReactElement {
    switch (props.type) {
        case 'date':
            return <DatePickerControl {...props}/>
        case 'boolean':
            return <RadioControl {...props} />
        case 'textarea':
            return <TextField {...props} variant="standard" multiline maxRows={5}/>
        case 'image':
            return <></>
        default:
            return <TextField {...props} variant="standard" />
    }
}