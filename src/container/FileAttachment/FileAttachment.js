import React, { useRef, useState } from 'react';
import { Card, Table, Dropdown, ButtonGroup } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';
import "../../assets/css/custum.css"
const FileAttachment = () => {
  const fileInputRef = useRef(null);
  const [fileType, setFileType] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const handleSelect = (eventKey) => {
    alert(`You selected: ${eventKey}`);
  };

  const handleFileSelect = (eventKey) => {
    if (eventKey === 'Clear') {
      setAttachedFiles([]);
      return;
    }

    setFileType(eventKey);
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const newFile = {
      name: file.name,
      type: fileType,
      caption: '',
    };

    setAttachedFiles([...attachedFiles, newFile]);
    event.target.value = ''; // Reset input so selecting the same file again works
  };

  return (
    <>
      <input
        type="file"
        accept={
          fileType === 'Photos'
            ? 'image/*'
            : fileType === 'Videos'
            ? 'video/*'
            : fileType === 'Pdf'
            ? '.pdf'
            : fileType === 'Docx'
            ? '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            : '*'
        }
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <Card className="mb-3 shadow-sm border-0">
        <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
          <strong>Insert Variables</strong>
          <Dropdown onSelect={handleSelect} as={ButtonGroup}>
            <Dropdown.Toggle variant="success" className="p-0 border-0 shadow-none no-caret">
              <BiMenu size={22} color="white" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item eventKey="Insert Full Name">Insert Full Name</Dropdown.Item>
              <Dropdown.Item eventKey="Insert First Name">Insert First Name</Dropdown.Item>
              <Dropdown.Item eventKey="Insert Last Name">Insert Last Name</Dropdown.Item>
              <Dropdown.Item eventKey="Insert Variable">Insert Variable</Dropdown.Item>
              <Dropdown.Item eventKey="Insert Random Tag">Insert Random Tag</Dropdown.Item>
              <Dropdown.Item eventKey="Insert Spintax">Insert Spintax</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>

        <Card.Body>
          <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
            <strong>Attach Files & Photos</strong>
            <Dropdown onSelect={handleFileSelect} as={ButtonGroup}>
              <Dropdown.Toggle variant="success" className="p-0 border-0 shadow-none no-caret">
                <BiMenu size={22} color="white" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="Photos">Photos</Dropdown.Item>
                <Dropdown.Item eventKey="Videos">Videos</Dropdown.Item>
                <Dropdown.Item eventKey="Pdf">Pdf</Dropdown.Item>
                <Dropdown.Item eventKey="Docx">Docx</Dropdown.Item>
                <Dropdown.Item eventKey="Clear">Clear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>

          <Table bordered size="sm" className="mb-0">
            <thead className="table-success text-white ">
              <tr>
                <th>File Name</th>
                <th>Type</th>
                <th>Caption</th>
              </tr>
            </thead>
            <tbody>
              {attachedFiles.length > 0 ? (
                attachedFiles.map((file, idx) => (
                  <tr key={idx}>
                    <td>{file.name}</td>
                    <td>{file.type}</td>
                    <td>{file.caption || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No files attached
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default FileAttachment;
