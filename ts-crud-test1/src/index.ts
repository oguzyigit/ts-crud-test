import "reflect-metadata";
import app from './app';

const PORT = 3001;
app.listen(PORT, () => {
    console.info('Express server listening on http://localhost:3001');
});
