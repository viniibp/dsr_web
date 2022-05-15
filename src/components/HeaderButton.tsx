interface Props {
  isLast: boolean;
  menuProps: MenuItemProps;
}

export interface MenuItemProps {
  title: string;
  path: string;
}

export const HeaderButton = (props: Props) => {
  const { isLast = false, menuProps } = props;

  return (
    <li className={'mx-3 px-3 h-12 flex place-items-center'.concat(!isLast ? ' border-r-[2px]' : '')}>
      <a href={menuProps.path} className="text-zinc-300 pr-3 font-semibold hover:text-zinc-100 transition-colors">
        {menuProps.title}
      </a>
    </li>
  );
};