function Button({ className, children, onClick }) {
  return (
    <div
      className={`${className} text-[1.4rem] font-bold  rounded-[100rem]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
