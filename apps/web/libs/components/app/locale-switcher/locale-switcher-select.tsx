"use client";

import { Locale } from "@shettayyy/i18n/locales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@web/libs/components/core/select/select";
import { setUserLocaleAsync } from "@web/libs/utils/i18n/locale-actions";
import { useTransition } from "react";

import { Typography } from "../../core/typography/typography";

interface Props {
  defaultValue: string;
  items: { value: string; label: string }[];
  label: string;
}

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      void setUserLocaleAsync(locale);
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onChange}
      name="locale-switcher"
    >
      <SelectTrigger
        aria-label={label}
        className={`w-fit border-none gap-2 ${isPending ? "pointer-events-none opacity-60" : ""} bg-transparent`}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>

      <SelectContent align="center" className="min-w-[8rem]">
        {items.map(item => (
          <SelectItem
            key={item.value}
            value={item.value}
            className="flex items-center gap-2 py-2"
          >
            <Typography>{item.label}</Typography>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
