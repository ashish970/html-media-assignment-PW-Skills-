//Calculate the percentage of the discount...
// Arrow function to calculate the percentage discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;

    // Calculate the percentage discount
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Round off the percentage discount to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    // Return the rounded percentage discount
    return roundedDiscountPercentage;
};
