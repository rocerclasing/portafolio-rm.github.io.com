"use client"; // Asegúrate de que esta línea esté al inicio del archivo

const MyComponent = () => {
  const handleCV = () => {
    // Redirige a la URL del CV
    const pdfUrl = "/utils/RobertClasing.pdf"; // Asegúrarse de que la ruta sea correcta
    window.open(pdfUrl, "_blank"); 
    console.log("CV clicked");
  };

  return (
    <button
      className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 m-4"
      onClick={handleCV}
    >
      See CV
    </button>
  );
};

export default MyComponent;
