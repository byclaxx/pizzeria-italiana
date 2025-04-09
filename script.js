function pedir(nombrePizza) {
  const numero = "34600000000"; // Cambia este número por tu número de WhatsApp
  const mensaje = `Hola, quiero pedir una ${nombrePizza}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
