import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends IInput {
    name: string; // Add `name` property to the interface
}

const FXdatePicker = ({ label, name }: IProps) => {
    return (
        <Controller
            name={name} // Pass `name` prop to Controller
            render={({ field: { value, ...fields } }) => (
                <DatePicker
                    label={label}
                    className="max-w-[284px]"
                    {...fields} // Spread the rest of the field properties
                />
            )}
        />
    );
};

export default FXdatePicker;
