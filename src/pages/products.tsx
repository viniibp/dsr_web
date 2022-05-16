import data from '../mock/data.json';

export default function Products() {
  return (
    <div className="flex flex-col place-items-center lg:w-full lg:flex-row">
      {data.map(produto => {
        return (
          <section className='group max-w-sm px-5 py-2 flex place-items-center flex-col hover:bg-brand-800 rounded-xl lg:mx-5 hover:scale-105 transition-transform'>
            <h1 className='font-bold mt-3 text-zinc-200'>{produto.name}</h1>
            <img
              src={produto.imagem}
              alt={produto.name}
              className="rounded-lg my-4"
            />
            <span className='text-zinc-400 text-justify group-hover:text-zinc-200'>
              {produto.description}
            </span>
            <button className='text-zinc-200 my-6 bg-brand-600 py-2 px-4 rounded-xl hover:opacity-80'>
              Ver documentação
            </button>
          </section>
        );
      })}
    </div>
  );
};