export default function TimelineTime({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
      {children}
    </time>
  );
}
