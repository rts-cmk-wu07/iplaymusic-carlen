import PlayButton from "../comp/sub-comp/Playbutton";
const Song = ({ songtitle, songtime, artist }) => {
  return (
    <div>
      <div className="flex w-full">
        <PlayButton />
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>{songtitle}</span>
            <span>{artist}</span>
          </div>
        </div>
        <span>{songtime}</span>
      </div>
    </div>
  );
};

export default Song;
