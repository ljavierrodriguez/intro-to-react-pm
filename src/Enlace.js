import React from 'react';
import PropTypes from 'prop-types';

export const Enlace = ({ href, className, texto }) => {
    return (
        <a href={href} className={className}>{texto}</a>
    )
}

Enlace.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    texto: PropTypes.string.isRequired,
    edad: PropTypes.number
}