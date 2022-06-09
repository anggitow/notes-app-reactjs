const Button = ({ type, variant, children, className, onClick }) => {
  const variants = {
    default: "btn",
    ghost: "btn-active btn-ghost",
    info: "btn-info",
    delete: "btn-outline btn-error",
  };

  const pickedVariant = variants[variant];
  return (
    <button
      type={type}
      className={`btn btn-sm ${pickedVariant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
