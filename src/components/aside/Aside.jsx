import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NavL from "@/components/Navlink";
import Logo from "@/assets/images/logo/logo.png";

export default function Aside() {
  const { token } = useSelector((store) => store.login);
  
  const links = [
    {label: 'Parachutes', href: "/"},
    {label: token === null ? 'Login' : 'User', href: "/login"},
    {label: 'Add Parachute', href: "/newParachute"},
    {label: 'Reserve', href:'/reserveParachute'},
    {label: 'Reservations', href: '/myreservations'},
    {label: 'Delete', href: '/deleteParachute'},

  ]

  const links_ajax = links.map((link, i)=>{
    return (
      <li key={i + 1}>
        <NavL href={link.href} label={link.label}/>
      </li>
    );
  });

  return(
    <aside className="navigation_panel bg-gray-100 h-full pt-16 lg:pt-0 pl-2 flex flex-col">
        <div className="logo_wrapper max-w-[50%] mx-auto order-last lg:order-first">
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