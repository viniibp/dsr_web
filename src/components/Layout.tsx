import { Footer } from "./Footer";
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
