export default class AudioPlayer extends React.PureComponent {
  render() {
    const {isLoading, isPlaying, onPlayButtonClick, children} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => onPlayButtonClick()}
        />
        <div className="track__status">
          {children}
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
