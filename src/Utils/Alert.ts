import toastr from 'toastr';

type AlertType = "warning" | "success" | "error";

export const Alert = (alertType:AlertType, message:string) => {
    switch (alertType) {
        case "warning":
            toastr.success(message);
            break;

        case "success": 
            toastr.success(message);
            break;

        case "error":
            toastr.error(message);
            break;
        default:
            break;
    }
}

