const variants = {
  primary:
    'bg-[#d9582a] hover:bg-[#c04420] text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-transparent border-2 border-[#d9582a] text-[#d9582a] hover:bg-[#d9582a] hover:text-white',
  ghost:
    'bg-transparent text-[#d9582a] hover:bg-[#fdf4f0] underline-offset-4 hover:underline',
  blue:
    'bg-[#3a9bf5] hover:bg-[#217dea] text-white shadow-md hover:shadow-lg',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={[
        'inline-flex items-center justify-center gap-2 font-semibold rounded-full',
        'transition-all duration-200 cursor-pointer focus-visible:outline-2',
        'focus-visible:outline-offset-2 focus-visible:outline-[#d9582a]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
