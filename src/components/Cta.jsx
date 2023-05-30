import Card from "./Card";

function Cta() {
  return (
    <>
      <div className="container  mt-36 flex flex-wrap justify-evenly mx-auto  text-white relative ">
      <span className="bg-[#377DFF] h-24 z-0 rounded-es-full rounded-se-full absolute top-10 w-full"></span>
      <span className="bg-[#377DFF] h-24 z-0 rounded-es-full rounded-ee-full absolute bottom-20 w-3/5 right-0 "></span>

        <div className="max-w-sm z-10 ">
        
          <h1 className="text-[#377DFF]">welcome</h1>
          <div className="text-3xl font-bold py-3.5 my-3 ">
            Ready to help you in your project!
          </div>
          <div className="my-5  text-[#B1BED4]">
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process
          </div>
          <button
            type="button"
            className="text-white bg-[#377DFF] hover:bg-blue-800  font-medium rounded-lg text-sm px-7 py-2.5  focus:outline-none"
          >
            Start Now
          </button>

          <button
            type="button"
            className="py-2.5 px-7 ml-2 text-sm  hover:bg-[#377DFF] hover:border-white font-medium text-white focus:outline-none rounded-lg border border-[#377DFF] "
          >
            Contact Sales
          </button>
        </div>
        <div className="flex z-10 flex-wrap justify-end max-w-2xl gap-6">
            <Card title={"Accounts"} descreption={"Manage an unlimited number of accounts from one place"} icon={"fa-users"}/>
            <Card title={"Roles & Permissions"} descreption={"Full controle with flexible user permissions for views and actions"} icon={"fa-lock"}/>
            <Card title={"Integration"} descreption={"Connect the tools you already use"} icon={"fa-microchip"}/>
            <Card title={"Chat Bots"} descreption={"Ai powered chatbot to improve your business and customer satisfaction"} icon={"fa-robot"}/>
            <Card title={"In-App Messaging"} descreption={"Build a better business with proactive messages."} icon={"fa-message"}/>
            <Card title={"Knowledge Base"} descreption={"Create and publish answers for customers"} icon={"fa-book"}/>

        </div>
      </div>
    </> 
  );
}

export default Cta;
