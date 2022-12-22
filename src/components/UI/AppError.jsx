const AppError = (props) => {
  return <div className="mt-2 alert alert-danger">{props.errorMessage || "Sorry.... "}</div>;
};

export default AppError;
