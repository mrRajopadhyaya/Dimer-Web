import Snackbar from "@material-ui/core/Snackbar";

interface NotificationAlertProps {
  isOpen: boolean;
  message: string;
  toggleOpen: (value: boolean) => {};
}

export default function NotificationAlert(props: NotificationAlertProps) {
  const { isOpen, message, toggleOpen } = props;

  const handleClose = () => {
    toggleOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isOpen}
        onClose={handleClose}
        message={message}
        key={"top"}
      />
    </div>
  );
}
