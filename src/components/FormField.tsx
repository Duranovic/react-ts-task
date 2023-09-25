// React imports
import { ReactElement } from "react";
// Material UI imports
import { TextField } from "@mui/material";
// Custom component imports
import { RadioControl } from "./RadioControl";
import { DatePickerControl } from "./DatePickerControl";
// Types imports
import { FormControlProps } from "../types/propTypes";
import { TypeEnum } from "../enums/type";
import { getType } from "../utils/typeHelpers";

/**
 * Renders a form field component based on the specified type.
 *
 * @param {FormControlProps} props - Component props for the form field.
 * @returns {ReactElement} A React element representing the form field component.
 */
export function FormField(props: FormControlProps): ReactElement {
    let type: TypeEnum = getType(props.value);

    switch (type) {
        case TypeEnum.DATE:
            return <DatePickerControl {...props} />
        case TypeEnum.BOOLEAN:
            return <RadioControl {...props} />
        case TypeEnum.EMAIL:
            return <TextField {...props} variant="standard" type="email" />
        case TypeEnum.NUMBER:
            return <TextField {...props} variant="standard" type="number" />
        case TypeEnum.LONG_TEXT:
            return <TextField {...props} variant="standard" multiline maxRows={5} />
        case TypeEnum.TEXT:
            return <TextField {...props} variant="standard" type="text" />
        default:
            return <></>
    }
}