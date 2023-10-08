import Swal from "sweetalert2";

const swalManager = (title, text, isDialog) => {
    return isDialog ? Swal.fire({
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "No"
    }, (isConfirm) => {
        if (isConfirm) {
            Swal(title, `${title} was successfull`, "success");
        } else {
            Swal(title, `Error! ${title} was failed!`, "error");
        }
    }) :
        Swal.fire({
            title: title,
            text: text,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "ok"
        })
}

export default swalManager;

