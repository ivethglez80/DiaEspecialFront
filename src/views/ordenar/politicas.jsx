

const Politicas = () => {
    return (
        <>
            <div>
                <h2 className="font-bold">Forma de pago</h2>
                <ul className="list-disc pl-10">
                    <li className="text-xs">50% al ordenar</li>
                    <li className="text-xs">50% a la entrega</li>
                </ul>

                <h2 className="font-bold">Condiciones</h2>
                <p className="text-xs pl-6">Su orden es un compromiso de compra.</p>
                <p className="text-xs pl-6">Es responsabilidad del cliente proveer de la informacion y materiales audiovisuales necesarios para el correcto desarrollo del diseño de su invitacion dentro de los siguientes 5 dias habiles a haber realizado la orden</p>
                <p className="font-bold text-xs">Cambios despues de la entrega:</p>
                <p className="text-xs pl-6">* Podra hacer hasta dos cambios no estructurales sin costo</p>
                <p className="font-bold text-xs">Ordenar aunque falte mucho para el evento o me falten datos/material audiovisual?:</p>
                <p className="text-xs pl-6">Seguro! al realizar la compra congelas el precio de tu invitacion, despues coordinaremos los por privado</p>
                <p className="font-bold text-xs">Devoluciones:</p>
                <p className="text-xs pl-6">Como todos los productos digitales no hay devolucion bajo ninguna circunstancia</p>
            </div>
        </>
    )
}

export default Politicas;