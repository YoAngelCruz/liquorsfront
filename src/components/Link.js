import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.destilado} ({link.nombre})
      </div>
    </div>
  );
};

export default Link;