function Button({
  className,
  children,
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className={`${className} text-[1.4rem] font-bold rounded-[100rem] cursor-pointer`}
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

export default Button;
