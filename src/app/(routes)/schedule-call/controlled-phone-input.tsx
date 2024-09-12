import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { UseControllerProps, useController } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { normalizePhonerNumberInput } from '@/app/utils/phone-input-formatter';
import { schema } from './schedule-call-schema';
import { useState } from 'react';
import { z } from 'zod';

type ServerErrorType = {
  status: number;
  message: string;
  issues: { message: string; path: (string | number)[] }[];
} | null;

interface ControlledPhoneInputProps extends UseControllerProps {
  serverErrors?: ServerErrorType;
}

export const ControlledPhoneInput = (props: ControlledPhoneInputProps) => {
  const { field } = useController(props);
  const [phone, setPhone] = useState('');

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel
            className={
              props.serverErrors
                ? 'text-base text-background'
                : 'text-base text-background'
            }
          >
            Phone Number{` `}
            <span className='text-xs'>(Optional)</span>
          </FormLabel>
          <FormControl>
            <Input
              name={field.name}
              value={phone}
              inputMode='numeric'
              onChange={(event) => {
                field.onChange(event.target.value);
                setPhone((prevState) =>
                  normalizePhonerNumberInput(event.target.value, prevState)
                );
              }}
              type='text'
              className={
                props.serverErrors
                  ? 'block w-full border-0 px-3.5 py-2 text-base shadow-sm ring-2 ring-inset ring-background sm:text-sm sm:leading-6'
                  : 'block w-full border-0 px-3.5 py-2 text-base text-background shadow-sm ring-1 ring-background focus:bg-background focus:text-foreground sm:text-sm sm:leading-6'
              }
              autoComplete='tel'
              placeholder='(555) 555-5555'
            />
          </FormControl>
          <FormMessage className='text-base font-semibold text-primary' />
          {props.serverErrors && (
            <p className='mt-2 text-sm text-background'>
              {props.serverErrors.message}
            </p>
          )}
        </FormItem>
      )}
    />
  );
};
