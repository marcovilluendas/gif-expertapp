import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);

  const { data, loading } = useFetchGifs(category);

  console.log(loading);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImages)
  // }, [category])

  return (
    <>
      <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>

      {loading && <p className="animate__animated animate__flash animate__delay-1s">Loading</p>}

      <div className="card-grid">
        {
          data.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
