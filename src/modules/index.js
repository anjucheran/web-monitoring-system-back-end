import userRoutes from './users/user.routes';

export default (app) => {
    app.use('/api/v1/users', userRoutes);
    app.get('/hello', (req, res) => {
        res.send('This is a private route!');
    });
};