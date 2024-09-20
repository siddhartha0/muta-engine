import { memo, useState } from "react";
import companylogo from "../../assets/companylogo.png";
import { NavbarData } from "../../constants";
import { Link } from "react-router-dom";
import { Button, Typography } from "../../units";
import { Icon } from "@iconify/react";
import { Menu } from "react-feather";
import { useOutsideClick } from "../../hooks/useClickOutside";

export const Navbar = memo(() => {
  const [menuOption, setMenuOption] = useState(false);

  const menuRef = useOutsideClick(() => setMenuOption(false));

  return (
    <div className="flex py-10  z-10 md:px-16 px-4   place-items-center justify-between ">
      <img src={companylogo} alt="companyLogo" className="z-10" />

      <section
        className={`lg:flex ${
          menuOption ? "grid" : "hidden"
        } z-20 lg:gap-8 gap-2  absolute lg:relative lg:right-0 md:right-12 right-2  bg-brand lg:bg-primary mix-blend-lighten   lg:p-0 p-4  top-20   lg:top-0  lg:ml-10  lg:place-items-center`}
        id="menu"
        ref={menuRef}
      >
        {NavbarData.map((nav) => (
          <Link
            to={nav.path}
            key={nav.id}
            className="flex place-items-center gap-2 z-10"
            onClick={() => setMenuOption(false)}
          >
            <Typography size="body-sm-default" usage="default" bgWhite>
              {nav.title}
            </Typography>
            {nav.icon && <Icon icon={nav.icon} color="white" height={20} />}
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

      <Menu
        color="white"
        className="lg:hidden flex z-10 "
        onClick={() => setMenuOption((prev) => !prev)}
      />
    </div>
  );
});
