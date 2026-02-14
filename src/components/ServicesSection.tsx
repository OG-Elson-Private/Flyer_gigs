const services = [
  "Mini-déménagement (studios, kots, pièces)",
  "Transport de meubles & électroménager",
  "Livraison achats 2ememain / Marketplace / IKEA",
  "Transport de colis & marchandises",
  "Tous types de transport de marchandise",
  "Camionnette avec hayon (chargement facile)",
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
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
    <div className="pl-20 pr-6 pt-8 pb-6">
      <h2 className="text-[20px] font-extrabold text-flyer-purple uppercase mb-5 tracking-wide">
        Nos Services
      </h2>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon />
            <span className="text-[13px] font-medium text-flyer-dark leading-snug">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
