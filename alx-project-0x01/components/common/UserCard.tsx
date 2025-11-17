import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
      
      <p className="text-gray-600"><span className="font-semibold">Email:</span> {email}</p>
      <p className="text-gray-600"><span className="font-semibold">Phone:</span> {phone}</p>
      <p className="text-gray-600"><span className="font-semibold">Website:</span> {website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">{address.city}, {address.street}</p>
      </div>
    </div>
  );
};

export default UserCard;
