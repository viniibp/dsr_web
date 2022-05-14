import { Suspense, useEffect, useState } from "react"
import { Loading } from "../components/Loading";

function App() {
  const [cats, setCats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  function LoadData() {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(res => res.json())
      .then(setCats)
      .finally(() => setLoading(false));

  }

  useEffect(() => {
    LoadData();
  }, [])

  if (loading) return (<Loading />);
  return (
    <h1 className="text-3xl text-zinc-100">
      {cats.map(cat => {
        return (
          <a href={cat.wikipedia_url}>
            <div key={cat.id} className='mx-auto max-w-15 px-15 mb-10p-10 py-8 flex flex-col items-center my-12 hover:bg-brand-600 transition-colors'>
              {cat.image?.url ? <img src={cat.image.url} alt='oi' className="aspect-auto h-[200px] rounded-xl" /> : <p className="text-red-500">Não tem imagem</p>}
              <div className="flex flex-col items-center">
                <p>{cat.name} - <span className="font-bold size text-xl text-red-600">{cat.intelligence}</span></p>
                <p>{cat.life_span}</p>
              </div>
            </div>
          </a>
        )
      })}
    </h1>
  )
}


export default App
