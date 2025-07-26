import { UserCardProps, UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserCardProps> = (name{}:UserProps) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500 italic">@{user.username}</p>
      </div>

      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Contact Information</h3>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> {user.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Website:</span>
            <a
              href={`${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline ml-1"
            >
              {user.website}
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">
            {user.address.street}, {user.address.suite}
          </p>
          <p className="text-gray-600">
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Geo:</span> {user.address.geo.lat},{" "}
            {user.address.geo.lng}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Company</h3>
          <p className="text-gray-800 font-medium">{user.company.name}</p>
          <p className="text-gray-600 italic">{user.company.catchPhrase}</p>
          <p className="text-gray-600">{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
