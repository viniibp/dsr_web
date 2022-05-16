import { ComponentProps, ElementType, PropsWithChildren, ReactNode, ReactPropTypes } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header"

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen h-auto relative">
      <Header />
      <main className="h-full pb-[132px] py-8 lg:mx-auto lg:w-[1024px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
