import renderer from 'react-test-renderer';
import App from './app';


it(`Render App`, () => {
  const tree = renderer
        .create(<App
          errorCount={3}
        />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
