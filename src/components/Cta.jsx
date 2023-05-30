import Card from "./Card";

function Cta() {
  return (
    <>
      <div className="container  mt-28 flex justify-between mx-auto gap-28 text-white ">
        <div className="max-w-sm">
          <h1 className="text-[#34599C] font-semibold">welcome</h1>
          <div className="text-4xl font-bold bg-[#34599C] py-2 my-3 ">
            Ready to help you in your project!
          </div>
          <div className="my-5">
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process
          </div>
          <button
            type="button"
            className="text-white bg-[#377DFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5  focus:outline-none"
          >
            Start Now
          </button>

          <button
            type="button"
            className="py-2.5 px-7 ml-2 text-sm font-medium text-white focus:outline-none rounded-lg border border-[#377DFF]  focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Contact Sales
          </button>
        </div>
        <div className="flex flex-wrap gap-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </> 
  );
}

export default Cta;
