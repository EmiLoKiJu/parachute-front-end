import NavL from "@/components/Navlink";
import { useSelector } from "react-redux";

export default function Aside() {
  const { token } = useSelector((store) => store.login);
  
  const links = [
    {label: 'Home', href: "/"},
    {label: 'Parachutes', href: "/parachutes"},
    {label: token === null ? 'Login' : 'User', href: "/login"},
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
    <aside className="navigation_panel pl-2">
        <p className="px-3">Navigation panel is here and logo here</p>
        <nav>
          <ul>
            { links_ajax }
          </ul>
        </nav>
    </aside>
  );
}