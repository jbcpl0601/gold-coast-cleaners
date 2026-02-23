"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-white rounded-2xl shadow-xl shadow-primary/5 border border-primary/10", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-2 relative items-center",
        caption_label: "text-[15px] font-bold text-slate-900",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-2 h-8 w-8 bg-transparent p-0 text-slate-500 hover:text-primary hover:bg-primary/5 border-none opacity-80 hover:opacity-100 transition-colors"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-2 h-8 w-8 bg-transparent p-0 text-slate-500 hover:text-primary hover:bg-primary/5 border-none opacity-80 hover:opacity-100 transition-colors"
        ),
        month_grid: "w-full border-collapse space-y-2",
        weekdays: "flex justify-between w-full mb-3",
        weekday: "text-slate-500 rounded-md w-9 font-semibold text-[0.8rem] uppercase tracking-wider",
        week: "flex w-full mt-2 justify-between gap-1",
        day: "h-9 w-9 text-center text-sm p-0 flex items-center justify-center relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].outside)]:bg-primary/5 [&:has([aria-selected])]:bg-primary/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-medium text-slate-700 hover:bg-primary/10 hover:text-primary rounded-full aria-selected:opacity-100 transition-colors outline-none"
        ),
        range_end: "day-range-end",
        selected:
          "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-full shadow-md shadow-primary/20",
        today: "bg-secondary text-primary font-bold rounded-full",
        outside:
          "outside text-slate-300 aria-selected:bg-primary/5 aria-selected:text-slate-400 font-normal",
        disabled: "text-slate-300 opacity-50",
        range_middle:
          "aria-selected:bg-primary/10 aria-selected:text-slate-900",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props: any) => {
          if (props.orientation === 'left') {
            return <ChevronLeft className={cn("h-5 w-5")} />;
          }
          return <ChevronRight className={cn("h-5 w-5")} />;
        },
      } as any}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
