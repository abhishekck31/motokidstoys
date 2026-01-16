export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    shippingCostPerItem: number;
    category: string;
}

export const SHIPPING_THRESHOLD = 7499;

export function calculateShipping(items: CartItem[]) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (subtotal >= SHIPPING_THRESHOLD) {
        return 0;
    }

    return items.reduce((acc, item) => acc + item.shippingCostPerItem * item.quantity, 0);
}

export function calculateTax(subtotal: number, state: string) {
    let tax = 0;
    // Octroi tax for Maharashtra
    if (state.toLowerCase() === 'maharashtra') {
        tax = subtotal * 0.05; // Assuming 5% Octroi
    }
    // Standard GST usually included in price, but let's handle extra if needed
    return tax;
}

export const RETURN_POLICY = {
    rideOnToys: "10 days replacement",
    rcToys: "6 days replacement",
    mandatory: "MANDATORY: Unboxing video required for all returns."
};

export const CANCELLATION_LOGIC = {
    afterDispatch: "15% deduction",
    instantRefund: "5% deduction"
};
