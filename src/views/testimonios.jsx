import { IoMdStar } from "react-icons/io";


const stars = {
    starsFive: (<><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></>),
    starsFour: (<><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></>),
}

const testimonio_Data = [
    {
        texto: "Las invitaciones fueron elegantes y fáciles de enviar. Todos amaron el diseño.",
        nombre: "Laura G."
    },
    {
        texto: "Increíble servicio, las invitaciones se destacaron y fueron muy prácticas.",
        nombre: "Daniel P."
    },
    {
        texto: "Eficiente y ecológico, una manera moderna de invitar a mis seres queridos.",
        nombre: "Marta R."
    },
    {
        texto: "Sorprendentemente sencillo, ahorra tiempo y dinero. ¡Muy recomendado!",
        nombre: "Javier E."
    },
    {
        texto: "Estilo único y personalizable, capturaron perfectamente la esencia de nuestro evento.",
        nombre: "Sofía C."
    },
    {
        texto: "Gran impacto a pequeño precio, las invitaciones virtuales son el futuro.",
        nombre: "Carlos T."
    }
]


const Testimonios = () => {


    return (
        <>
            <div className="my-20">
                <h1 className="pl-5 font-now text-marron text-2xl uppercase">Testimonios</h1>
                <div className="flex flex-nowrap overflow-x-auto py-10 custom-scrollbar ">
                    {testimonio_Data.map((testimonio, index) => (
                        <div key={testimonio.id} className="h-[150px] p-5 bg-cafecito mx-5 rounded-3xl hover:shadow-lg">
                            <div className="flex flex-row justify-center text-marron pb-2">{stars.starsFive}</div>
                            <p className="font-rasputin text-marron w-[200px] text-sm">{testimonio.texto}</p>
                            <h3 className="font-now text-marron flex justify-end text-xs">{testimonio.nombre}</h3>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
};

export default Testimonios;