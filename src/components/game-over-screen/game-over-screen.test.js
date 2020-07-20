import GameOverScreen from './game-over-screen';
import history from '@history/history';


it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
      <Router
        history={history}
      >
        <GameOverScreen
          onReplayButtonClick = {() => {}}
        />
      </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
