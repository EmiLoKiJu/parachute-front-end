import { NavLink } from "react-router-dom";
import NavL from "@/components/Navlink";

export default function Aside() {
  const links = [
    {label: 'Home', href: "/"},
    {label: 'A', href: "/A"},
    {label: 'B', href: "/B"},
    {label: 'C', href: "/C"},
  ]

  const links_ajax = links.map((link, i)=>{
    return (
      <li key={i + 1}>
        <NavL href={link.href} label={link.label}/>
      </li>
    );
  });

  return(
    <aside className="h-screen w-[300px] border border-red-600">
      <div>
        <p>Navigation panel and logo here</p>
        <nav>
          <ul>
            { links_ajax }
          </ul>
        </nav>
      </div>
    </aside>
  );
}