import GameOverScreen from './game-over-screen';


it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
      <Router>
        <GameOverScreen
          onReplayButtonClick = {() => {}}
        />
      </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
