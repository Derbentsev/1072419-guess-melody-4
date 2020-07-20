import WinScreen from './win-screen';
import history from '@history/history';


describe(`Should WinScreen render correctly`, () => {
  it(`With 0 mistake`, () => {
    const tree = renderer
      .create(
        <Router
          history={history}
        >
          <WinScreen
            questionsCount={3}
            mistakesCount={0}
            onReplayButtonClick={() => {}}
          />
        </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With 1 mistake`, () => {
    const tree = renderer
      .create(
        <Router
          history={history}
        >
          <WinScreen
            questionsCount={3}
            mistakesCount={1}
            onReplayButtonClick={() => {}}
          />
        </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`With 2 questions`, () => {
  it(`With 0 mistake`, () => {
    const tree = renderer
      .create(
        <Router
          history={history}
        >
          <WinScreen
            questionsCount={2}
            mistakesCount={0}
            onReplayButtonClick={() => {}}
          />
        </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With 1 mistake`, () => {
    const tree = renderer
      .create(
      <Router
        history={history}
      >
        <WinScreen
          questionsCount={2}
          mistakesCount={1}
          onReplayButtonClick={() => {}}
        />
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
