'use client';

import { forwardRef } from 'react';

type FormFieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FormField({ label, error, required, children, className }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label className="text-sm font-semibold text-stone-800 uppercase">
        {label}
        {required && <span className="text-amber-700 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1.5">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={[
          'w-full px-4 py-3 bg-white border text-stone-900 placeholder:text-stone-400 text-sm',
          'focus:outline-none focus:ring-[1px] focus:ring-amber-700 focus:ring-offset-0 focus:border-amber-700',
          'transition-colors duration-150',
          error ? 'border-red-500' : 'border-stone-300',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={[
          'w-full px-4 py-3 bg-white border text-stone-900 placeholder:text-stone-400 text-sm resize-none',
          'focus:outline-none focus:ring-[1px] focus:ring-amber-700 focus:ring-offset-0 focus:border-amber-700',
          'transition-colors duration-150',
          error ? 'border-red-500' : 'border-stone-300',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, options, placeholder, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={[
          'w-full px-4 py-3 bg-white border text-stone-900 text-sm appearance-none cursor-pointer',
          'focus:outline-none focus:ring-[1px] focus:ring-amber-700 focus:ring-offset-0 focus:border-amber-700',
          'transition-colors duration-150',
          error ? 'border-red-500' : 'border-stone-300',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);
Select.displayName = 'Select';
