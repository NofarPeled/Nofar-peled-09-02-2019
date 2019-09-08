import Swal from 'sweetalert2'


export default {
    handleAlarts
}
 function handleAlarts(title, type) {
    Swal.fire({
        type,
        title,
        showConfirmButton: false,
        timer: 2000
      })
}