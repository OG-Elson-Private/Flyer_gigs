const services = [
  "Mini-déménagement (studios, kots, pièces)",
  "Transport de meubles & électroménager",
  "Livraison achats 2ememain / Marketplace / IKEA",
  "Transport de colis & marchandises",
  "Camionnette avec hayon (chargement facile)",
];

function CheckIcon() {
  return (
    <svg className="w-7 h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#4A1A8A" />
      <path
        d="M8 12l3 3 5-5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <div className="pl-16 pr-8 pt-12 pb-8">
      <h2 className="text-[28px] font-extrabold text-flyer-purple uppercase mb-8 tracking-wide">
        Nos Services
      </h2>
      <ul className="space-y-5">
        {services.map((service, index) => (
          <li key={index} className="flex items-center gap-4">
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
