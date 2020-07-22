import React from 'react';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';
import { DateTimePicker } from 'react-widgets';

interface IProps
  extends  //FieldRenderProps<Date, HTMLInputElement>,
    FormFieldProps {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  date = false,
  time = false,
  placeholder,
  meta: { touched, error },
  rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
     <DateTimePicker 
        date ={date}
        time={time}
        placeholder={placeholder}
        onBlur={input.onBlur}
        onKeyDown={(e) => e.preventDefault()}
        value = {input.value || null}
        onChange ={input.onChange} 
        {...rest}  
     />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
