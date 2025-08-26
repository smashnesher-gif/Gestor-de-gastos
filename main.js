console.log("main.js cargado correctamente");

// Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,        // 🔹 Tamaño fijo
    maintainAspectRatio: false
  }
});

// SweetAlert2
document.getElementById('alertBtn').addEventListener('click', () => {
  Swal.fire({
    title: '¡Hola!',
    text: 'Esta es una alerta usando SweetAlert2',
    icon: 'info',
    confirmButtonText: 'Aceptar'
  });
});

// Day.js
const fechaHoy = dayjs().format('dddd, DD [de] MMMM YYYY');
document.getElementById('fecha').textContent = `Hoy es ${fechaHoy}`;
