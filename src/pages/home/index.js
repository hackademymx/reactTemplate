import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
let urlApi = "https://jsonplaceholder.typicode.com/users";

export const Home = () => {
  const navigate = useNavigate();
  // Cargando la petición a la API
  const [loading, setLoading] = useState(false);
  // Error
  const [error, setError] = useState(false);
  // Data
  const [data, setData] = useState(null);

  const getUsers = async () => {
    setError(false); // Si teniamos algún error previamente
    setLoading(true); // Activamos la pantalla de carga
    // Hacemos la llamada a nuestro backend
    fetch(urlApi)
      // Then en Javascript es para "entonces"
      .then((response) => {
        // Tomamos la respuesta del backend (es la response)
        if (response.ok) {
          // Si la respuesta es correcta
          // Regresamos la info transformada a json
          return response.json();
        } else {
          // Si no es correcta, ponemos nuestro error en true
          setError(true);
          // Quitamos la carga
          setLoading(false);
          // Regresamos el error por default
          return new Error(response.data);
        }
      })
      .then((data) => {
        // Entonces si todo ha salido bien podemos trabajar con la data del backend
        // Quitamos la carga
        setLoading(false);
        // Guardamos la info
        setData(data);
      })
      .catch((error) => {
        // Si tenemos algún error en nuestro codigo guardamos el error
        setLoading(false);
        setError(true);
      });
  };
  const renderUsers = () => {
    return (
      <tbody>
        {data?.map((item, key) => (
          <tr key={key}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button
                onClick={() => {
                  navigate(`/edit/${item.id}`);
                }}
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="page__container">
      {loading ? (
        <span>Cargando...</span>
      ) : error ? (
        <span>Ha ocurrido un error</span>
      ) : (
        <>
          <h1>Listado de users</h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            {renderUsers()}
          </table>
        </>
      )}
    </div>
  );
};
