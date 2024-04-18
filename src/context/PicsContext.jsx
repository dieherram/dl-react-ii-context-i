import { createContext, useEffect, useState } from 'react'

export const PicsContext = createContext()

const PicsProvider = ({ children }) => {

  const [pics, setPics] = useState([])

  const getData = async () => {
    const url = "/photos.json"
    const response = await fetch(url)
    const data = await response.json()
    setPics(data.photos)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleFavoritePic = (id) => {
    const newPics = pics.map(pic => {
      if (pic.id === id) {
        return {
          ...pic,
          liked: !pic.liked
        }
      }
      return pic
    })
    setPics(newPics)
  }

  const globalState = { pics, handleFavoritePic }

  return (
    <PicsContext.Provider value={globalState}>
      {children}
    </PicsContext.Provider>
  )
}

export default PicsProvider