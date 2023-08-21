import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <div>
      <Icon className="w-6 h-6 mt-3 text-emerald-500" />
    </div>
  );
}
