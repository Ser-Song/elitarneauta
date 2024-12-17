// Po załadowaniu całej strony
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Po zakończeniu animacji samochodu ukrywamy loader
    const car = document.getElementById("ascii-car");
    car.addEventListener("animationend", () => {
        preloader.style.display = "none"; // Ukrywamy loader
        content.style.display = "block";  // Pokazujemy stronę
    });
});
