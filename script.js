<script>
  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');
    const sonidoApto = document.getElementById('sonido-apto');
    const sonidoNoApto = document.getElementById('sonido-noapto');

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
      } else {
        resultado.textContent = "No apto/a, o sea digamos... Te aconsejo agarrar la pala de vez en cuando. Fin.";
        resultado.style.color = "red";
        sonidoNoApto.play();
      }
    });

    // Script para aplicar efecto visual al seleccionar
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
