import WelcomeScreen from '@components/welcome-screen/welcome-screen';
import ArtistQuestionScreen from '@components/artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '@components/genre-question-screen/genre-question-screen';
import GameScreen from '@components/game-screen/game-screen';
import withActivePlayer from '@hocs/with-active-player/with-active-player';
import withUserAnswer from '@hocs/with-user-answer/with-user-answer';
import GameOverScreen from '@components/game-over-screen/game-over-screen';
import WinScreen from '@components/win-screen/win-screen';
import {GameType} from '@consts/index';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/game/game';
import AuthScreen from '@components/auth-screen/auth-screen';
import {AuthorizationStatus} from '@reducer/user/user';
import {getStep, getMistakes, getMaxMistakes} from '@reducer/game/selectors';
import {getQuestions} from '@reducer/data/selectors';
import {getAuthorizationStatus} from '@reducer/user/selectors';
import {Operation as UserOperation} from '@reducer/user/user';
import PrivateRoute from '@components/private-route/private-route';
import history from '@history/history';
import {AppRoute} from '@consts/';


const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends React.PureComponent {
  _renderGameScreen() {
    const {
      authorizationStatus,
      maxMistakes,
      mistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
    } = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount = {maxMistakes}
          onWelcomeButtonClick = {onWelcomeButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return history.push(AppRoute.LOSE);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return history.push(AppRoute.RESULT);
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return history.push(AppRoute.LOGIN);
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type = {question.type}
            >
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type = {question.type}
            >
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions, mistakes, resetGame, login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path = {AppRoute.ROOT}>
            {this._renderGameScreen()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <AuthScreen
              onReplayButtonClick={resetGame}
              onSubmit={login}
            />
          </Route>
          <Route exact path = {AppRoute.LOSE}>
            <GameOverScreen
              onReplayButtonClick={resetGame}
            />
          </Route>
          <PrivateRoute
            exact path = {AppRoute.RESULT}
            render={() => {
              return(
                <WinScreen
                  questionsCount={questions.length}
                  mistakesCount={mistakes}
                  onReplayButtonClick = {() => {}}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});


export {App};
export default connect(mapStateProps, mapDispatchToProps)(App);
