import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Select, SelectItem } from '@nextui-org/react';
import { MdEdit, MdCalendarToday } from 'react-icons/md';

const EditSession = ({ pageTitle, sessions }) => {
  return (
    <div className="container mx-auto p-4 font-sans">
      <Card className="bg-[#01377d] text-white">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="font-bold text-4xl font-roboto">{pageTitle}</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="bg-white text-black p-4 rounded-md">
            <form className="space-y-6">
              <Select
                label={<span className="text-lg font-semibold">Select Session</span>}
                placeholder="Choose a session"
                className="max-w-xs"
                startContent={<MdCalendarToday className="text-[#009dd1]" />}
              >
                {sessions.map((session) => (
                  <SelectItem key={session.id} value={session.id}>
                    {session.name}
                  </SelectItem>
                ))}
              </Select>

              <Input
                label={<span className="text-lg font-semibold">Session Start Year</span>}
                placeholder="Enter start year"
                className="max-w-xs"
                startContent={<MdCalendarToday className="text-[#009dd1]" />}
              />

              <Input
                label={<span className="text-lg font-semibold">Session End Year</span>}
                placeholder="Enter end year"
                className="max-w-xs"
                startContent={<MdCalendarToday className="text-[#009dd1]" />}
              />

              <Button
                color="primary"
                className="mt-6 font-bold text-xl bg-[#009dd1] hover:bg-[#26b170]"
                startContent={<MdEdit className="w-6 h-6" />}
              >
                Update Session
              </Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditSession;
