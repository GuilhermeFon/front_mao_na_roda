import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface Profession {
  id: string;
  label: string;
}

interface MultiSelectProps {
  options: Profession[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (selectedValue: string) => {
    const isSelected = value.includes(selectedValue);
    const newValue = isSelected
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue];
    onChange(newValue);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger className="flex h-8 w-full items-center justify-between rounded-md border border-gray-300 bg-background px-3 py-1 mb-4 text-sm">
        <span className="text-gray-400">
          {value.length > 0
            ? value.length > 2
              ? `${value.slice(0, 2).join(', ')}...`
              : value.join(', ')
            : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          className="z-50 max-h-[200px] overflow-y-auto rounded-md border bg-popover shadow-md slim-scrollbar"
        >
          {options.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(item.id)}
            >
              <Checkbox
                checked={value.includes(item.id)}
                className="h-4 w-4 mr-2"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default MultiSelect;
