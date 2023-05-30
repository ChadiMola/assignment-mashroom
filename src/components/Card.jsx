function Card({icon,title,descreption}) {
  return (
    <div className="w-48 rounded-xl shadow-2xl p-5 h-52 bg-[#282b2f] flex justify-between flex-col">
      <div className="p-5  rounded-full bg-[#2C3036] w-16 h-16 flex justify-center items-center"><i className={`fa-sharp text-[#377DFF] fa-solid text-3xl  ${icon} `}></i>
      </div>
      <div className="text-[15px]">{`${title}`}</div>
      <div className="text-[11px] text-[#B1BED4]">{`${descreption}`}</div>
    </div>
   
  );
}

export default Card;
