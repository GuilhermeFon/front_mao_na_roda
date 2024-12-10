'use client';

import { format, setYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface DatePickerDemoProps {
  date: string | null;
  setDate: (date: string | null) => void;
}

export function DatePickerDemo({ date, setDate }: DatePickerDemoProps) {
  // const [selectedYear, setSelectedYear] = React.useState<number | null>(null);
  const [currentDate, setCurrentDate] = React.useState<Date>(date ? new Date(date) : new Date());
  const [popoverOpen, setPopoverOpen] = React.useState<boolean>(false);

  const handleYearChange = (year: string) => {
    const yearNumber = parseInt(year, 10);
    // setSelectedYear(yearNumber);
    setCurrentDate(setYear(currentDate, yearNumber));
  };

  const handleMonthChange = (month: Date) => {
    setCurrentDate(month);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date ? date.toISOString() : null);
    setPopoverOpen(false);
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full h-8 justify-start text-left font-normal px-3 py-1 rounded border-gray-300 bg-transparent text-sm mb-4',
            !date && 'text-muted-foreground',
          )}
          onClick={() => setPopoverOpen(true)}
        >
          <CalendarIcon />
          {date ? (
            format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
          ) : (
            <span className="text-sm text-gray-400">Data de Nascimento</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex justify-between items-center p-2">
          <Select onValueChange={handleYearChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent className="max-h-52 overflow-auto">
              {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          onSelect={handleDateSelect}
          initialFocus
          month={currentDate}
          onMonthChange={handleMonthChange}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
}