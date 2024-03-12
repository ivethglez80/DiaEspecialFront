import { useDispatch } from "react-redux";
import { postModelo } from "../../redux/actions";
import { useState } from "react";
import axios from "axios";



const NewModelo = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        "imagen": "",
        "nombre_modelo": "",
        "ocasion": "",
        "tipo": "",
        "urlSample": ""
    })

    const [imgFile, setImgFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const imgbbApiKey = import.meta.env.VITE_imgbbApiKey;
    const imgbbUploadUrl = import.meta.env.VITE_imgbbUploadUrl;


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log("property", property, "value", value);

        setForm({ ...form, [property]: value });
    }

    const selectImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

            // Validaciones (ejemplo: tamaño menor a 5MB y formato jpg/png)
            if (file.size > 5242880) {
                alert("El archivo es demasiado grande (max. 5MB).");
                return;
            }
            if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
                alert("Solo se permiten imágenes en formato JPG o PNG.");
                return;
            }

            setImgFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImgUrl(previewUrl); // Para la vista previa
        }
    };

    const handleImgUpload = async () => {
        if (imgFile) {
            console.log("esta es imgfile", imgFile);
            try {
                const formData = new FormData();
                formData.append("key", imgbbApiKey);
                formData.append("image", imgFile);

                console.log("imgbbUploadUrl:", imgbbUploadUrl);
                formData.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });

                const response = await axios.post(imgbbUploadUrl, formData);
                console.log("tipo de imagen", typeof (response.data.data.url));
                setForm({ ...form, imagen: response.data.data.url });
                URL.revokeObjectURL(imgUrl);

                // Llamada a la función de envío después de cargar la imagen
            } catch (error) {
                console.error("error al subir la imagen a imgbb:", error);
                // Manejo adecuado del error
            }
        }
    };


    const clearForm = () => {
        setForm({
            "imagen": "",
            "nombre_modelo": "",
            "ocasion": "",
            "tipo": "",
            "urlSample": ""
        });
        setImgFile(null);
        setImgUrl("");
    };

    const submitHandler = () => {
        console.log("datos en form:", form);
        dispatch(postModelo(form))
            .then(res => {
                clearForm();
            })
            .catch(err => alert(err))
    };






    return (
        <>
            <div>
                <p className="font-fuente2 tracking-widest pb-4 pt-2 text-center text-3xl">Ingresar nuevo modelo:</p>
                <div className="h-screen md:flex md:justify-center border border-b-color1">
                    <div className="flex flex-col md:flex-row">
                        <div className="">
                            <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <div className="w-[150px] h-[150px] bg-color3 flex items-center justify-center">
                                        {imgUrl ? (
                                            <div className="">
                                                <img src={imgUrl} alt="Vista previa" />
                                            </div>
                                        ) : (
                                            form.imagen ? (
                                                <div className="">
                                                    <img src={form.imagen} alt="Vista previa" />
                                                </div>
                                            ) : null
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <input type="file" accept="image/*" onChange={selectImage} name="imagen" />
                                </div>
                                <div className="flex justify-center md:w-[300px]">
                                    <button onClick={handleImgUpload} className="py-4 underline text-sm px-16 md:text-xs">importante: click aqui para aceptar y guardar Imagen</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mx-12">
                            <input type="text" value={form.nombre_modelo} onChange={changeHandler} name="nombre_modelo" placeholder="Ingresa el nombre del modelo"
                                className="mb-4 pl-2 py-2 rounded-3xl font-fuente4 text-color3 text-xs" />

                            <select
                                value={form.ocasion}
                                onChange={changeHandler}
                                name="ocasion"
                                className="mb-4 pl-2 py-2 rounded-3xl font-fuente4 text-color3 text-xs"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Boda">Boda</option>
                                <option value="Quince">Quince</option>
                                <option value="Dulces">Dulces</option>
                                <option value="Infantil">Infantil</option>
                                <option value="Cumple">Cumpleaños</option>
                                <option value="Otros">Otros</option>
                            </select>

                            <select
                                value={form.tipo}
                                onChange={changeHandler}
                                name="tipo"
                                className="mb-4 pl-2 py-2 rounded-3xl font-fuente4 text-color3 text-xs"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Basica">Basica</option>                                
                            </select>
                          

                            <input type="text" value={form.urlSample} onChange={changeHandler} name="urlSample" placeholder="Ingresa el URL para la vista previa"
                                className="mb-4 pl-2 py-2 rounded-3xl font-fuente4 text-color3 text-xs" />

                            <div className="flex justify-center pt-6">
                                <button onClick={submitHandler} className="border border-color1 hover:bg-gray-700 rounded-full w-[160px] sm:w-[250px] font-fuente4 text-color1">Finalizar y enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NewModelo;