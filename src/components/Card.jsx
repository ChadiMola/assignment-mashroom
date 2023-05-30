function Card() {
  return (
    <div className="w-48 rounded-xl shadow-2xl p-5 h-56 bg-[#282b2f] flex justify-between flex-col">
      <div className="p-5 rounded-full bg-[#2C3036] w-16 h-16 flex justify-center items-center"><i className="fa-sharp text-[#377DFF] fa-solid text-3xl fa-users "></i>
      </div>
      <div>Accounts</div>
      <div className="text-[12px]">Manage an unlimited number of accounts from one place</div>
    </div>
   
  );
}

export default Card;
