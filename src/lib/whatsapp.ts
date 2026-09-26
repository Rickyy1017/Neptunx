const WHATSAPP_E164 = "2349020811739";

export function getProductPageUrl(productId: string) {
  const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
  return `${siteUrl}/products/${encodeURIComponent(productId)}`;
}

export function openProductWhatsApp(message: string) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
  window.location.assign(whatsappUrl);
}
