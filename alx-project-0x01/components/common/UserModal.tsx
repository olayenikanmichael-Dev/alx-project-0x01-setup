import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [field]: value }
        }
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        company: { ...prev.company, [field]: value }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>

        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[70vh]">

          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          {/* Address */}
          <h3 className="font-semibold mt-3 mb-1">Address</h3>

          <input
            name="address.street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="address.suite"
            placeholder="Suite"
            value={user.address.suite}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="address.city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="address.zipcode"
            placeholder="Zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <h4 className="font-semibold mt-3 mb-1">Geo</h4>

          <input
            name="geo.lat"
            placeholder="Latitude"
            value={user.address.geo.lat}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="geo.lng"
            placeholder="Longitude"
            value={user.address.geo.lng}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          {/* Company */}
          <h3 className="font-semibold mt-3 mb-1">Company</h3>

          <input
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="company.bs"
            placeholder="BS"
            value={user.company.bs}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UserModal;
