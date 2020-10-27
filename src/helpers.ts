export const capitalizeFirstLetter = (string: string): string  => string.charAt(0).toUpperCase() + string.slice(1);

export const splitAtCapital = (string: string) => string.split(/(?=[A-Z])/);
