import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';

type PropTypes = {
id: string
}

const Portal: React.FC<PropTypes> = ({ id, children }) => {
  const target: any = usePortal(id);
  return createPortal(
    children,
    target,
  );
};

export default Portal;