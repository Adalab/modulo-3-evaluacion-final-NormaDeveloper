import Sound from 'react-sound';
import Song from '../hp_Theme_Song.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return (
    <div>
      <Sound
        url={Song}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default PlaySound;
