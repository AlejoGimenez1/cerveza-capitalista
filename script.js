<script>
  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');
    const sonidoApto = document.getElementById('sonido-apto');
    const sonidoNoApto = document.getElementById('sonido-noapto');
    const etapaFinal = document.getElementById('etapa-final');
    const historia = document.getElementById('historia-cerveza');

    formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      let respuestasCorrectas = 0;
      const respuestas = new FormData(formulario);

      for (let value of respuestas.values()) {
        if (value === "correcto") {
          respuestasCorrectas++;
        }
      }

      if (respuestasCorrectas >= 4) {
        resultado.textContent = "¡Perfecto! Se nota que agarras la pala, o sea digamos ... Podes tomar la cerveza. Fin.";
        resultado.style.color = "green";
        sonidoApto.play();
        etapaFinal.style.display = "block";

        // Asegurar que la historia se muestre correctamente
        setTimeout(() => {
          historia.style.display = "block";
          historia.style.opacity = "1"; // Aparece con transición si está en el CSS
        }, 1000);

      } else {
        resultado.textContent = "No apto/a, o sea digamos... Te aconsejo agarrar la pala de vez en cuando. Fin.";
        resultado.style.color = "red";
        sonidoNoApto.play();
        etapaFinal.style.display = "none"; // Ocultar todo
        historia.style.display = "none";   // Por si estaba visible antes
        historia.style.opacity = "0";
      }
    });

    // Efecto visual en opciones seleccionadas
    document.querySelectorAll('fieldset').forEach(fieldset => {
      const labels = fieldset.querySelectorAll('label');
      labels.forEach(label => {
        label.addEventListener('click', () => {
          labels.forEach(l => l.classList.remove('seleccionada'));
          label.classList.add('seleccionada');
        });
      });
    });
  });
</script>
