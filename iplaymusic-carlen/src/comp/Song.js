import PlayButton from "../comp/sub-comp/Playbutton"
const Song = ({ songtitle, songtime, artist }) => {
  return (
    <div className="flex pl-1 mb-4">
      <PlayButton
        className="w-20 m-3 
              "
      />
      <div className="flex justify-between w-72 items-center">
        <div className="flex flex-col w-40 pl-4">
          <span className="font-semibold">{songtitle}</span>
          <span>{artist}</span>
        </div>
        <div className="flex pr-2 font-light text-sm">
          <span>{songtime}</span>
        </div>
      </div>
    </div>
  )
}

export default Song
