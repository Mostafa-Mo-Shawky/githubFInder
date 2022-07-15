import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <img src={spinner} className="w-40" alt="Loading" />
    </div>
  );
}

export default Spinner;
