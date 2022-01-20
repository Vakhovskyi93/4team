export interface Points  {
    [index: number]: string
};

export interface Card {
    name: string,
    price: string,
    points: Points[],
    bestOffer: boolean,
    id: number
}
export interface Order {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    country: string,
    city: string,
    street1: string,
    street2: string,
    zipCode: string,
    cardNumber: string,
    cvv: string,
    expDate: string,
    state?: string
     
}