

const FormModal = ({ name, language, runtime, schedule, closeModal }) => {

     const handleLocalStorage = (name) => {
          localStorage.setItem(`${name}`, "booked")
          closeModal()
     }

     return (
          <div>
               <input type="checkbox" id="my-modal-6" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <section className="max-w-4xl p-6 mx-auto bg-white rounded-md ">
                              <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Booking details</h2>

                              <form>
                                   <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="username">Show Name</label>
                                             <input defaultValue={name} disabled  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Runtime</label>
                                             <input defaultValue={runtime} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border font-semibold border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="password">Date</label>
                                             <input defaultValue={schedule.days[0]} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border font-semibold border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Time</label>
                                             <input defaultValue={schedule.time} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border font-semibold border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="password">Email</label>
                                             <input type='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border font-semibold border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                             <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">phone</label>
                                             <input type='text' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border font-semibold border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                   </div>

                                   <div className="flex justify-end gap-3 mt-6">
                                        <div className="">
                                             <button onClick={closeModal} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-white hover:text-gray-600 border hover:border-gray-600 ">Cancel</button>
                                        </div>
                                        <div className="">
                                             <button onClick={() => handleLocalStorage(name)} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-600">Book</button>
                                        </div>
                                   </div>
                              </form>

                         </section>

                    </div>
               </div>
          </div>
     );
};

export default FormModal;