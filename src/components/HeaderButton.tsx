import { Link, NavLink } from "react-router-dom";

interface Props {
  isLast: boolean;
  isCurrent: boolean;
  menuProps: MenuItemProps;
}

export interface MenuItemProps {
  title: string;
  path: string;
}

export const HeaderButton = (props: Props) => {
  const { isLast = false, isCurrent, menuProps } = props;
  const { path, title } = menuProps;

  return (
    <li className={'w-full h-12 flex place-items-center lg:mx-3 px-3'.concat(!isLast ? ' lg:border-r-[2px]' : '')}>
      <NavLink to={path} className={`w-full text-center text-zinc-300 font-semibold hover:text-zinc-100 transition-colors ${!isCurrent ? "" : " border-b-[1px] border-blue-400 text-blue-400"} lg:mr-4`}>
        {title}
      </NavLink>
    </li>
  );
};