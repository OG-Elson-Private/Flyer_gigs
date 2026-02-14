const services = [
  "Mini-déménagement (studios, kots, pièces)",
  "Transport de meubles & électroménager",
  "Livraison achats 2ememain / Marketplace / IKEA",
  "Transport de colis & marchandises",
  "Camionnette avec hayon (chargement facile)",
];

function CheckIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0 text-flyer-green" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <div className="px-16 py-10">
      <h2 className="text-[30px] font-bold text-flyer-purple uppercase mb-6 tracking-wide">
        Nos Services
      </h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[18px] font-medium text-flyer-dark leading-snug">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
