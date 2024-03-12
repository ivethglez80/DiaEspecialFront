import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        // Limpia el token del usuario al cerrar la ventana del navegador
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    const handleBeforeUnload = () => {
        localStorage.removeItem('userToken');
    };

    const handleDashLogin = async () => {
        const verifiedUser = import.meta.env.VITE_USER;
        const verifiedPassword = import.meta.env.VITE_PASSWORD;

        if (userName === verifiedUser && password === verifiedPassword) {
            const userToken = 'tokenOk'
            localStorage.setItem('userToken', userToken);            
            navigate('/admin');
        } else {
            setUserName("");
            setPassword("");
            alert("Credenciales incorrectas");
        }
    };

    return (
        <>
        <div className="flex justify-center pt-40 bg-gray-600 h-screen">
        <div className="flex flex-col">
            <div className="pb-6">
                <h1 className="font-fuente1 text-color1 text-2xl uppercase text-center">Ingresar a <br/> panel de control</h1>
            </div>
            <div className="mb-6">                
            <p className="font-fuente1 text-color1 text-xl ">userName</p>
            <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} className="bg-color3 font-fuente1 text-color2 text-2xl"/>
            </div>
            <div>                
            <p className="font-fuente1 text-color1 text-xl ">Password</p>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-color3 font-fuente1 text-color2 text-2xl"/>
            </div>
            <div className="flex justify-center">
            <button onClick={handleDashLogin} className="bg-white w-[100px] mt-8 hover:bg-gray-400 rounded-xl">Login</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default DashLogin;
