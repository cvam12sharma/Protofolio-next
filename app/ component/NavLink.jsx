import Link from 'next/link'
import React from 'react'

import ScrollIntoView from 'react-scroll-into-view'

export const NavLink = ({selector,title}) => {
  return (
    <ScrollIntoView
    selector={selector}
    className="block py-2 pl-3 pr-4 text-slate-300 cursor-pointer  sm:text-xl rounded md:p-0 hover:text-white">
  {title}
</ScrollIntoView>
  );
};

export default NavLink;  