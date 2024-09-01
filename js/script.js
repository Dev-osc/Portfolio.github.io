// script.js

// Añadir un efecto de desplazamiento suave a los enlaces de la navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el color de fondo del encabezado cuando el usuario se desplaza hacia abajo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});
/** 
 * Explicación del JavaScript:
 * 
--Desplazamiento Suave:

Los enlaces de la navegación están configurados para desplazarse suavemente hacia las secciones correspondientes de la página
 cuando se hace clic en ellos. Esto mejora la experiencia del usuario al navegar por el portafolio.

 --Cambio de Color en el Encabezado:

Cuando el usuario se desplaza hacia abajo, el color de fondo del encabezado cambia ligeramente para indicar el desplazamiento
 y mantener el enfoque en el contenido.
*/




/*------------------------------------------------------ */



// Seleccionamos todos los elementos con la clase 'tech-icon'
const techIcons = document.querySelectorAll('.tech-icon');

// Iteramos sobre cada elemento para añadir un evento 'mouseover' y 'mouseout'
// Iteramos sobre cada elemento para añadir un evento 'mouseover' y 'mouseout'
techIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        // Escala la imagen cuando el ratón pasa por encima
        this.querySelector('img').style.transform = 'scale(1.2)';
        this.querySelector('img').style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', function() {
        // Restaura el tamaño original de la imagen cuando el ratón se retira
        this.querySelector('img').style.transform = 'scale(1)';
        
        // Mostrar un mensaje emergente (tooltip) con el nombre de la tecnología
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = this.querySelector('img').alt;
        document.body.appendChild(tooltip);
        
        // Posicionar el tooltip cerca del cursor
        document.addEventListener('mousemove', function(e) {
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY + 15 + 'px';
        });
    });

    icon.addEventListener('mouseout', function() {
        // Restaurar el color original del ícono cuando el ratón se retira
        this.querySelector('i').style.color = '#333';
        
        // Eliminar el mensaje emergente (tooltip)
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
/*
Explicación del Código JavaScript:
Selección de Elementos:

document.querySelectorAll('.tech-icon'): Selecciona todos los elementos que tienen la clase tech-icon.
Eventos mouseover y mouseout:

mouseover: Este evento se activa cuando el ratón pasa sobre un ícono de tecnología.
 Dentro de este evento:
El color del ícono cambia a un color resaltado (#f39c12).
Se crea un mensaje emergente (tooltip) que muestra el texto del atributo alt de la imagen 
correspondiente (es decir, el nombre de la tecnología).

El tooltip sigue al cursor del ratón.
mouseout: Este evento se activa cuando el ratón se retira del ícono. 
Se restaura el color original del ícono y se elimina el tooltip.
Posicionamiento del Tooltip:

El tooltip se posiciona cerca del cursor del ratón con un desplazamiento de 10 píxeles en las coordenadas x e y, lo que garantiza que no esté directamente debajo del cursor. 
*/


/** Se ha añadido el siguiente trozo de codigo:
 
 * / Seleccionamos todos los elementos con la clase 'tech-icon'
        const techIcons = document.querySelectorAll('.tech-icon');

        // Iteramos sobre cada elemento para añadir un evento 'mouseover' y 'mouseout'
        techIcons.forEach(icon => {
            icon.addEventListener('mouseover', function() {
                // Escala la imagen cuando el ratón pasa por encima
                this.querySelector('img').style.transform = 'scale(1.2)';
                this.querySelector('img').style.transition = 'transform 0.3s ease';
            });

            icon.addEventListener('mouseout', function() {
                // Restaura el tamaño original de la imagen cuando el ratón se retira
                this.querySelector('img').style.transform = 'scale(1)';
            });
        });
Explicación del Código JavaScript:
Eventos mouseover y mouseout:
mouseover: Cuando el ratón pasa sobre un ícono, la imagen (img) 
correspondiente se escala a 1.2 veces su tamaño original usando la propiedad transform: scale(1.2). La transición es suave gracias a transition: transform 0.3s ease.
mouseout: Cuando el ratón se retira del ícono, la imagen vuelve a su tamaño original (scale(1)).

Integración

Asegúrate de que este código JavaScript esté en tu archivo script.js.
No es necesario hacer cambios adicionales en el CSS, ya que el código JavaScript maneja la 
transformación y la transición de la imagen.
Este enfoque añadirá un efecto visual atractivo a tu portafolio, haciendo que las imágenes 
de las tecnologías crezcan ligeramente cuando los usuarios pasen el ratón sobre ellas, 
lo que puede ayudar a captar la atención de quienes visiten tu sitio.
 */