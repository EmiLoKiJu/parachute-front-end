function Li_temp({ text, cost }) {
  return(
    <li className="py-1 px-4 flex items-center justify-between">
      <span className="text-left">{text}</span>
      <span>${cost.toFixed(2)}</span>
    </li>
  );
}

export default function ReportReader({ parachute }) {
  const rentdec = parseFloat(parachute.rent);
  return (
    <div>
      <ul className="bg-gray-300">
        <Li_temp text={'Price per hour:'} cost={rentdec} />
        <Li_temp text={'Price per day:'} cost={rentdec * 12} />
        <Li_temp text={'Price per week:'} cost={rentdec * 6 * 12} />
        <Li_temp text={'Price per month:'} cost={rentdec * 4 * 6 * 12} />
        <Li_temp text={'security deposit:'} cost={rentdec * 100} />
      </ul>
    </div>
  );
}