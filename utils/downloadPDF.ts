export const downloadStarKebabMenu = () => {
  // Crear un enlace temporal para descargar el PDF
  const link = document.createElement("a");
  link.href = "/StarKebab-cartaweb.pdf";
  link.download = "Carta-StarKebab-Bormujos.pdf";
  link.target = "_blank";

  // Añadir el enlace al DOM temporalmente y hacer clic
  document.body.appendChild(link);
  link.click();

  // Limpiar el enlace del DOM
  document.body.removeChild(link);
};
