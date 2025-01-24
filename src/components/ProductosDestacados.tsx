import Image from "next/image";

interface ProductosDestacadorProps {
  url: string;
  alt: string;
  titulo: string;
}

const ProductosDestacados: React.FC<ProductosDestacadorProps> = ({
  url,
  alt,
  titulo,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={url}
        alt={alt}
        width={160}
        height={160}
        className="rounded-full shadow-md shadow-gray-500"
      />
      <p className="w-10/12 text-center text-2xl text-subtitulos font-bold">{titulo}</p>
    </div>
  );
};

export default ProductosDestacados;
