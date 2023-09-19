import { TextField } from "@mui/material";
import { RadioControl } from "./RadioControl";
import { DatePickerControl } from "./DatePickerControl";

export function FormField(props: any) { //{ type, name, label, value, onChange }
    switch (props.type) {
        case 'text' || 'email' || 'password' || 'number':
            return <TextField variant="standard" {...props} />
        case 'date':
            return <DatePickerControl {...props}/>
        case 'boolean':
            return <RadioControl {...props} />
        case 'textarea':
            return <TextField  multiline maxRows={5} {...props}/>
        default:
            break;
    }
}