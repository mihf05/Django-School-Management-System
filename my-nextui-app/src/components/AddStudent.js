import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Button, Select, SelectItem } from '@nextui-org/react';
import { FaUserPlus, FaEnvelope, FaUser, FaLock, FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';

const AddStudent = ({ pageTitle, courses, sessions }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    address: '',
    course: '',
    gender: '',
    session: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <Card className="bg-[#01377d] text-white">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="font-bold text-3xl sm:text-4xl font-roboto">{pageTitle}</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <form onSubmit={handleSubmit} className="bg-white text-black p-4 rounded-md space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                startContent={<FaUser className="text-[#009dd1]" />}
                className="w-full"
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                startContent={<FaUser className="text-[#009dd1]" />}
                className="w-full"
              />
              <Input
                label="Email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                startContent={<FaEnvelope className="text-[#009dd1]" />}
                className="w-full"
              />
              <Input
                label="Username"
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                startContent={<FaUser className="text-[#009dd1]" />}
                className="w-full"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                startContent={<FaLock className="text-[#009dd1]" />}
                className="w-full"
              />
              <Input
                label="Address"
                placeholder="Enter address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                startContent={<FaUser className="text-[#009dd1]" />}
                className="w-full"
              />
              <Select
                label="Course"
                placeholder="Select course"
                value={formData.course}
                onChange={(e) => handleInputChange('course', e.target.value)}
                startContent={<FaUserGraduate className="text-[#009dd1]" />}
                className="w-full"
              >
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Gender"
                placeholder="Select gender"
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                startContent={<FaUser className="text-[#009dd1]" />}
                className="w-full"
              >
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </Select>
              <Select
                label="Session"
                placeholder="Select session"
                value={formData.session}
                onChange={(e) => handleInputChange('session', e.target.value)}
                startContent={<FaCalendarAlt className="text-[#009dd1]" />}
                className="w-full"
              >
                {sessions.map((session) => (
                  <SelectItem key={session.id} value={session.id}>
                    {session.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Button
              type="submit"
              color="primary"
              className="mt-6 font-bold text-xl bg-[#009dd1] hover:bg-[#26b170] transition-colors duration-300 w-full sm:w-auto"
              startContent={<FaUserPlus className="w-6 h-6" />}
            >
              Add Student
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddStudent;
