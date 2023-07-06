import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
