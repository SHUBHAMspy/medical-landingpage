import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...rest
}) => {
  // Define Tailwind CSS classes based on props
  const variantClasses = {
    'primary': 'bg-blue-500 text-white',
    'secondary': 'bg-gray-500 text-white',
    'success': 'bg-green-500 text-white',
    'danger': 'bg-red-500 text-white',
  };

  const sizeClasses = {
    'small': 'px-2 py-1 text-sm',
    'medium': 'px-4 py-2 text-base',
    'large': 'px-6 py-3 text-lg',
  };

  const combinedClasses = `rounded-md focus:outline-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;