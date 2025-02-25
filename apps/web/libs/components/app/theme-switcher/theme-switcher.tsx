"use client";

import { useHasMounted } from "@web/libs/hooks/has-mounted/has-mounted";
import { mergeClasses } from "@web/libs/utils/merge-classes/merge-classes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const themes = [
  { value: "light", icon: Sun, title: "Light theme" },
  { value: "system", icon: Monitor, title: "System theme" },
  { value: "dark", icon: Moon, title: "Dark theme" },
];

export default function ThemeSwitcher() {
  const isMounted = useHasMounted();
  const { setTheme, theme } = useTheme();

  const renderThemeButton = useCallback(
    ({ value, icon: Icon, title }: (typeof themes)[number]) => (
      <button
        key={title}
        onClick={() => setTheme(value)}
        className={mergeClasses(
          "rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground",
          {
            "bg-accent text-accent-foreground": theme === value,
            "text-muted-foreground": theme !== value,
          },
        )}
        title={title}
        aria-label={title}
      >
        <Icon className="h-4 w-4" />
      </button>
    ),
    [setTheme, theme],
  );

  if (!isMounted) return null;

  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-background p-1 space-x-1 shadow-sm">
      {themes.map(theme => renderThemeButton(theme))}
    </div>
  );
}
