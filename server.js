import App from './app';

const port = 3001;

App.listen(port, () => {
  console.log();
  console.log(`Running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
