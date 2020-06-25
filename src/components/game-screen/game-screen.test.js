import GameScreen from './game-screen';
import {GameType} from '@consts/index';


const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
