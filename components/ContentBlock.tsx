export default function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white-100 rounded-2xl p-6 my-8 w-2xl max-w-full mx-auto">
      <h2 className="text-7xl font-bold mb-2 text-center">{title}</h2>

      <div className="leading-7 text-lg text-gray-600 space-y-4 text-center">
        {children}
      </div>
    </section>
  );
}