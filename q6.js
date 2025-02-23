app.get('/products', (req, res) => {
    if (serverDown) {
        res.status(500).json({ message: 'Server is down' });
    } else {
        // Normal product retrieval
    }
});
