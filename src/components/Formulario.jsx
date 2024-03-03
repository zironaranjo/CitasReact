import { useState,useEffect  } from "react";
import Error from "./Error";


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  
  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error,setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
       setNombre(paciente.nombre)
       setPropietario(paciente.propietario)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       setSintomas(paciente.sintomas)
    }

  },[paciente])

  




  const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha  = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /* validacion del formulario -------------------------------------*/

    if([nombre,propietario,email,fecha,sintomas].includes('')){
      

      setError(true)

      return;

    }

      setError(false) 

      // Objeto paciente.............................................../

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
      }
        
      if(paciente.id){
        // 'editando'
       objetoPaciente.id= paciente.id
       

       const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes (pacientesActualizados)
        setPaciente({})

      }else{

        // 'nuevo registro'
       objetoPaciente.id= generarId()
       setPacientes([...pacientes,objetoPaciente]);
      }


       

       //reiniciar el form..............
       
       setNombre('') 
       setPropietario('')
       setEmail('')
       setFecha('')
       setSintomas('')


  }
  





return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-2xl text-center'>CLIENTES</h2>

      <p className='text-lg mt-5 text-center mb-7 font-bold text-black'>
        Añade clientes y {''}
        <span className='text-black font-bold text-2xl'>Administralos</span>
      </p>
      <form
      onSubmit={handleSubmit}
      className='bg-blue-400 shadow-md rounded-lg py-10 px-5 mx-5'
      >

       { error && <Error>

            <h1>Ziro</h1>
            <p>todos los campos son obligatorios</p>

                </Error> }
 
        
        <div className='mb-5'>

          <label htmlFor='nombre' className='block text-gray-700 font-bold uppercase'>
            Nombre Cliente
             </label>
          <input
          id='nombre'
          type='text'
          placeholder='nombre'
          className='border-2 rounded-md mt-3 w-full p-2 placeholder-gray-400'
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>
            Propietario
             </label>
          <input
          id='propietario'
          type='text'
          placeholder='Propietario'
          className='border-2 rounded-md mt-3 w-full p-2 placeholder-gray-400'
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>
            Email
             </label>
          <input
          id='email'
          type='email'
          placeholder='email contacto'
          className='border-2 rounded-md mt-3 w-full p-2 placeholder-gray-400'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>
            Alta
             </label>
          <input
          id='alta'
          type='date'
          className='border-2 rounded-md mt-3 w-full p-2 placeholder-gray-400'
          value={fecha}
          onChange={(e)=> setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>
            Sintomas
             </label>
          <textarea 
          id='sintomas'
          className='border-2 rounded-md mt-3 w-full p-2 placeholder-gray-400'
          placeholder='Describe lo que Quieres'
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>

        <input 
         type='submit'
         className='bg-black w-full rounded-lg p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-shadow '
         value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        
        />

      </form>
    </div>
  )
}


export default Formulario
