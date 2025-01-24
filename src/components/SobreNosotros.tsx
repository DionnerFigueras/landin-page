

interface SobreNosotrosProps {
  url: string;
  titulo: string;
  descripcion: string;
  handleOpenModal: () => void;
}

const SobreNosotros: React.FC<SobreNosotrosProps> = ({
  url,
  titulo,
  descripcion,
  handleOpenModal
}) => {
  return (
    <div className="flex md:flex-row flex-1 flex-wrap justify-center items-center gap-5">
      
      <div
        className="shadow-md shadow-gray-500 w-full md:w-4/12 h-32 md:h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      <div className="md:w-1/2 flex flex-col gap-3 flex-wrap">
        <p className="text-3xl font-bold text-titulos">{titulo}</p>
        <p className="text-lg font-semibold text-subtitulos text-balance">{descripcion}</p>
        <button onClick={handleOpenModal} className="md:w-2/5 text-white text-xl font-bold py-2 px-5 bg-boton-primario rounded-full shadow-md shadow-gray-500 hover:bg-titulos duration-500">Leer Mas</button>
      </div>
    </div>
  );
};

export default SobreNosotros;
