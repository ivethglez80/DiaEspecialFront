import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const OrderForm = ({modelo}) => {

    console.log("modelos es,", modelo);

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        whatsapp: "",
        consulta: "",
        novia: "",
        novio: "",
        eventoFecha: "",
        eventoHora: "",
        eventoLugar: "",
        wppConf: "",
        dresscode: "",
        bancoNombre: "",
        alias: "",
        cbu: "",
        modelo:modelo,
    })

    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001"; // con vite

    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            whatsapp: state.whatsapp,
            consulta: state.consulta,
            novia: state.novia,
            novio: state.novio,
            eventoFecha: state.eventoFecha,
            eventoHora: state.eventoHora,
            eventoLugar: state.eventoLugar,
            wppConf: state.wppConf,
            dresscode: state.dresscode,
            bancoNombre: state.bancoNombre,
            alias: state.alias,
            cbu: state.cbu,
            modelo: modelo
        }

        const res = await fetch(`${baseUrl}/send-email`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                if (res.status > 199 && res.status < 300) {
                    alert("Su consulta fue enviada, nos comunicaremos a la brevedad, gracias!")
                }
            })
    }

    const clearForm = () => {
        setState({
            nombre: "",
            apellido: "",
            email: "",
            whatsapp: "",
            consulta: "",
            novia: "",
            novio: "",
            eventoFecha: "",
            eventoHora: "",
            eventoLugar: "",
            wppConf: "",
            dresscode: "",
            bancoNombre: "",
            alias: "",
            cbu: "", 
            modelo:""
        });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log("name", name, "value", value);
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        await sendEmail();
        clearForm();
    }

    return (
        <>
            <div className="pr-4">
                <h1 className="font-now text-[#9D5A4D] uppercase text-lg pt-6">Formulario</h1>
                <form onSubmit={handleSubmit}>

                    <h2 className="font-rasputin text-[#9D5A4D] uppercase text-xs pt-4"> en esta seccion Completa con los datos de la persona que hace el pedido</h2>
                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">nombre</label>
                        <input type="text" name="nombre" value={state.nombre} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">apellido</label>
                        <input type="text" name="apellido" value={state.apellido} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">email</label>
                        <input type="email" name="email" value={state.email} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">whatsapp</label>
                        <input type="text" name="whatsapp" value={state.whatsapp} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>


                    <h2 className="font-rasputin text-[#9D5A4D] uppercase text-xs pt-16"> ahora en esta seccion Completa con los datos referentes al evento</h2>
                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">Nombre de la novia | Quinceañera | Cumpleañero/a</label>
                        <input type="text" name="novia" value={state.novia} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>
                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">Nombre del novio</label>
                        <input type="text" name="novio" value={state.novio} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-1/2 flex flex-col pt-2 md:px-0">
                            <label className="font-rasputin text-[#9D5A4D]">Fecha del evento</label>
                            <DatePicker
                                selected={state.eventoFecha}
                                onChange={(date) => setState({ ...state, eventoFecha: date })}
                                className="rounded-sm shadow-md text-[#9D5A4D]"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col pt-2 md:px-0">
                            <label className="font-rasputin text-[#9D5A4D]">Hora del evento</label>
                            <select
                                name="eventoHora"
                                value={state.eventoHora}
                                onChange={handleInput}
                                className="rounded-sm shadow-md text-[#9D5A4D]"
                            >
                                <option value="">Selecciona la hora</option>
                                {Array.from({ length: 48 }, (_, index) => {
                                    const hour = Math.floor(index / 2);
                                    const minute = index % 2 === 0 ? '00' : '30';
                                    return `${hour.toString().padStart(2, '0')}:${minute}`;
                                }).map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">Direcion de la celebracion</label>
                        <input type="text" name="eventoLugar" value={state.eventoLugar} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>
                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">WhastApp para confirmar asistencia</label>
                        <input type="text" name="wppConf" value={state.wppConf} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>
                    <div className="w-1/2 flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">Estilo del evento</label>
                        <select
                            name="eventoEstilo"
                            value={state.eventoEstilo}
                            onChange={handleInput}
                            className="rounded-sm shadow-md text-[#9D5A4D]"
                        >
                            <option value="">Selecciona el estilo</option>
                            <option value="Elegante">Elegante</option>
                            <option value="Formal">Formal</option>
                            <option value="Casual">Casual</option>
                            <option value="Familiar">Familiar</option>
                            
                        </select>
                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">Nombre de banco para realizar regalos</label>
                        <input type="text" name="bancoNombre" value={state.bancoNombre} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="w-1/2 flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">alias:</label>
                        <input type="text" name="alias" value={state.alias} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>
                    <div className="w-1/2 flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">CBU</label>
                        <input type="text" name="cbu" value={state.cbu} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>
                    </div>

                    <div className="flex flex-col pt-2 md:px-0">
                        <label className="font-rasputin text-[#9D5A4D]">comentarios:</label>
                        <textarea name="consulta" value={state.consulta} onChange={handleInput} className="rounded-sm shadow-md text-[#9D5A4D]" />
                    </div>

                    <div className="flex justify-end pt-5 md:pr-0">
                        <button type="submit" className="bg-[#9D5A4D] hover:bg-cafe2 hover:text-[#9D5A4D] font-now text-white uppercase px-4 rounded-lg md:text-lg hover:border hover:border-[#9D5A4D]">Enviar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default OrderForm;