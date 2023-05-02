import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $destilado: String!,
    $nombre: String!,
    $description: String!,
    $paisOrigen: String!,
    $size: String!,
    $tipoEnvase: String!,
    $edicion: String!,
    $precio: Float!,
    ){
      createLiquor(destilado: $destilado,nombre: $nombre,description: $description,paisOrigen: $paisOrigen,size: $size,tipoEnvase: $tipoEnvase,edicion: $edicion,precio: $precio) {
        id
        destilado
        nombre
        description
        paisOrigen
        size
        tipoEnvase
        edicion
        precio
     }
    }
`;

const CreateLink = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        destilado: '',
        nombre: '',
        description: '',
        paisOrigen: '',
        size: '',
        tipoEnvase: '',
        edicion: '',
        precio: 0,
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            destilado: formState.destilado,
            nombre: formState.nombre,
            description: formState.description,
            paisOrigen: formState.paisOrigen,
            size: formState.size,
            tipoEnvase: formState.tipoEnvase,
            edicion: formState.edicion,
            precio: formState.precio,
        },
        onCompleted: () => navigate('/')
    });


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.destilado}
            onChange={(e) =>
              setFormState({
                ...formState,
                destilado: e.target.value
              })
            }
            type="text"
            placeholder="Destilado"
          />
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del licor"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Descripcion"
          />
          <input
            className="mb2"
            value={formState.paisOrigen}
            onChange={(e) =>
              setFormState({
                ...formState,
                paisOrigen: e.target.value
              })
            }
            type="text"
            placeholder="Pais de origen"
          />
          <input
            className="mb2"
            value={formState.size}
            onChange={(e) =>
              setFormState({
                ...formState,
                size: e.target.value
              })
            }
            type="text"
            placeholder="tamaño"
          />
          <input
            className="mb2"
            value={formState.tipoEnvase}
            onChange={(e) =>
              setFormState({
                ...formState,
                tipoEnvase: e.target.value
              })
            }
            type="text"
            placeholder="Tipo de envase"
          />
          <input
            className="mb2"
            value={formState.edicion}
            onChange={(e) =>
              setFormState({
                ...formState,
                edicion: e.target.value
              })
            }
            type="text"
            placeholder="Edicion del licor"
          />
          <input
            className="mb2"
            value={formState.precio}
            onChange={(e) =>
              setFormState({
                ...formState,
                precio: e.target.value
              })
            }
            type="number"
            placeholder="Precio en el mercado"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;