import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Select, SelectItem } from '@nextui-org/react';
import { MdEdit, MdBook, MdSchool, MdPerson } from 'react-icons/md';

const EditSubject = ({ pageTitle, subjects, staffs, courses }) => {
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
                label={<span className="text-lg font-semibold">Select Subject</span>}
                placeholder="Choose a subject"
                className="max-w-xs"
                startContent={<MdBook className="text-[#009dd1]" />}
              >
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </Select>

              <Input
                label={<span className="text-lg font-semibold">Subject Name</span>}
                placeholder="Enter subject name"
                className="max-w-xs"
                startContent={<MdEdit className="text-[#009dd1]" />}
              />

              <Select
                label={<span className="text-lg font-semibold">Course</span>}
                placeholder="Select course"
                className="max-w-xs"
                startContent={<MdSchool className="text-[#009dd1]" />}
              >
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </Select>

              <Select
                label={<span className="text-lg font-semibold">Staff</span>}
                placeholder="Select staff"
                className="max-w-xs"
                startContent={<MdPerson className="text-[#009dd1]" />}
              >
                {staffs.map((staff) => (
                  <SelectItem key={staff.id} value={staff.id}>
                    {staff.name}
                  </SelectItem>
                ))}
              </Select>

              <Button
                color="primary"
                className="mt-6 font-bold text-xl bg-[#009dd1] hover:bg-[#26b170]"
                startContent={<MdEdit className="w-6 h-6" />}
              >
                Update Subject
              </Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditSubject;
