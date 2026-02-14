const advantages = [
  "Prix imbattables (dès 25€)",
  "Camionnette spacieuse (~20m³) avec hayon",
  "Devis gratuit et rapide",
];

function CheckIconOrange() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
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
    <div className="px-8 pt-6 pb-4">
      <h2 className="text-[19px] font-extrabold text-flyer-dark uppercase mb-4 tracking-wide">
        Pourquoi Nous ?
      </h2>
      <ul className="space-y-3">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIconOrange />
            <span className="text-[13px] font-medium text-flyer-dark/80 leading-snug">
              {advantage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
