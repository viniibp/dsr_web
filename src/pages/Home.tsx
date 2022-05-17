import RetificadorImg from '../assets/retificador.png';

export default function Home() {
  return (
    <section className='text-lg text-justify bg-[#292B2F] px-6 py-8 rounded-xl mx-4 text-zinc-200 flex flex-col place-items-center justify-around lg:flex-row lg:py-20'>
      <img
        width={300}
        // height={400}
        src={RetificadorImg}
        alt="Imagem de um retificador"
        className='mb-10 aspect-auto'
      />
      <div className='grid items-center md:max-w-3xl lg:max-w-lg leading-6'>
        <p className='font-normal text-left lg:text-center pb-10 text-4xl underline underline-offset-2'>
          DSR Soluções em Eletrônica
        </p>
        <p>
          DSR - Soluções em Eletrônica, empresa especializada em fornecer soluções eficientes com tecnologia e qualidade no setor de energia, oferecendo produtos como: retificadores tiristorizados, retificadores com fonte chaveada, no-breaks, monitor de baterias, dentro outros. E serviços como retroffiting (modernização) de retificadores e no-breaks, comissionamento, treinamentos, dentre outros.
        </p>
        <br />
        <p>
          A DSR é uma empresa com o seguinte perfil: Relação transparente, prestação de serviços e oferta de soluções que atendam plenamente às necessidades do cliente, “olhos nos olhos do cliente” e, acima de tudo, relação íntegra e honesta com todos os parceiros em todas as esferas.
        </p>
      </div>
    </section>
  );
}
