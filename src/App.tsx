
import './App.css'

function App() {

  return (
    <>
    <picture>
      <source srcSet="https://picsum.photos/id/5/1200/1200" media="(min-width: 1200px)" />
      <source srcSet="https://picsum.photos/id/5/1000/1000" media="(min-width: 750px)" />
      <source srcSet="https://picsum.photos/id/5/750/750" media="(min-width: 500px)" />
      <img src="https://picsum.photos/id/5/500/500" />
    </picture>
    </>
  )
}

export default App