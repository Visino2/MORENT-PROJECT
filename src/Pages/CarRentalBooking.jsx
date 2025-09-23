import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Cars from "../Data/Cars"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { div } from "framer-motion/client";

export default function CarRentalBooking({ selectedCard = 1 }) {
   const { id } = useParams();
  const selectedCar = Cars[id]; // use id from URL

  const tax = 0;
  const subtotal = selectedCar.price;
  const total = subtotal + tax;
    const [formData, setFormData] = useState({
        name:'',
        phoneNumber:'',
        address:'',
        townCity:'',
        pickUpLocation:'',
        dropOffLocation:'',
        pickUpDate:'',
        dropUpDate:'',
        pickUpTime:'',
        dropUpTime:'',
        paymentMethod:'',
        cardNumber:'',
        cardNumber:'',
        expirationDate:'',
        cardHolder:'',
        cvc:'',
        markertingConsent: false,
        paymentConsent: false
    });

    const handleinputchange = (e) =>{
        const{ name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit = () => {
        console.log('Form submitted:', selectedCar);
        //handle form submission
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">Billing Info</h3>
                                        <span className="text-sm text-gray-500">Step 1 of 4</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-6">Please enter your billing info</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                            <input type="text" 
                                            name="name"
                                             value={formData.name}
                                             onChange={handleinputchange}
                                             placeholder="Your name"
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"/>
                                        </div>

                                         <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                            <input type="tel" 
                                             name="PhoneNumber"
                                             value={formData.phoneNumber}
                                             onChange={handleinputchange}
                                             placeholder="Phone number"
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                            <input type="text" 
                                             name="address"
                                             value={formData.address}
                                             onChange={handleinputchange}
                                             placeholder="Address"
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"/>
                                        </div>

                                         <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Town / City</label>
                                            <input type="text" 
                                             name="towncity"
                                             value={formData.townCity}
                                             onChange={handleinputchange}
                                             placeholder="Town or City"
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">Rental Info</h3>
                                    <span className="text-sm text-gary-500"> Step 2 of 4</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">Please select your rental date</p>
                                 

                                 <div className="mb-6">
                                   <div className="flex items-center mb-4">
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <input type="radio" className="w-4 h-4 accent-blue-500"/>Pick -up</h3>
                                    </div>
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Locations</label>
                                            <select 
                                            name="pickUpLocation"
                                            value={formData.pickUpLocation}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             >
                                             <option value="">Select your city</option>
                                             <option value="new-york">New York</option>
                                             <option value="Los-angles">Los Angeles</option>
                                             <option value="chicago">Chicago</option>
                                            </select>
                                        </div>
                                       <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                            <input 
                                            name="date"
                                            placeholder="day/month/year"
                                            value={formData.dropOffDate}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             />
                                        </div>
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                                            <select 
                                            name="pickUpLocation"
                                            value={formData.dropUpTime}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             >
                                             <option value="">Select your time</option>
                                             <option value="09:00">09:00</option>
                                             <option value="10:00">10:00</option>
                                             <option value="11:00">11:00</option>
                                             <option value="12:00">12:00</option>
                                            </select>
                                        </div>

                                   </div>
                                 </div>

                                 <div>
                                    <div className="flex items-center mb-4">
                                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <input type="radio" className="w-4 h-4 accent-blue-500"/>Drop -off</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Locations</label>
                                            <select 
                                            name="dropOffLocation"
                                            value={formData.dropOffLocation}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             >
                                             <option value="">Select your city</option>
                                             <option value="new-york">New York</option>
                                             <option value="Los-angles">Los Angeles</option>
                                             <option value="chicago">Chicago</option>
                                            </select>
                                        </div>
                                       <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                            <input 
                                            name="date"
                                            placeholder="day/month/year"
                                            value={formData.dropOffDate}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             />
                                        </div>
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                                            <select 
                                            name="pickUpLocation"
                                            value={formData.dropUpTime}
                                            onChange={handleinputchange} 
                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:outline-none"
                                             >
                                             <option value="">Select your time</option>
                                             <option value="09:00">09:00</option>
                                             <option value="10:00">10:00</option>
                                             <option value="11:00">11:00</option>
                                             <option value="12:00">12:00</option>
                                            </select>
                                        </div>

                                   </div>
                                 </div>
                            </div>
                        </div>

                         <div className="bg-white rounded-lg shadow-sm p-6 mt-10" >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
                                  <span className="text-sm text-gray-500">step 3 of 4</span>
                            </div>
                             <p className="text-sm text-gray-600 mb-6">Please your payment method</p>

                              <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
                                 <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                    <input 
                                    type="radio" 
                                    id="credit"
                                    name="paymentMethod"
                                    value="credit"
                                    checked={formData.paymentMethod === 'credit'}
                                    onChange={handleinputchange}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                                    <label htmlFor="credit" className="ml-2 text-sm font-bold text-gray-900">Credit Card</label>

                                 </div>
                                 <img src="/Visa.png" alt="Visa" className="h-5" />
                                 </div>
                                 {formData.paymentMethod === 'credit' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                                            <input 
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber} 
                                            onChange={handleinputchange}
                                            placeholder="Card Number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white focus:outline-none"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Expiration Date</label>
                                            <input 
                                            type="text"
                                            name="expirationDate"
                                            value={formData.expirationDate} 
                                            onChange={handleinputchange}
                                            placeholder="DD / MM / YY"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white focus:outline-none"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Card Holder</label>
                                             <input 
                                            type="text"
                                            name="cardHolder"
                                            value={formData.cardHolder} 
                                            onChange={handleinputchange}
                                            placeholder="Card holder"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white focus:outline-none"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">CVC</label>
                                             <input 
                                            type="text"
                                            name="cvc"
                                            value={formData.cvc} 
                                            onChange={handleinputchange}
                                            placeholder="CVC"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white focus:outline-none"/>
                                        </div>
                                    </div>
                                 )}
                              </div>
                      
                             <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                    <input 
                                    type="radio" 
                                    id="paypal"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={formData.paymentMethod === 'Paypal'}
                                    onChange={handleinputchange}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                                   <label htmlFor="paypal" className="ml-2 text-sm font-bold text-gray-900">PayPal</label>
                                    </div>
                                  <img src="/paypal.png" alt="paypal" className="h-5" />
                                </div>
                             </div>

                             <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                    <input 
                                    type="radio" 
                                    id="bitcoin"
                                    name="paymentMethod"
                                    value="bitcoin"
                                    checked={formData.paymentMethod === 'bitcoin'}
                                    onChange={handleinputchange}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                                   <label htmlFor="bitcoin" className="ml-2 text-sm font-bold text-gray-900">Bitcoin</label>
                                    </div>
                                  <img src="/Bitcoin.png" alt="Bitcoin" className="h-5" />
                                </div>
                             </div>
                       </div>
                       

                       <div className="bg-white rounded-lg shadow-sm p-6 mt-10">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-900"> Confirmation</h3>
                            <span className="text-sm text-gray-500">step 4 0f 4</span>
                         </div>
                         <p className="text-sm text-gray-300 mb-6">We are getting to the end. just few clicks and your rental is ready!</p>

                         <div className="space-y-4">
                            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                                <input 
                                type="checkbox"
                                id="marketing"
                                checked={formData.markertingConsent}
                                onChange={handleinputchange} 
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-1 mr-3"/>
                                <label htmlFor="marketing" className="text-sm text-gray-700">
                                    I agree with sending an Marketing and Newslatter emails. No spam, promised! 
                                </label>
                            </div>
                            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                                <input 
                                type="checkbox"
                                id="privacy"
                                name="privacyConsent"
                                checked={formData.privacyConsent}
                                onChange={handleinputchange} 
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-1 mr-3"/>
                                <label htmlFor="privacy" className="text-sm text-gray-700">
                                    I agree with our terms and conditions and privacy policy.
                                </label>
                            </div>
                         </div>
                           <button
                           onClick={handleSubmit}
                            className=" bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition-colors mt-5">
                              Rent Now
                           </button>
                        
                      <div className="flex flex-col gap-4 text-sm text-white mt-5">
                          <img 
                             src="/open.png" 
                             alt="Security Badge" 
                             className="w-8 h-8 mr-3"
                           />
                      <div>
                        <div className="font-medium text-gray-900">All your data are safe</div>
                        <div className="text-sm text-gray-300">We are using the most advanced security to provide you the best experience ever.</div>
                     </div>
                     </div>
                      </div>

                    </div>

                      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Rental Summary</h3>
          <p className="text-sm text-gray-600 mb-6">Prices may change depending on the length of the rental and the price of your rental car.</p>
          
          <div className="flex items-center mb-6">
            <div className="w-20 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name}
                className="w-16 h-12 object-contain"
              />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-gray-900">{selectedCar.name}</h4>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 text-sm">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                </div>
                <span className="text-sm text-gray-500 ml-1">440+ Reviewer</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6 border-t border-gray-300 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal}.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${tax}</span>
            </div>
          </div>
           <div className="mb-6">
              <div className="flex gap-2">
                  <input 
                  type="text"
                  placeholder="Apply promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm focus:outline-none" />
                  <button className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                     Apply now
                  </button>
              </div>
           </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center">
             <div className="flex flex-col">
                 <span className="font-medium text-sm">Total Rental Price</span>
               <div className="text-sm text-gray-500">Overall price and includes rental discount</div>
             </div>
              <div className="text-right">
                <div className="text-2xl font-bold">${total}.00</div>
              </div>
            </div>
          </div>
        </div>
         </div>

                </div>

            </div>
            <Footer />
           
        </div>
    );
}