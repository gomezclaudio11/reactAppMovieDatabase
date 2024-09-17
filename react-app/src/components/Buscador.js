import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Buscador = () => {
    let navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()
        
        if (keyword.length === 0){
            const notify = () => toast('Tienes que escribir el nombre de una pelicula', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                notify()
        } else if (keyword.length < 4) {
            const notify = () => toast('Tienes que escribir mas de 4 caracteres', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                notify()
        } else {
            e.currentTarget.keyword.value= " ";
            navigate(`/resultados?keyword=${keyword}`)
        }
        
    }
    return (
        <>
        <Form className='d-flex align-items-center' onSubmit={submitHandler}>
            <label className='form-label mb-0 mx-2'>
                <input className='form-control' type="text" name="keyword" placeholder='Busca tu pelicula'></input>
            </label>
            <Button className='btn btn-success ' type="submit">
              Buscar
            </Button>
             </Form>
             </>
             )
}

export default Buscador;
