import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavL from "@/components/Navlink";
import Logo from "@/assets/images/logo/logo.png";

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
        <div className="logo_wrapper">
          <Link to="/">
            <img src={Logo} alt="Logo picture" />
          </Link>
        </div>
        <nav>
          <ul>
            { links_ajax }
          </ul>
        </nav>
    </aside>
  );
}