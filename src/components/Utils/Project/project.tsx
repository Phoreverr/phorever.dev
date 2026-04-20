import React, { useState } from 'react';
import { Modal } from 'antd';
import './project.scss';

interface IProject {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
  /** When true with isPrivate, modal copy reflects a UI showcase instead of client confidentiality. */
  isUiDemo?: boolean;
}

export default function Project(props: IProject) {
  const { title, shortDescription, longDescription, github, live, stack, isPrivate, isLive, github2, isUiDemo } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="box_container md:hover:shadow-xs md:hover:z-50" onClick={showModal} style={{ cursor: 'pointer' }}>
        <div className="box">
          <div className="project_details">
            <h3>{title}</h3>
            <p className="project_card_summary">{shortDescription}</p>
            <small className="project_card_stack">{stack}</small>
          </div>

          <div className="project_links">
            {isLive ? (
              <small>
                <a href={live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <i className="far fa-eye"></i> Live
                </a>
              </small>
            ) : (
              ''
            )}

            {isPrivate ? (
              ''
            ) : (
              <span>
                <small>
                  <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <i className="fas fa-code-branch"></i> {github2 ? 'FE Code' : 'Code'}
                  </a>
                </small>
                {github2 ? (
                  <small>
                    <a href={github2} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <i className="fas fa-code-branch"></i> BE Code
                    </a>
                  </small>
                ) : (
                  ''
                )}
              </span>
            )}
          </div>
        </div>
      </div>

      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={[
          <div key="footer" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            {isLive && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
                  <i className="far fa-eye"></i> View Live
                </button>
              </a>
            )}
            {!isPrivate && github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
                  <i className="fas fa-code-branch"></i> {github2 ? 'Frontend Code' : 'View Code'}
                </button>
              </a>
            )}
            {github2 && (
              <a href={github2} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
                  <i className="fas fa-code-branch"></i> Backend Code
                </button>
              </a>
            )}
          </div>
        ]}
      >
        <div style={{ padding: '20px 0' }}>
          <h4 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Description</h4>
          <p style={{ marginBottom: '20px', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{longDescription}</p>

          <h4 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Tech Stack</h4>
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>{stack}</p>

          {isPrivate && isUiDemo && (
            <p style={{ color: '#888', fontStyle: 'italic' }}>
              <i className="fas fa-palette"></i> UI showcase—repository not linked here.
            </p>
          )}
          {isPrivate && !isUiDemo && (
            <p style={{ color: '#888', fontStyle: 'italic' }}>
              <i className="fas fa-lock"></i> This is a private project
            </p>
          )}
        </div>
      </Modal>
    </>
  );
}
