import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { HiPlusCircle } from 'react-icons/hi';

const AddSubject = ({ pageTitle, messages, form }) => {
  return (
    <div className="container mx-auto p-4 font-sans">
      <Card className="bg-[#01377d] text-white">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-3xl">{pageTitle}</h2>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {/* Placeholder for form */}
          <div className="bg-white text-black p-4 rounded-md">
            {/* Replace this with actual form implementation */}
            <p className="text-lg mb-4">Form placeholder</p>
            {messages && messages.map((message, index) => (
              <p key={index} className="text-red-500 text-sm">{message}</p>
            ))}
            <Button
              color="primary"
              className="mt-4 font-semibold text-lg"
              startContent={<HiPlusCircle className="w-6 h-6" />}
            >
              Add Subject
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddSubject;
