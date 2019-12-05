import axios from 'axios';

export default async function ({ customer, items }) {
    const res = await axios
        .post('http://localhost:5000/checkout', { customer, items });
    return res.data.total;
}
