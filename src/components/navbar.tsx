import React, { useRef } from "react";

export interface NavbarProps {
  productRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

const Navbar = (props: NavbarProps) => {
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const moveCursor = (e: any) => {
    console.log(e.target);

    const cursor = cursorRef.current;
    const item = e.target;
    const rectangle = item.getBoundingClientRect();

    //get parent position
    const parentRectangle = item.parentElement.getBoundingClientRect();
    if (cursor) {
      cursor.style.width = `${rectangle.width}px`;
      cursor.style.left = `${rectangle.left - parentRectangle.left}px`;
    }

    console.log(cursorRef.current);

    props.aboutRef.current?.classList.remove('panel-active');
    props.productRef.current?.classList.remove('panel-active');


    switch(item.innerHTML) {
      case "À Propos":
        props.aboutRef.current?.classList.add('panel-active');
        break;
      case "Produits":
        props.productRef.current?.classList.add('panel-active');
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <img src="/logo-infomaniak.svg" alt="logo" className="logo" />

        <div className="navbar__item-wrapper">
          <ul>
            <li onMouseOver={moveCursor}>Produits</li>
            <li onMouseOver={moveCursor}>À Propos</li>
            <li onMouseOver={moveCursor}>Support Tres long</li>
          </ul>
          <span ref={cursorRef}></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
