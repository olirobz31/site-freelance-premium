// Fonction pour afficher une page spécifique
function showPage(pageId) {
    // Masquer toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Afficher la page sélectionnée
    document.getElementById(pageId).classList.add('active');

    // Mettre à jour les liens de navigation
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Fermer le menu mobile si ouvert
    document.getElementById('navLinks').classList.remove('active');
    
    // Remonter en haut de la page avec une animation douce
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonction pour ouvrir/fermer le menu mobile
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Fonction pour gérer l'envoi du formulaire de contact
function handleSubmit(event) {
    event.preventDefault();
    
    // Afficher un message de confirmation
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
    
    // Réinitialiser le formulaire
    event.target.reset();
}

// Fermer le menu mobile si on clique en dehors
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Si le clic est en dehors du menu et que le menu est ouvert
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Animation au scroll pour les cartes
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card, .service-card');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio chargé avec succès !');
    
    // S'assurer que la page d'accueil est affichée
    document.getElementById('accueil').classList.add('active');
});