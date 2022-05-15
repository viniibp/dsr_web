import data from '../mock/data.json';

function App() {
  return (
    <div className="text-xl flex mx-auto w-[1120px]">
      {data.map(produto => {
        return (
          <div className='my-8 mx-6 w-[1120px] flex place-items-center flex-col hover:bg-brand-800 transition-colors px-5 py-2 rounded-xl'>
            <h1 className='font-bold mt-3 text-zinc-200'>{produto.name}</h1>
            <img
              src={produto.imagem}
              alt={produto.name}
              className="rounded-lg my-4"
            />
            <h1 className='text-zinc-400 text-justify'>{produto.description}</h1>
            <button className='text-zinc-200 my-6 bg-brand-600 py-2 px-4 rounded-xl hover:opacity-80'>
              Ver documentação
            </button>
          </div>
        );
      })}
    </div>
  );
}


export default App
