import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  liquors{
    id,
    destilado,
    nombre,
    description,
    edicion,
    fechaIngreso,
    precio,
    url
  }
}
`
;
const LinkList = () => {
    
    const { data } = useQuery(FEED_QUERY);
  
    return (
      <div>
        {data && (
          <>
            {data.liquors.map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </>
        )}
      </div>
    );
  };

export default LinkList;