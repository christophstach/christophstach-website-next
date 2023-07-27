export default function TimelineTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-lg prose-emerald mb-1 dark:prose-invert">
      <h3>{children}</h3>
    </div>
  );
}
