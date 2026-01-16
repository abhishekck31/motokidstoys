const NUMBERS = ["919638026901", "919769876609"];

/**
 * Encodes and constructs a WhatsApp URL with load balancing.
 */
export const getWhatsAppLink = (productName: string, price: number, sku?: string) => {
    // Load balancing between the two support numbers
    const selectedNumber = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];

    const message = `Hi MotoKids, I'm interested in the ${productName} priced at ₹${price.toLocaleString()}.${sku ? ` (SKU: ${sku})` : ''} Please confirm availability.`;

    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${selectedNumber}?text=${encodedMessage}`;
};

/**
 * Constructs a full cart message for WhatsApp.
 */
export const getCartWhatsAppLink = (items: any[], subtotal: number, shipping: number) => {
    const selectedNumber = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];

    let message = "Hello MotoKids! I would like to place an order:%0a%0a";

    items.forEach((item) => {
        message += `• ${item.name} ${item.variant ? `(${item.variant})` : ''} - Qty: ${item.quantity} | ₹${(item.price * item.quantity).toLocaleString()}%0a`;
    });

    const total = subtotal + shipping;

    message += `%0aSubtotal: ₹${subtotal.toLocaleString()}`;
    message += `%0aShipping: ${shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}`;
    message += `%0aGrand Total: ₹${total.toLocaleString()}`;
    message += `%0a%0aPlease confirm availability and payment details.`;

    return `https://wa.me/${selectedNumber}?text=${message}`;
};
