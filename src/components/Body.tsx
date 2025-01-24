"use client";
import React, { useState } from "react";
import ProductosDestacados from "@/components/ProductosDestacados";
import NuestrosServicios from "@/components/NuestrosServicios";
import SobreNosotros from "@/components/SobreNosotros";
import ModalProductosDestacados from "@/components/ModalProductosDestacados";
import Modal from "@/components/ModalSobreNosotros";

const Body: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutUsModalOpen, setIsAboutUsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    imageUrl: string;
    description: string;
    caracteristicas: string[];
    beneficios: string[];
  } | null>(null);

  const handleOpenModal = (product: {
    imageUrl: string;
    description: string;
    caracteristicas: string[];
    beneficios: string[];
  }) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOpenAboutUsModal = () => {
    setIsAboutUsModalOpen(true);
  };

  const handleCloseAboutUsModal = () => {
    setIsAboutUsModalOpen(false);
  };

/* Contenido que se cargara en el componente ModalSObreNosotros */
  const nosotrosText =
    "Somos una empresa de bienestar digital que desarrolla una aplicación innovadora para el seguimiento del sueño, la meditación guiada, la nutrición personalizada y la telemedicina, utilizando inteligencia artificial para ofrecer soluciones personalizadas y efectivas.";
  const objetivosText =
    "Mejorar la salud y el bienestar general de nuestros usuarios a través de herramientas tecnológicas y programas personalizados, ofreciendo un servicio accesible y efectivo.";
  const misionText =
    "Empoderar a las personas para que tomen el control de su salud y bienestar, proporcionando herramientas prácticas, información útil y apoyo personalizado en su camino hacia una vida más plena.";
  const visionText = "Ser líderes en el sector del bienestar digital, innovando constantemente y ofreciendo las mejores soluciones tecnológicas para mejorar la calidad de vida de las personas en todo el mundo.";
  const metasList = [
    "Expandir nuestra base de usuarios a nivel global.",
    "Desarrollar nuevas funcionalidades y herramientas impulsadas por IA.",
    "Fomentar una comunidad activa y comprometida con el bienestar.",
    "Colaborar con expertos en salud y bienestar para ofrecer soluciones innovadoras.",
  ];
  const esloganText = "Tu Bienestar, Nuestra Pasión. ¡Comienza a Transformar tu Vida Hoy!";
