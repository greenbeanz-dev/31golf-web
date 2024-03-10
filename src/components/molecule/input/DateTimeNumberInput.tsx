import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { Calendar } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { BsCalendar4Event } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

interface DateTimeNumberInputProps {
  label?: string;
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
  readOnly?: boolean;
}

const DateTimeNumberInput = ({
  label,
  value,
  onChange,
  readOnly,
}: DateTimeNumberInputProps) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input
        ref={inputRef}
        key={"input" + value?.toString()}
        label={label}
        readOnly={readOnly}
        classNames={{
          label: "min-w-[5rem]",
          input: ["!ring-transparent"],
          mainWrapper: ["w-full"],
        }}
        value={value ? dayjs(value).format("YYYY-MM-DD") : undefined}
        isInvalid={isInvalid}
        placeholder="YYYY-MM-DD"
        labelPlacement="outside-left"
        variant="bordered"
        endContent={
          <>
            <div className="flex items-center">
              <div className="cursor-pointer">
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <Button isIconOnly size="sm" variant="light">
                      <BsCalendar4Event size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      locale={locales["ko"]}
                      onChange={(item) => {
                        onChange(item);
                      }}
                      date={value}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {!readOnly && (
                <div className="cursor-pointer">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (inputRef.current) {
                        inputRef.current.value = "";
                      }
                      onChange(undefined);
                      setIsInvalid(false);
                    }}
                  >
                    <IoMdCloseCircle size={20} />
                  </Button>
                </div>
              )}
            </div>
          </>
        }
        onValueChange={(e) => {
          const pureDate = e.replaceAll("-", "").replaceAll(".", "");

          if (isValidDateFormat(pureDate)) {
            const startDate = dayjs(pureDate).set("hour", 0).set("minute", 0);
            onChange(startDate.toDate());
            setIsInvalid(false);
          } else {
            setIsInvalid(true);
            onChange(undefined);
          }
        }}
      />
    </>
  );
};

export default DateTimeNumberInput;

function isValidDateFormat(input) {
  // Check if the input is exactly 8 digits
  if (/^\d{8}$/.test(input)) {
    // Extract year, month, and day from the input
    const year = input.substring(0, 4);
    const month = input.substring(4, 6);
    const day = input.substring(6, 8);

    // Create a Date object using the extracted components
    const date = new Date(`${year}-${month}-${day}`);

    // Check if the Date object is valid and the components match the original input
    return (
      date instanceof Date &&
      !isNaN(date.getTime()) &&
      date.getFullYear().toString() === year &&
      (date.getMonth() + 1).toString().padStart(2, "0") === month &&
      date.getDate().toString().padStart(2, "0") === day
    );
  }

  return false;
}
