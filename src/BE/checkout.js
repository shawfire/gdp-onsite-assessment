const checkout = (req, res) => {
    const objInput = req.body;
    let totalPrice = 0;
    let classicQty;
    let standoutQty;
    let premiumQty;

    switch (objInput.customer) {
    case 'unilever':
        classicQty = objInput.items.filter(item => item === 'classic').length;
        standoutQty = objInput.items.filter(item => item === 'standout').length;
        premiumQty = objInput.items.filter(item => item === 'premium').length;
        if (classicQty >= 3) {
            classicQty -= 1;
        }
        totalPrice = classicQty * 269.99 + standoutQty * 322.99 + premiumQty * 394.99;
        break;
    default:
        classicQty = objInput.items.filter(item => item === 'classic').length;
        standoutQty = objInput.items.filter(item => item === 'standout').length;
        premiumQty = objInput.items.filter(item => item === 'premium').length;
        totalPrice = classicQty * 269.99 + standoutQty * 322.99 + premiumQty * 394.99;
        break;
    }

    res.status(200).send({ total: totalPrice });
    return totalPrice;
};
export default checkout;
