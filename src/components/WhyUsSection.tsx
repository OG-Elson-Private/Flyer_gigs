const advantages = [
  "Prix imbattables (dès 25€)",
  "Camionnette spacieuse (~20m³) avec hayon",
  "Devis gratuit et rapide",
];

function CheckIconOrange() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 13l4 4L19 7"
        stroke="#FF6B00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyUsSection() {
  return (
    <div className="px-10 pt-8 pb-6">
      <h2 className="text-[26px] font-extrabold text-flyer-dark uppercase mb-6 tracking-wide">
        Pourquoi Nous ?
      </h2>
      <ul className="space-y-4">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIconOrange />
            <span className="text-[17px] font-medium text-flyer-dark/80 leading-snug">
              {advantage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
