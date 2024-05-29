function Button({ className, children, onClick, style }) {
  return (
    <div
      className={`${className} text-[1.4rem] font-bold  rounded-[100rem]`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

export default Button;
