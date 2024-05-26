import './App.css'
import Header from './component/Header';
import MyCard from './component/MyCard';

function App() {
  const perros = [
    {
      imagen: "https://cdn.pixabay.com/photo/2016/02/08/20/24/dog-1187576_1280.jpg",
      title: "Princess",
      description: "Es una compañera muy leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princess a encontrar su final feliz!",
      tags: [
        { text: "EURASIER", color: "success" },
       ],
    },
    {
      imagen: "https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_1280.jpg",
      title: "Bartolo",
      description: "Nuestro peque siempre llenito de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!",
      tags: [
        { text: "BICHÒN MALTÈS", color: "primary" },
       ],
    },
    {
      imagen: "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg",
      title: "Gohan",
      description: "Un perrito con un corazon gigante. Harte amigo de gohan y experimenta un amor incondicional!",
      tags: [
        { text: "DOGO DEL TIBET", color: "danger" },

      ],
    },
    {
      imagen: "https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg",
      title: "Messi",
      description: "Es juguetòn, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      tags: [
        { text: "PGGLE", color: "warning" },
 
      ],
    },
  ];  

  return (
    <>
      <Header title="Adopta Un Perrito" />
      <div className="container mt-4">
        <div className="row">
          {perros.map((perro, index) => (
            <div
              className="col-md-3"
              key={index}
            >
              <MyCard {...perro} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
