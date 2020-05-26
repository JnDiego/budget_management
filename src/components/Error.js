import React from 'react';

const Error = ({ message }) => <p className="alert alert-danger error">{`There was an error: ${message}.`}</p>;

export default Error;
