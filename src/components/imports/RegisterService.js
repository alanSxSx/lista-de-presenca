export class RegisterService {

    getRegistersSmall() {
        return fetch('data/db-small.json').then(res => res.json()).then(d => d.data);
    }

    getRegisters() {
        return fetch('data/db.json').then(res => res.json()).then(d => d.data);
    }

    getRegistersWithOrdersSmall() {
        return fetch('data/db-orders-small.json').then(res => res.json()).then(d => d.data);
    }
}