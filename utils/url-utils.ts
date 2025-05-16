/**
 * Verifica si una URL es válida
 * @param {string} url - La URL a validar
 * @returns {boolean} - Verdadero si la URL es válida, falso en caso contrario
 */
export const isValidUrl = (url = "") => {
    if (!url || typeof url !== "string" || url.trim() === "") return false;

    try {
        if (url.startsWith('/')) return true;

        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Devuelve una URL segura para usar en componentes de imagen
 * @param {string} url - La URL original a verificar
 * @param {string} fallbackUrl - URL de respaldo si la original no es válida
 * @returns {string} - URL segura para usar
 */
export const getSafeImageUrl = (url = "", fallbackUrl = "/images/company-icon.png") => {
    return isValidUrl(url) ? url : fallbackUrl;
};