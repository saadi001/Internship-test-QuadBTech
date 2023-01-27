

const FormModal = ({ name, language, runtime, schedule, closeModal }) => {

     const handleLocalStorage = (name) =>{
          localStorage.setItem(`${name}`, "booked")
          closeModal()
     }

     return (
          <div>
               <input type="checkbox" id="my-modal-6" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <section class="max-w-4xl p-6 mx-auto bg-white rounded-md ">
                              <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Booking details</h2>

                              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                   <div>
                                        <p class="text-gray-700 dark:text-gray-200" for="username">Name: <span className="font-semibold">{name}</span></p>
                                   </div>

                                   <div>
                                        <p class="text-gray-700 dark:text-gray-200" for="emailAddress">Runtime: <span className="font-semibold">{runtime}</span></p>

                                   </div>

                                   <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="password">Day: <span className="font-semibold">{schedule.days[0]}</span></label>
                                   </div>

                                   <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Time: <span className="font-semibold">{schedule.time}</span></label>

                                   </div>
                              </div>

                              <div className="flex justify-end gap-3 mt-6">
                                   <div class="">
                                        <button onClick={closeModal} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-white hover:text-gray-600 border hover:border-gray-600 ">Cancel</button>
                                   </div>
                                   <div class="">
                                        <button onClick={()=>handleLocalStorage(name)} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-600">Book</button>
                                   </div>
                              </div>

                         </section>
                         
                    </div>
               </div>
          </div>
     );
};

export default FormModal;