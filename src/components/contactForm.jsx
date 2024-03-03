import { useState } from "react";


const ContactForm = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        whatsapp:"",        
        consulta: ""
    })

    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001"; // con vite

    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            whatsapp: state.whatsapp, 
            consulta: state.consulta
        }

        const res = await fetch(`${baseUrl}/sendEmail`,{
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res)=>{
            console.log(res);
            if(res.status > 199 && res.status < 300 ){
                alert ("Su consulta fue enviada, nos comunicaremos a la brevedad, gracias!")
            }
        })
    }

const clearForm = () =>{
    setState({
        nombre: "",
        apellido: "",
        email: "",
        whatsapp:"",
        consulta: ""
      });
}

const handleInput = (e) => {
    const { name, value } = e.target;
    console.log("name",name,"value",value);
    setState((prevProps) => ({
        ...prevProps,
        [name]: value
    }));
};

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(state);
    await sendEmail();
    clearForm();
}

    return (
        <>
        <div>
            <h1 className="font-now text-marron uppercase text-lg pl-10 pt-6">Envianos tu consulta:</h1>
            <form onSubmit={handleSubmit}>

                <div className="flex flex-col px-10 pt-2 md:px-0">
                    <label className="font-rasputin text-marron">nombre</label>
                    <input type="text" name="nombre" value={state.nombre} onChange={handleInput} className="rounded-sm shadow-md text-marron"/>
                </div>

                <div className="flex flex-col px-10 pt-2 md:px-0">
                    <label className="font-rasputin text-marron">apellido</label>
                    <input type="text" name="apellido" value={state.apellido} onChange={handleInput} className="rounded-sm shadow-md text-marron"/>
                </div>

                <div className="flex flex-col px-10 pt-2 md:px-0">
                    <label className="font-rasputin text-marron">email</label>
                    <input type="email" name="email" value={state.email} onChange={handleInput} className="rounded-sm shadow-md text-marron"/>
                </div>

                <div className="flex flex-col px-10 pt-2 md:px-0">
                    <label className="font-rasputin text-marron">whatsapp</label>
                    <input type="number" name="whatsapp" value={state.whatsapp} onChange={handleInput} className="rounded-sm shadow-md text-marron"/>
                </div>

                <div className="flex flex-col px-10 pt-2 md:px-0">
                    <label className="font-rasputin text-marron">consulta</label>
                    <textarea name="consulta" value={state.consulta} onChange={handleInput} className="rounded-sm shadow-md text-marron"/>
                </div>

                <div className="flex justify-end pr-10 pt-5 md:pr-0">
                    <button type="submit" className="bg-marron hover:bg-cafe2 hover:text-marron font-now text-white uppercase px-4 rounded-lg md:text-lg">Enviar</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default ContactForm;