// Smooth hover animation support (future expansion ready)

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = "all 0.3s ease";
    });
});
