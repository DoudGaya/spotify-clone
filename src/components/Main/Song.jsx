const Song = ({ sing }) => {
// console.log(sing)
return (
<div className="flex flex-col p-4 backdrop-blur-md hover:bg-stone-600 ease-in-out duration-200 transition-all rounded-xl bg-stone-700/30">
  <div className="flex w-full flex-col">
    <img src={sing.cover} alt="" className={`drop-shadow-xl border-b-4 rounded-md ${sing.color}`} />
    <div className=" -mt-10 z-10 px-2 border-l-4">
      <p className=" font-spotify font-bold">{sing.mix}</p>
    </div>
  </div>
  <div className=" font-spotify mt-6">
    { sing.artist }
  </div>
  <p className=" font-spotify text-sm text-gray-400 ">{sing.title}</p>
</div>
)
}
export default Song