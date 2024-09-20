import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/table';
import { Modal, Button, Input, Select, SelectItem } from '@nextui-org/react';
import { FaReply, FaTimes, FaCheck } from 'react-icons/fa';

const StudentLeaveView = ({ leaves }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [replyStatus, setReplyStatus] = useState('');

  const columns = [
    { key: 'id', label: '#' },
    { key: 'student', label: 'Student' },
    { key: 'course', label: 'Course' },
    { key: 'message', label: 'Message' },
    { key: 'date', label: 'Leave Date' },
    { key: 'created_at', label: 'Submitted On' },
    { key: 'action', label: 'Action' },
  ];

  const handleReplyClick = (leave) => {
    setSelectedLeave(leave);
    setIsModalOpen(true);
  };

  const handleReplySubmit = () => {
    // Here you would typically make an API call to update the leave status
    console.log(`Replying to leave ${selectedLeave.id} with status: ${replyStatus}`);
    setIsModalOpen(false);
    setSelectedLeave(null);
    setReplyStatus('');
  };

  const renderCell = (leave, columnKey) => {
    const cellValue = leave[columnKey];
    switch (columnKey) {
      case 'action':
        return (
          <Button
            auto
            color="primary"
            onClick={() => handleReplyClick(leave)}
            className="bg-[#009dd1] hover:bg-[#26b170]"
          >
            <FaReply /> Reply
          </Button>
        );
      case 'status':
        return leave.status === 0 ? (
          <span className="text-[#7ed348]">Pending</span>
        ) : leave.status === -1 ? (
          <span className="text-[#01377d]">Rejected</span>
        ) : (
          <span className="text-[#26b170]">Approved</span>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#01377d]">Student Leave Requests</h1>
      <Table aria-label="Student Leave Requests">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {leaves.map((leave) => (
            <TableRow key={leave.id}>
              {columns.map((column) => (
                <TableCell key={`${leave.id}-${column.key}`}>
                  {renderCell(leave, column.key)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header>
          <h3 id="modal-title" className="text-xl font-bold text-[#01377d]">
            Reply to Leave Request
          </h3>
        </Modal.Header>
        <Modal.Body>
          <p>Reply to {selectedLeave?.student}'s Leave Request</p>
          <Select
            label="Status"
            placeholder="Select status"
            onChange={(e) => setReplyStatus(e.target.value)}
          >
            <SelectItem key="1" value="1">Approve</SelectItem>
            <SelectItem key="-1" value="-1">Reject</SelectItem>
          </Select>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setIsModalOpen(false)}>
            <FaTimes /> Close
          </Button>
          <Button auto onClick={handleReplySubmit} className="bg-[#009dd1] hover:bg-[#26b170]">
            <FaCheck /> Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentLeaveView;
