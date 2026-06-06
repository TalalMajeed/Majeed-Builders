import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
};

type ButtonProps = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type LinkProps = BaseProps & {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-amber-700 text-white hover:bg-amber-800 active:bg-amber-900 shadow-sm',
  secondary:
    'bg-stone-900 text-white hover:bg-stone-800 active:bg-stone-700 shadow-sm',
  outline:
    'border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white active:bg-amber-800',
  ghost:
    'text-stone-700 hover:bg-stone-100 active:bg-stone-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

function getClasses(variant: ButtonVariant, size: ButtonSize, fullWidth?: boolean, className?: string, disabled?: boolean) {
  return [
    'inline-flex items-center justify-center gap-2 font-semibold rounded-none tracking-wide transition-all duration-200 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
}

export default function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    disabled,
    className,
    fullWidth,
  } = props;

  const classes = getClasses(variant, size, fullWidth, className, disabled);

  if ('href' in props && props.href !== undefined) {
    const { href, onClick, external } = props;
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = 'button' } = props as ButtonProps;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
