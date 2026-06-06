'use client';

import { forwardRef, useState, useRef, useEffect } from 'react';

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

type SelectProps = {
  error?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

export function Select({ error, options, placeholder, value, onChange, className, disabled }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={[
          'w-full px-4 py-3 bg-white border text-sm text-left flex items-center justify-between cursor-pointer',
          'focus:outline-none focus:ring-[1px] focus:ring-amber-700 focus:ring-offset-0 focus:border-amber-700',
          'transition-colors duration-150',
          error ? 'border-red-500' : open ? 'border-amber-700' : 'border-stone-300',
          selected ? 'text-stone-900' : 'text-stone-400',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span>{selected ? selected.label : (placeholder ?? 'Select...')}</span>
        <svg
          className={`w-4 h-4 text-stone-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-50 w-full bg-white border border-stone-300 shadow-lg mt-0.5 max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
              className={[
                'px-4 py-3 text-sm cursor-pointer flex items-center justify-between',
                'hover:bg-amber-50 hover:text-amber-900 transition-colors duration-100',
                opt.value === value ? 'bg-amber-50 text-amber-900 font-medium' : 'text-stone-800',
              ].join(' ')}
            >
              {opt.label}
              {opt.value === value && (
                <svg className="w-4 h-4 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
