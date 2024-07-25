document.addEventListener('DOMContentLoaded', () => {
    // Ouvrir les modales
    const openModalLinks = document.querySelectorAll('.open-modal');
    openModalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                localStorage.setItem('openModal', modalId); // Sauvegarder la modale ouverte
            }
        });
    });

    // Fermer les modales
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                localStorage.removeItem('openModal'); // Nettoyer l'état modale
            }
        });
    });

    // Fermer les modales lorsque l'utilisateur clique en dehors
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            localStorage.removeItem('openModal'); // Nettoyer l'état modale
        }
    });

    // Ouvrir la modale sauvegardée au chargement de la page
    const savedModalId = localStorage.getItem('openModal');
    if (savedModalId) {
        const modal = document.getElementById(savedModalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }
});
