import React, { Fragment } from 'react';

import { Icon } from 'components';

const Loading = props => (
  <Fragment>
    <div className={`loading loading-${props.type}`}>
      <Icon {...props} name="spinner" className={`fa-spin loading-spinner loading-${props.size} ${props.className}`} />

      {props.text !== null && <span className="loading-text">{props.text}</span>}
    </div>
  </Fragment>
);

Loading.defaultProps = {
  size: 'medium',
  type: 'default',
  text: null,
};

export default Loading;
