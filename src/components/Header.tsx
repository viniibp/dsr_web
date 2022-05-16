import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { HeaderButton, MenuItemProps } from './HeaderButton';

const MenuItems = [
  { title: "Home", path: "/" },
  { title: "Empresa", path: "/about" },
  { title: "Produtos", path: "/products" },
  { title: "Serviços", path: "/services" },
  { title: "Clientes", path: "/clients" },
  { title: "Contato", path: "/contacts" },
  { title: "Trabalho Conosco", path: "/workWithUs" },
] as Array<MenuItemProps>

export const Header = () => {
  const location = useLocation();
  return (
    <header className="w-screen lg:mx-auto place-items-center grid bg-red-700">
      <div className="w-screen flex justify-center place-items-center lg:w-[1024px] lg:h-[100px] lg:justify-evenly">
        <a href="/" className='hidden lg:block'>
          <img src={Logo} alt="Logo DSR"/>
        </a>
        <nav className='w-full'>
          <ul className='flex flex-col lg:space-x-3 place-items-center lg:flex-row'>
            {MenuItems.map((menuItem, index) => {
              return (
                <HeaderButton
                  menuProps={menuItem}
                  key={menuItem.title}
                  isLast={index === MenuItems.length - 1}
                  isCurrent={location.pathname === menuItem.path}
                />
              );
            })}
          </ul>
        </nav>
        {/* <div>
          oi
        </div> */}
      </div>
    </header>
  );
}