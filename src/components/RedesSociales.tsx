import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RedesSocialesProps {
  icono: IconDefinition;
  ruta: string;
}

const RedesSOciales: React.FC<RedesSocialesProps> = ({ icono, ruta }) => {
  return (
    <div className="rounded-full bg-white border-2 border-black w-12 h-12 flex justify-center items-center">
      <a href={ruta} target="_blank" className="flex justify-center items-center">
        <FontAwesomeIcon icon={icono} className="w-7 h-7" />
      </a>
    </div>
  );
};

export default RedesSOciales;
