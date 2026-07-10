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
        rootClassName="project_modal"
        styles={{
          container: { background: '#0d0d0e' },
          header: { background: '#0d0d0e' },
          body: { background: '#0d0d0e' },
          footer: { background: '#0d0d0e' },
        }}
        footer={[
          <div key="footer" className="project_modal_actions">
            {isLive && (
              <a className="project_modal_action--primary" href={live} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="far fa-eye"></i> View Live
                </button>
              </a>
            )}
            {!isPrivate && github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fas fa-code-branch"></i> {github2 ? 'Frontend Code' : 'View Code'}
                </button>
              </a>
            )}
            {github2 && (
              <a href={github2} target="_blank" rel="noopener noreferrer">
                <button>
                  <i className="fas fa-code-branch"></i> Backend Code
                </button>
              </a>
            )}
          </div>
        ]}
      >
        <div className="project_modal_body">
          <h4 className="project_modal_label">Description</h4>
          <p className="project_modal_description">{longDescription}</p>

          <h4 className="project_modal_label">Tech Stack</h4>
          <div className="project_modal_stack">
            {stack.split('+').map((tech) => (
              <span key={tech} className="project_modal_chip">
                {tech.trim()}
              </span>
            ))}
          </div>

          {isPrivate && isUiDemo && (
            <p className="project_modal_note">
              <i className="fas fa-palette"></i>
              <span>
                UI demo. Repository not linked here. All figures, copy, and business details in the live preview are
                placeholder content for layout and are not factual.
              </span>
            </p>
          )}
          {isPrivate && !isUiDemo && (
            <p className="project_modal_note">
              <i className="fas fa-lock"></i>
              <span>This is a private project</span>
            </p>
          )}
        </div>
      </Modal>
    </>
  );
}
