import Paciente from "./Paciente"


const Listadopacientes = ({pacientes,setpaciente,eliminarPaciente}) => {


  return (

    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

      <>

<h2 className="font-black text-2xl text-center ">Listadopacientes</h2>
      <p className="text-center  mt-5 mb-7 text-xl">
        Administra tus {''}
        <span className="text-black font-bold mb-5 ">
          Clientes y Citas
        </span>
      </p>

      { pacientes.map( paciente =>( 

        <Paciente

          key={paciente.id}
          paciente={paciente}
          setpaciente={setpaciente}
          eliminarPaciente={eliminarPaciente}
          />  

      )) }   

       </>

      ) : (

          <>
   <h2 className="font-black text-2xl text-center ">No hay pacientes</h2>
      <p className="text-center font-bold  mt-5 mb-7 text-lg text-black">
        Comienza agregando pacientes {''}
        <span className="text-black font-bold mb-5 ">
          Apareceran en este lugar
        </span>
      </p>

          </>
      )}

      </div>

     )
}


export default Listadopacientes
