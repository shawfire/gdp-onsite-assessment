// Both Jest and Mocha can use chai

import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

const testCheckout = data => request(app)
    .post('/checkout')
    .set('Accept', 'application/json')
    .send(data);

describe('checkout', () => {
    it('default customer', (done) => {
        testCheckout({
            customer: 'default',
            items: ['classic', 'standout', 'premium'],
        })
            .expect(200)
            .end((err, res) => {
                expect(res.body.total).to.equal(987.97);
                done();
            });
    });

    it('unilever customer', (done) => {
        testCheckout({
            customer: 'unilever',
            items: ['classic', 'classic', 'classic', 'premium'],
        })
            .expect(200)
            .end((err, res) => {
                expect(res.body.total).to.equal(934.97);
                done();
            });
    });
});
