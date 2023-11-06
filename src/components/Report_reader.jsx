import PropTypes from 'prop-types';

function Price_li({ text, cost }) {
  return(
    <li className="py-1 px-4 flex items-center justify-between">
      <span className="text-left">{text}</span>
      <span>${cost.toFixed(2)}</span>
    </li>
  );
}

Price_li.propTypes = {
  text: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default function ReportReader({ parachute }) {
  const rentdec = parseFloat(parachute.rent);
  return (
    <div>
      <ul className="[&>*:nth-child(odd)]:bg-gray-300">
        <Price_li text={'Price per hour:'} cost={rentdec} />
        <Price_li text={'Price per day:'} cost={rentdec * 12} />
        <Price_li text={'Price per week:'} cost={rentdec * 6 * 12} />
        <Price_li text={'Price per month:'} cost={rentdec * 4 * 6 * 12} />
        <Price_li text={'security deposit:'} cost={rentdec * 100} />
      </ul>
    </div>
  );
}

ReportReader.propTypes = {
  parachute: PropTypes.shape({
    rent: PropTypes.string.isRequired,
  }).isRequired,
};