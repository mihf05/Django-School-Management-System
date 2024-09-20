import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Textarea } from '@nextui-org/react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const StudentFeedback = ({ pageTitle }) => {
  return (
    <div className="container mx-auto p-4 font-sans">
      <Card className="bg-[#01377d] text-white">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-3xl">{pageTitle}</h2>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="bg-white text-black p-4 rounded-md">
            <form className="space-y-4">
              <Input
                label="Subject"
                placeholder="Enter subject"
                className="max-w-xs"
              />
              <Textarea
                label="Feedback"
                placeholder="Enter your feedback here"
                className="max-w-lg"
              />
              <Button
                color="primary"
                className="mt-4 font-semibold text-lg bg-[#009dd1] hover:bg-[#26b170]"
                startContent={<HiOutlineChatAlt2 className="w-5 h-5" />}
              >
                Submit Feedback
              </Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentFeedback;
