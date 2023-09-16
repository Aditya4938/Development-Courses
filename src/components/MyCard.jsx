import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function MyCard({ image, title, description, like, setLike, id }) {
  let dispDesc = description.substr(0, 100);
  function likeHandler(){
    if(like.includes(id)){
      let arr=like.filter((ind)=>ind!=id);
      setLike(arr);
      toast.warning('Like removed!!');
    }
    else{
      if(like.length===0){
        setLike([id]);
      }
      else{
        setLike([...like,id]);
      }
      toast.success('Liked successfully');
    }
  }
  return (
    <div
      style={{
        width: "300px",
        // minHeight: "328px",
        backgroundColor: "#2A2B44",
        color: "white",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "168px", borderRadius: "5px" }}
        />
      </div>
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute top-[140px] right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={likeHandler} >
                    {
                        like.includes(id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
      <div className="p-2 text-left">
        <h3 className="text-[18px] font-bold leading-1.5">{title}</h3>
        <p className="mt-[.5rem]">{dispDesc}....</p>
      </div>
    </div>
  );
}
export default MyCard;
