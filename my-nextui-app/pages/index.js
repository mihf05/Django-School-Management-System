import { Button } from '@nextui-org/react';
import AddSubject from '../src/components/AddSubject';
import StudentFeedback from '../src/components/StudentFeedback';
import EditSubject from '../src/components/EditSubject';
import EditSession from '../src/components/EditSession';
import StudentLeaveView from '../src/components/StudentLeaveView';
import AddStudent from '../src/components/AddStudent';

export default function Home() {
  // Mock data for student feedbacks
  const mockFeedbacks = [
    { id: 1, student: 'John Doe', session: '2023', feedback: 'Great course!', created_at: '2023-05-01', reply: '', updated_at: '' },
    { id: 2, student: 'Jane Smith', session: '2023', feedback: 'Need more practice exercises.', created_at: '2023-05-02', reply: 'Thank you for your feedback. We will consider adding more exercises.', updated_at: '2023-05-03' },
  ];

  // Mock data for subjects, staffs, and courses
  const mockSubjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'English' },
  ];

  const mockStaffs = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Prof. Johnson' },
    { id: 3, name: 'Ms. Williams' },
  ];

  const mockCourses = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Biology' },
    { id: 3, name: 'Literature' },
  ];

  // Mock data for sessions
  const mockSessions = [
    { id: 1, name: '2023-2024' },
    { id: 2, name: '2024-2025' },
    { id: 3, name: '2025-2026' },
  ];

  // Mock data for leave requests
  const mockLeaves = [
    { id: 1, student: 'John Doe', course: 'Computer Science', message: 'Family emergency', date: '2023-06-15', created_at: '2023-06-10', status: 0 },
    { id: 2, student: 'Jane Smith', course: 'Biology', message: 'Medical appointment', date: '2023-06-20', created_at: '2023-06-12', status: 1 },
    { id: 3, student: 'Mike Johnson', course: 'Literature', message: 'Personal reasons', date: '2023-06-25', created_at: '2023-06-14', status: -1 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to School Management System</h1>
      <div className="mb-4">
        <Button color="primary">Login</Button>
      </div>
      <p className="mb-4">This is a placeholder for the homepage content.</p>
      <div className="mt-8">
        <AddSubject pageTitle="Add Subject" messages={[]} form={{}} />
      </div>
      <div className="mt-8">
        <StudentFeedback pageTitle="Student Feedback" feedbacks={mockFeedbacks} />
      </div>
      <div className="mt-8">
        <EditSubject
          pageTitle="Edit Subject"
          subjects={mockSubjects}
          staffs={mockStaffs}
          courses={mockCourses}
        />
      </div>
      <div className="mt-8">
        <EditSession
          pageTitle="Edit Session"
          sessions={mockSessions}
        />
      </div>
      <div className="mt-8">
        <StudentLeaveView leaves={mockLeaves} />
      </div>
      <div className="mt-8">
        <AddStudent
          pageTitle="Add Student"
          courses={mockCourses}
          sessions={mockSessions}
        />
      </div>
    </div>
  );
}
