import { useEffect } from "react";

const useToggleSections = () => {
  useEffect(() => {
    const headers = document.querySelectorAll(".terms-container h2");

    headers.forEach(header => {
      header.addEventListener("click", () => {
        // Jeśli już aktywny, usuń klasę
        const isActive = header.classList.contains("active");
        headers.forEach(h => h.classList.remove("active")); // zamknij wszystkie
        if (!isActive) {
          header.classList.add("active"); // otwórz kliknięty
        }
      });
    });

    // Sprzątanie przy odmontowaniu komponentu
    return () => {
      headers.forEach(header => {
        header.replaceWith(header.cloneNode(true));
      });
    };
  }, []);
};

export default useToggleSections;
