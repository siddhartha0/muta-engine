import { memo } from "react";
import companylogo from "../../assets/companylogo.png";
import { NavbarData } from "../../constants";
import { Link } from "react-router-dom";
import { Button, Typography } from "../../units";
import { Icon } from "@iconify/react";
import { Menu } from "react-feather";

export const Navbar = memo(() => {
  return (
    <div className="flex py-10  z-10 px-16   place-items-center justify-between ">
      <img src={companylogo} alt="companyLogo" className="z-10" />
      <section
        className="lg:flex z-10 gap-8 hidden  lg:ml-10  place-items-center"
        id="menu"
      >
        {NavbarData.map((nav) => (
          <Link
            to={nav.path}
            key={nav.id}
            className="flex place-items-center gap-2"
          >
            <Typography size="body-sm-default">{nav.title}</Typography>
            {nav.icon && <Icon icon={nav.icon} height={20} />}
          </Link>
        ))}
      </section>
      <section
        id="nav-buttons"
        className="hidden lg:flex z-10 place-items-center gap-6"
      >
        <Button usage="primary-gradient">Login</Button>
        <Button size="small">Sign up</Button>
      </section>

      <Menu color="white" className="lg:hidden flex " />
    </div>
  );
});
