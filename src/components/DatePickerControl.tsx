// React imports
import { ReactElement } from "react";
// Material UI imports
import { DatePicker } from "@mui/x-date-pickers";
// Third-party imports
import dayjs from "dayjs";
// Types imports
import { FormControlProps } from "../types/propTypes";

/**
 * Renders a DatePicker control for selecting a date.
 *
 * @param {FormControlProps} props - Component props for the DatePicker control.
 * @returns {ReactElement} A React element representing the DatePicker control.
 */
export function DatePickerControl({ label, name, value, onChange }: FormControlProps): ReactElement {
    return <DatePicker label={label} value={dayjs(value)} onChange={(newValue: any) => onChange({
        target: {
            name: name,
            value: newValue.toString(),
        }
    })} />
}