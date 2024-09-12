import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from '@headlessui/react';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { schema } from './schedule-call-schema';
import { z } from 'zod';

interface TypeOfPractice {
  id: number;
  name: string;
}

type PracticeArea =
  | 'Personal Injury'
  | 'Criminal Defense'
  | 'Family Law'
  | 'Bankruptcy Law'
  | 'Employment Law'
  | 'Estate & Probate'
  | 'Immigration'
  | 'Intellectual Property'
  | 'Full Service'
  | 'Other'
  | 'Not a Law Firm';

const typeOfPractice: TypeOfPractice[] = [
  { id: 1, name: 'Personal Injury' },
  { id: 2, name: 'Criminal Defense' },
  { id: 3, name: 'Family Law' },
  { id: 4, name: 'Bankruptcy Law' },
  { id: 5, name: 'Employment Law' },
  { id: 6, name: 'Estate & Probate' },
  { id: 7, name: 'Immigration' },
  { id: 8, name: 'Intellectual Property' },
  { id: 9, name: 'Full Service' },
  { id: 10, name: 'Other' },
  { id: 11, name: 'Not a Law Firm' },
];

export function SelectIndustry({
  form,
  errors,
  state,
}: {
  form: UseFormReturn;
  errors: FieldErrors;
  state: {
    status: number;
    message: string;
    issues: {
      message: string;
      path: (string | number)[];
    }[];
  } | null;
}) {
  const [query, setQuery] = useState('');
  const [selectedpractice, setSelectedpractice] = useState<{
    id: number;
    name: PracticeArea;
  } | null>(null);

  const filteredPractice =
    query === ''
      ? typeOfPractice
      : typeOfPractice.filter((practice) => {
          return practice.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    if (selectedpractice && Object.entries(selectedpractice).length > 0) {
      form.setValue('areaOfPractice', selectedpractice.name);
      form.trigger('areaOfPractice');
    }
  }, [selectedpractice, form]);

  return (
    <Combobox
      as='div'
      value={selectedpractice}
      onChange={(practice) => {
        setQuery('');
        setSelectedpractice(practice);
      }}
    >
      <input
        id='areaOfPractice'
        type='hidden'
        {...form.register('areaOfPractice', {
          required: true,
          value: selectedpractice?.name as PracticeArea,
        })}
      />
      <Label
        className={
          errors?.areaOfPractice ||
          state?.issues
            .filter((issue) => issue.path[0] === 'lastName')
            .map((issue) => issue.message)[0]
            ? 'block text-base font-medium leading-6 text-background'
            : 'block text-base font-medium leading-6 text-background'
        }
      >
        Wha&rsquo;s your main practice area?
        <span className='-mr-0.5 ml-1 font-medium text-background'>*</span>
      </Label>
      <div className='relative mt-2'>
        <ComboboxInput
          className={
            errors?.areaOfPractice ||
            state?.issues
              .filter((issue) => issue.path[0] === 'lastName')
              .map((issue) => issue.message)[0]
              ? 'w-full border-0 py-1.5 pl-3 pr-10 shadow-sm ring-1 ring-inset ring-primary sm:text-sm sm:leading-6'
              : 'w-full border-0 bg-transparent py-1.5 pl-3 pr-10 text-background placeholder-background shadow-sm ring-1 ring-background data-[focus]:bg-background data-[focus]:text-foreground sm:text-sm sm:leading-6'
          }
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(practice: TypeOfPractice) => practice?.name}
          placeholder='Select or type your practice area...'
        />
        <ComboboxButton className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2'>
          <ChevronUpDownIcon
            className='size-5 text-foreground'
            aria-hidden='true'
          />
        </ComboboxButton>

        {filteredPractice.length > 0 && (
          <ComboboxOptions className='absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-background focus:outline-none sm:text-sm'>
            {filteredPractice.map((practice) => (
              <ComboboxOption
                key={practice.id}
                value={practice}
                className='group relative cursor-default select-none py-2 pl-3 pr-9 font-medium text-foreground data-[focus]:text-gray-600'
              >
                <span className='block truncate group-data-[selected]:font-semibold'>
                  {practice.name}
                </span>

                <span className='absolute inset-y-0 right-0 hidden items-center pr-4 text-background group-data-[selected]:flex group-data-[focus]:text-foreground'>
                  <CheckIcon className='h-5 w-5' aria-hidden='true' />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
