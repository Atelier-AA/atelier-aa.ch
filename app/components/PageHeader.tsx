interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-elindo text-white pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container-x text-center">
        {breadcrumb && (
          <p className="text-elindo-light uppercase tracking-widest text-sm mb-4 font-medium">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
