import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useAppContext } from "../../services/provider";
import { useEffect, useState } from "react";

const ToastComponent = () => {
  const { myAlert, dispatch } = useAppContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (myAlert?.message) {
      setShow(true);
    }
  }, [myAlert]);

  const handleClose = () => {
    setShow(false);
    dispatch({
      type: "ALERT",
      value: {
        error: "",
        message: null,
      },
    });
  };

  return (
    <>
      {myAlert && (
        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position="bottom-end"
          style={{ zIndex: 1031 }}
        >
          <Toast show={show} delay={3000} onClose={handleClose} autohide>
            <Toast.Header>
              <strong className="me-auto">Ol Software</strong>
            </Toast.Header>
            <Toast.Body>
              <Alert variant={myAlert.error ? "danger" : "success"}>
                {myAlert.message}
              </Alert>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
};

export { ToastComponent };
