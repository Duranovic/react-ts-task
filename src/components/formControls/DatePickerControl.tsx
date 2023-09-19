import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export function DatePickerControl({ label, name, value, onChange }: any) {
    return <DatePicker label={label} value={dayjs(value)} onChange={(newValue: any) => onChange({
        target: {
            name: name,
            value: newValue.toString(),
        }
    })} />
}