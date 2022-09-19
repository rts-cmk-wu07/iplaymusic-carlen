import PlayButton from "../comp/sub-comp/Playbutton"
const Song = ({ songtitle, songtime, artist }) => {
  return (
    <div className="flex pl-1 mb-4">
      <PlayButton
        className="w-20 m-3 
              "
      />
      <div className="flex justify-between w-72 items-center">
        <div className="flex-col w-40">
          <span>{songtitle}</span>
          <span>{artist}</span>
        </div>
        <div className="flex pr-6 font-light text-sm">
          <span>{songtime}</span>
        </div>
      </div>
    </div>
  )
}

export default Song
