app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
});
