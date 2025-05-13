import React, { useState } from "react";

const ContactPage = () => {
  const [sended, setSended] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dateBirth: "",
    city: "",
    email: "",
    phone: "",
  });

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      setSended(true);
    }
  };

  return (
    <div>
      {sended && (
        <div className="mb-6 bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
          Formulario enviado!
        </div>
      )}
      <form
        className="px-2 max-w-xl mx-auto my-4 flex flex-col items-center gap-6"
        onSubmit={handleSignUp}
      >
        <div className="name w-full">
          <label  className="block text-sm font-medium text-gray-300">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="w-full">
          <label  className="block text-sm font-medium text-gray-300">
            Date of Birth*
          </label>
          <input
            type="date"
            id="dateBirth"
            name="dateBirth"
            value={formData.dateBirth}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="w-full">
          <label  className="block text-sm font-medium text-gray-300">
            City*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Min 8 Characters"
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            disabled={!isFormValid}
            className={`border border-gray-300 text-sm rounded-lg block w-full p-2.5 font-bold ${
              isFormValid
                ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;