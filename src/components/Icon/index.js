import React from 'react';

const Icon = (props) => <i  {...props} className={`fa fa-${props.name} ${props.className}`} />;

Icon.defaultProps = {
  name: 'users',
};

export default Icon;
