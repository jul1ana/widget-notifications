import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, ElementType } from "react";

interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        rest.className
      )}
    >
      <Icon className="w-4 h-4 text-zinc-50" />
    </button>
  );
}
