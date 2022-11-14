import React from 'react';

const FormError = ({ touched, message }) => {
  if (!touched) {
    return <div className="empty"></div>;
  }
  if (message) {
    return <div className="message">{message}</div>;
  }
  return <div className="valid"></div>;
};

export default FormError;