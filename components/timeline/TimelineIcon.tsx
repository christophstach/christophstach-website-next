import { cn } from "@/lib/utils";

export default function TimelineIcon({
  children,
  current,
}: {
  children: React.ReactNode;
  current?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full p-2 ring-8 ${colors()}",
        current &&
          "ring-white bg-indigo-200 text-black dark:bg-indigo-800 dark:text-white dark:ring-black",
        !current &&
          "ring-white bg-gray-300 text-black dark:bg-gray-800 dark:text-white dark:ring-black",
      )}
    >
      {children}
    </div>
  );
}
