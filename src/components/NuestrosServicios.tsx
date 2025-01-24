interface NuestrosServiciosProps {
  url: string;
  titulo: string;
  precio?: number;
  periodoPago?: string;
  descripcion: string;
}

const NuestrosServicios: React.FC<NuestrosServiciosProps> = ({
  url,
  titulo,
  precio,
  periodoPago,
  descripcion,
}) => {
  return (
    <div className="w-full md:w-80 flex flex-col items-start gap-2 ">
      <div
        className="shadow-md shadow-gray-500 w-full h-32 md:h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      <p className="text-2xl font-bold text-titulos">{titulo}</p>
      
      {precio !== undefined && (
        <p className="text-3xl font-bold text-titulos text-center">{precio}$</p>
      )}
      
      {periodoPago && (
        <p className="text-2xl font-bold text-subtitulos text-center">
          {periodoPago}
        </p>
      )}
      
      <p className="text-lg text-balance font-bold text-subtitulos">{descripcion}</p>
    </div>
  );
};

export default NuestrosServicios;