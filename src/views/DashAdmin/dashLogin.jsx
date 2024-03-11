import { useState } from "react";
import { useNavigate } from "react-router-dom"



const DashLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleDashLogin = async () => {
        const verifiedUser = import.meta.env.VITE_USER;
        const verifiedPassword = import.meta.env.VITE_PASSWORD;

        if ( userName === verifiedUser && password === verifiedPassword){
            const userToken = 'tokenOk'
            localStorage.setItem('userToken', userToken);            
            navigate('/admin');
        }else{
            setUserName("");
            setPassword("");
            alert ("Credenciales incorrectas");
        }
    };

    return (
        <>
        <div className="flex justify-center pt-40 bg-gray-600">
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
            <button onClick={handleDashLogin} className="btn-silver w-[100px] mt-8">DashLogin</button>
            </div>
        </div>
        </div>
        </>
    )

}

export default DashLogin;