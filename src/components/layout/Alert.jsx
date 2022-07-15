import { useContext } from 'react';
import AlertContext from '../../context/alert/ALertContext';
import { FaExclamationCircle } from 'react-icons/fa';
function Alert() {
  const { alert } = useContext(AlertContext);
  console.log(alert);
  return (
    alert !== null && (
      <>
        <p className="flex items-start mb-4 space-x-2">
          {alert.type === 'error' && (
            <FaExclamationCircle className="text-red-600 text-3xl" />
          )}
          <p className="flex-1 text-base font-semibold align-middle text-white">
            <strong>{alert.msg}</strong>
          </p>
        </p>
      </>
    )
  );
}

export default Alert;
