import { useState } from "react";

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      age: '',
      city: '',
      company: '',
      chiefComplaints: '',
      previousExperience: '',
  });

  const handleNextStep = () => {
      setStep(step + 1);
  };

  const handlePreviousStep = () => {
      setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value,
      }));
  };

  return (
      <div>
          {step === 1 && (
              <div>
                  <h2>Step 1: Name + Phone Number</h2>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                  <button onClick={handleNextStep}>Next</button>
              </div>
          )}
          {step === 2 && (
              <div>
                  <h2>Step 2: Age + City + Company</h2>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
                  <button onClick={handleNextStep}>Next</button>
                  <button onClick={handlePreviousStep}>Previous</button>
              </div>
          )}
          {step === 3 && (
              <div>
                  <h2>Step 3: Chief Complaints</h2>
                  <textarea name="chiefComplaints" value={formData.chiefComplaints} onChange={handleChange} placeholder="Chief Complaints"></textarea>
                  <button onClick={handleNextStep}>Next</button>
                  <button onClick={handlePreviousStep}>Previous</button>
              </div>
          )}
          {step === 4 && (
              <div>
                  <h2>Step 4: Previous Experience with Physiotherapy</h2>
                  <input type="text" name="previousExperience" value={formData.previousExperience} onChange={handleChange} placeholder="Previous Experience" />
                  <button onClick={handleNextStep}>Next</button>
                  <button onClick={handlePreviousStep}>Previous</button>
              </div>
          )}
          {step === 5 && (
              <div>
                  <h2>Step 5: Available Doctors</h2>
                  {/* <DoctorList city={formData.city} /> */}
                  <button onClick={handlePreviousStep}>Previous</button>
              </div>
          )}
      </div>
  );
};

export default BookingForm;