/*  */

  return (
    <div className="w-full flex flex-col items-center">
      <main className="flex justify-center top-0" id="inicio">
        <div className="w-11/12 h-auto relative bg-[url('/images/fondoBG.jpg')] bg-cover bg-center bg-no-repeat shadow-gray-500 shadow-md py-5">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="w-full relative z-10 text-white text-center flex flex-col justify-center items-center">
            <p className="text-4xl font-bold mt-8">
              Tu Salud en la Palma de tu Mano
            </p>
            <p className="text-2xl font-semibold w-10/12 my-5">
              Ofrecemos servicios de salud de la más alta calidad, diseñados
              para satisfacer las necesidades individuales de cada paciente.
              Nuestro equipo de expertos utiliza tecnología avanzada para
              asegurar diagnósticos precisos y tratamientos efectivos.
              Comprometidos con IA
            </p>

            <button className="px-5 py-3 text-2xl font-bold border-2 border-white rounded-full bg-boton-primario hover:bg-boton-segundario duration-500">
              Descarga Nuestra Aplicacion
            </button>
          </div>
        </div>
      </main>

      {/* Productos Destacados */}
      <div className="w-11/12 my-8" id="productos">
        <p className="text-titulos text-3xl text-center font-bold mb-8">
          Productos Destacados
        </p>
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-3">
          <a
            onClick={() =>
              handleOpenModal({
                imageUrl: "/images/SueñoPersonalizadoIA.jpg",
                description:
                  "Un programa completo diseñado para mejorar la calidad del sueño del usuario.",
                caracteristicas: [
                  "Monitorea tu sueño: Registra las fases de sueño, duración, despertares y patrones.",
                  "Análisis personalizado: Identifica problemas y factores que afectan tu sueño.",
                  "Progreso: Sigue tu evolución con gráficos.",
                ],
                beneficios: [
                  "Mejora la calidad y duración del sueño.",
                  "Reduce los problemas de insomnio.",
                  "Aumenta la energía y el bienestar general.",
                  "Proporciona información valiosa para mejorar la salud a largo plazo.",
                ],
              })
            }
            className="cursor-pointer"
          >
            <ProductosDestacados
              url={"/images/SueñoPersonalizadoIA.jpg"}
              alt={"Una persona siendo monitoreada mientras duerme"}
              titulo={"Sueño Personalizado con IA"}
            />
          </a>

          <a
            onClick={() =>
              handleOpenModal({
                imageUrl: "/images/NutricionPersonalizadaIA.jpg",
                description:
                  "Planes de nutrición adaptados a las necesidades y objetivos individuales del usuario",
                caracteristicas: [
                  "Evaluación Inicial: Un cuestionario para conocer el perfil del usuario (edad, peso, altura, estilo de vida, objetivos).",
                  "Plan de Alimentación Personalizado: La IA genera un plan de alimentación basado en la información del usuario, considerando sus preferencias alimentarias, restricciones y objetivos.",
                  "Lista de Compras: La aplicación genera una lista de compras basada en el plan de alimentación.",
                  "Seguimiento de la Ingesta: Permite al usuario registrar sus comidas y monitorear su progreso.",
                  "Recetas Saludables: Ofrece una base de datos de recetas saludables y fáciles de preparar.",
                ],
                beneficios: [
                  "Ayuda a alcanzar los objetivos de salud y bienestar (pérdida de peso, ganancia muscular, mejora de la energía).",
                  "Promueve una alimentación saludable y equilibrada.",
                  "Facilita la planificación de comidas y las compras.",
                  "Proporciona apoyo personalizado y consejos profesionales.",
                ],
              })
            }
            className="cursor-pointer"
          >
            <ProductosDestacados
              url={"/images/NutricionPersonalizadaIA.jpg"}
              alt={"Un telefono rodeado de comida saludable"}
              titulo={"Nutricion Personalizada con IA"}
            />
          </a>

          <a
            onClick={() =>
              handleOpenModal({
                imageUrl: "/images/Telemedicina.jpg",
                description:
                  "Una plataforma que permite a los usuarios conectar con profesionales de la salud (médicos, psicólogos, nutricionistas, entrenadores) para consultas online",
                caracteristicas: [
                  "Videoconsultas: Permite a los usuarios programar y realizar consultas virtuales a través de videollamada.",
                  "Chat en Vivo: Ofrece la opción de comunicarse con profesionales a través de chat para preguntas o consultas rápidas.",
                  "Historial de Consultas: Permite al usuario acceder al historial de consultas y recomendaciones.",
                  "Recordatorios de Citas: Envía notificaciones para recordar las citas programadas.",
                  "Soporte de Seguimiento: Ofrece apoyo después de la consulta para asegurar que el usuario siga las recomendaciones.",
                ],
                beneficios: [
                  "Acceso rápido y conveniente a profesionales de la salud.",
                  "Ahorra tiempo y costos de transporte.",
                  "Mayor privacidad y comodidad.",
                  "Seguimiento personalizado y continuo.",
                ],
              })
            }
            className="cursor-pointer"
          >
            <ProductosDestacados
              url={"/images/Telemedicina.jpg"}
              alt={"Un doctor en un computador rodeado de herramientas medicas"}
              titulo={"Telemedicina a tu Alcance"}
            />
          </a>
        </div>
      </div>

      {/* Nuestros Servicios */}
      <div className="w-11/12 my-8" id="servicios">
        <p className="text-titulos text-3xl font-bold mb-8 ">
          Nuestros Servicios
        </p>
        <div className="flex flex-1 flex-wrap justify-between items-stretch gap-5">
          <NuestrosServicios
            url={"/images/SeguimientoPersonlizadoDelBienestar.jpg"}
            titulo={"Seguimiento Personalizado del bienestar"}
            descripcion={
              "Un servicio integral que permite a los usuarios monitorizar su progreso en diferentes áreas del bienestar y obtener análisis personalizados para mejorar su salud general."
            }
          />
          <NuestrosServicios
            url={"/images/ComunidadVirtual.jpg"}
            titulo={"Comunidad Virtual del Bienestar"}
            descripcion={
              "Un espacio virtual donde los usuarios pueden conectar con otras personas que comparten intereses similares, recibir apoyo, compartir experiencias y participar en actividades grupales."
            }
          />
          <NuestrosServicios
            url={"/images/ContenidoEducativo.jpg"}
            titulo={"Contenido Educativo Personalizado"}
            descripcion={
              "Un servicio que ofrece contenido educativo de calidad, adaptado a las necesidades y preferencias individuales del usuario."
            }
          />
        </div>
      </div>

      {/* Nuestros Planes */}
      <div className="w-11/12 my-8" id="planes">
        <p className="text-titulos text-3xl font-bold mb-8 ">Nuestros Planes</p>
        <div className="flex flex-1 flex-wrap justify-between items-stretch gap-5">
          <NuestrosServicios
            url={"/images/PlanBasico.jpg"}
            titulo={"Plan Basico"}
            precio={0}
            periodoPago={"Gratis"}
            descripcion={
              "Empieza tu viaje hacia la salud con nuestra versión gratuita, que incluye herramientas esenciales como el seguimiento básico de los sueños, meditaciones guiadas y seguimiento de los nutrientes. Descubre cómo podemos ayudarte."
            }
          />
          <NuestrosServicios
            url={"/images/PlanPlus.jpg"}
            titulo={"Plan Plus"}
            precio={20}
            periodoPago={"Cada Mes"}
            descripcion={
              "Nuestro plan Plus ofrece seguimiento avanzado de los sueños, acceso completo a nuestros planes de nutrición personalizados, apoyo comunitario adicional y cambios de estilo de vida transformadores."
            }
          />
          <NuestrosServicios
            url={"/images/PlanPremium.jpg"}
            titulo={"Plan Premium"}
            precio={40}
            periodoPago={"Cada Mes"}
            descripcion={
              "Nuestro plan Premium ofrece consultas exclusivas con profesionales de la salud, cursos de expertos, atención personalizada y contenido de alta calidad, transformando tu vida y brindando una experiencia de bienestar digital definitiva."
            }
          />
        </div>
      </div>

      {/* Sobre Nosotros */}
      <div className="w-11/12 my-8" id="nosotros">
        <SobreNosotros
          url={"/images/SobreNosotros.jpg"}
          titulo={"Mas Sobre Nuestra Página"}
          descripcion={
            "Sabemos que puede ser difícil equilibrar el trabajo, la vida social y el cuidado personal. Por eso creamos una plataforma digital que te ofrece las herramientas necesarias para mejorar tu sueño, reducir el estrés, comer de forma saludable y acceder a atención médica cuando lo necesites, todo en un mismo lugar. ¡Simplificamos tu camino hacia el bienestar!"
          }
          handleOpenModal={handleOpenAboutUsModal}
        />
      </div>

      {isModalOpen && selectedProduct && (
        <ModalProductosDestacados
          imageUrl={selectedProduct.imageUrl}
          description={selectedProduct.description}
          caracteristicas={selectedProduct.caracteristicas}
          beneficios={selectedProduct.beneficios}
          onClose={handleCloseModal}
        />
      )}

      {isAboutUsModalOpen && (
        <Modal
          isOpen={isAboutUsModalOpen}
          onClose={handleCloseAboutUsModal}
          nosotros={nosotrosText}
          objetivos={objetivosText}
          mision={misionText}
          vision={visionText}
          metas={metasList}
          eslogan={esloganText}
        />
      )}
    </div>
  );
};

export default Body;
