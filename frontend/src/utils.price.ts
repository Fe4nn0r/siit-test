export const formatPrice = (
	price: number,
	locale = "fr-FR",
	currency = "EUR",
): string => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
	}).format(price);
};
