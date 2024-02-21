import React from 'react';
import './error.css'; // You can define styles for the modal in ErrorModal.css

const ErrorModal = ({ error, setError }) => {
  return (
    <>
      {error && (
        <div className='error-modal-backdrop'>
          <div className='error-modal' onClick={(e) => e.stopPropagation()}>
            <h2>Error</h2>
            <p>{error}</p>
            <div className='modal-btn' onClick={() => setError(null)}>
              OK
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
