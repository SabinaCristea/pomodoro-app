function Button({ className, children, onClick }) {
  return (
    <div
      className={`${className} text-[1.4rem] font-bold px-[2.5rem] py-[1.5rem] rounded-[100rem]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
