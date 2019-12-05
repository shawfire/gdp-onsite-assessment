import axios from 'axios';

export default function ({ customer, items }) {
    return axios
        .post('http://localhost:5000/checkout', { customer, items })
        .then(res => res.data.total);
}
