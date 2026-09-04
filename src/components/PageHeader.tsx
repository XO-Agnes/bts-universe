export default function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24 relative">
      <div className="absolute top-24 right-6 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <p className="text-xs tracking-ultra text-accent mb-6">{index}</p>
      <h1 className="display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-paper relative z-10">
        {title}
      </h1>
      <div className="mt-8 max-w-2xl">
        <div className="h-px w-16 bg-accent mb-6" />
        <p className="text-base md:text-lg text-muted leading-relaxed">{subtitle}</p>
      </div>
    </header>
  );
}
