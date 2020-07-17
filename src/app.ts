interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface PayPal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe; // intersection type
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'xyz123',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '1000 2000 3000 4000',
    cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
    ...order, email: 'abc@mail.com', type: 'paypal'
};

// ES equivalent:
const assigned = Object.assign({}, order, orderCard);

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }
    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
    // or:
    switch (payload.type) {
        case "paypal":
            console.log(payload.email);
            break;
        case "stripe":
            console.log(payload.card, payload.cvc);
            break;
    }
}
