const advantages = [
  "Prix imbattables (dès 25€)",
  "Camionnette spacieuse (~20m³) avec hayon",
  "Devis gratuit et rapide",
];

function CheckIconOrange() {
  return (
    <svg className="w-6 h-6 flex-shrink-0 text-flyer-orange" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function WhyUsSection() {
  return (
    <div className="px-16 py-8">
      <h2 className="text-[28px] font-bold text-flyer-purple uppercase mb-5 tracking-wide">
        Pourquoi Nous ?
      </h2>
      <ul className="space-y-4">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIconOrange />
            <span className="text-[17px] font-medium text-flyer-dark leading-snug">
              {advantage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
