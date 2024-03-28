import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h3 className="text-2xl font-semibold">Oops!</h3>
      <h2 className="text-4xl font-bold">{error.status}</h2>
      <p>{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorPage;