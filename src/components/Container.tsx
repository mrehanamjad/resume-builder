import React, { ReactNode } from 'react';

interface ContainerProps {
  className?: string; 
  children: ReactNode;
}

function Container({ className,children }: ContainerProps) {
  return <div className={`w-full max-w-7xl mx-auto px-1 sm:px-4 ${className}`}>{children}</div>;
}

export default Container;
