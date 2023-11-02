function Li_temp() {
  return(
    <li className="py-1 px-4 flex items-center justify-between">
      <span>Finance Fee</span>
      <span>$140</span>
    </li>
  );
}

export default function ReportReader() {
  
  return(
    <div>
      <ul className="[&>*:nth-child(odd)]:bg-gray-300">
        <Li_temp/>
        <Li_temp/>
        <Li_temp/>
        <Li_temp/>
        <Li_temp/>
      </ul>
    </div>
  );
}