const Contact = () => {
    return ( 
        <div className="flex max-lg:flex-col items-center justify-between" id="contact">
            <div className="flex flex-col gap-5 max-lg:w-full">
               <h1 className="text-5xl max-sm:text-4xl font-bold">Contact Us</h1>
               <form action="" className="flex flex-col gap-3">
                   <div className="flex flex-col gap-3">
                       <label htmlFor="">Name</label>
                       <input type="text" className="border border-slate-300 h-16 w-[500px] max-lg:w-full rounded-md" />
                   </div>
                   <div className="flex flex-col gap-3">
                       <label htmlFor="">Email</label>
                       <input type="text" className="border border-slate-300 h-16 w-[500px] max-lg:w-full rounded-md" />
                   </div>
                   <div className="flex flex-col gap-3">
                       <label htmlFor="">Message</label>
                      <textarea name="" id="" cols="30" rows="10" className="border border-slate-300 w-[500px] max-lg:w-full rounded-md"></textarea>
                   </div>
                   <button className="bg-blue-600 h-16 w-56 rounded-md text-lg font-medium mt-5 text-white">Send</button>
               </form>
            </div>
            <img src="https://th.bing.com/th/id/OIP.6GmoKGNiAMHMIIOq26oAiAHaFj?rs=1&pid=ImgDetMain" alt="" className="w-1/2 max-lg:w-full" />
        </div>
     );
}
 
export default Contact;