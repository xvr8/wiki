document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado');
    const menuItems = document.querySelectorAll('.menu-lateral > ul > li > a');
    console.log('Elementos seleccionados:', menuItems);

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace.
            console.log('Se hizo clic en:', item.textContent);

            const parentLi = item.parentElement;

            // Alternar la clase 'active' en el elemento clicado.
            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
                console.log('Clase "active" eliminada de:', parentLi);
            } else {
                // Cierra otros submenús abiertos.
                document.querySelectorAll('.menu-lateral > ul > li.active').forEach(activeLi => {
                    activeLi.classList.remove('active');
                    console.log('Clase "active" eliminada de otros elementos:', activeLi);
                });
                parentLi.classList.add('active');
                console.log('Clase "active" agregada a:', parentLi);
            }
        });
    });
});
