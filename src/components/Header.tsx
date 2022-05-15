import Logo from '../assets/logo.svg';
import { HeaderButton, MenuItemProps } from './HeaderButton';

const MenuItems = [
  { title: "Home", path: "/" },
  { title: "Empresa", path: "/about" },
  { title: "Produtos", path: "/" },
  { title: "Serviços", path: "/" },
  { title: "Clientes", path: "/" },
  { title: "Contato", path: "/" },
  { title: "Trabalho Conosco", path: "/" },
] as Array<MenuItemProps>

export const Header = () => {
  return (
    <header className="w-screen bg-red-700 mx-auto place-items-center grid">
      <div className="w-[1120px] h-[100px] flex place-items-center justify-evenly">
        <a href="/">
          <img src={Logo} alt="Logo DSR" />
        </a>
        <nav>
          <ul className='flex'>
            {MenuItems.map((menuItem, index) => {
              return (
                <HeaderButton
                  menuProps={menuItem}
                  key={menuItem.title}
                  isLast={index === MenuItems.length-1}
                />
              );
            })}
          </ul>
        </nav>
        <div>
          oi
        </div>
      </div>
    </header>
  );
}