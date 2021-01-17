import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';

import './components.css';

import { IoCaretForward } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import AnimateChild from '../animation/AnimateChild';

const options = [
  {
    title: 'Engaging Virtual Space',
    description:
      'Users engaging on our platform utilize cursors that act like real-time characters, being able to move around the space ',
  },
  {
    title: 'Real Time Meeting Rooms',
    description:
      'Mimicking real office rooms in buildings, users would be able to move in and out of rooms just like an in-person interaction, and enjoying the ability to schedule meetings seamlessly in both the personal and professional setting',
  },
  { title: 'Room Bookings', description: 'Some words for this part' },
];

const display = [
  {
    id: 'Key 1',
    content: (
      <div style={{ background: 'grey', height: '30vh' }}>
        <p>1 Some content that goes here</p>
      </div>
    ),
  },
  {
    id: 'Key 2',
    content: (
      <div style={{ background: 'grey', height: '30vh' }}>
        <p>2 Some more content that goes here</p>
      </div>
    ),
  },
  {
    id: 'Key 3',
    content: (
      <div style={{ background: 'grey', height: '30vh' }}>
        <p>3 Some more more content that goes here</p>
      </div>
    ),
  },
];

const SlideShow = ({ content, id }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          {content}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Showcase = () => {
  const [choice, setChoice] = useState(0);

  return (
    <Row>
      <Col lg={{ order: 12 }} className='my-auto'>
        <div className='text-center'>
          {options.map((element, index) => (
            <AnimateChild key={`Showcase choice - ${index}`}>
              <div className='showcase-btn' onClick={() => setChoice(index)}>
                <h4
                  className={`h5 text-close ${
                    index === choice ? 'gradient-text-hero' : ''
                  }`}
                >
                  {element.title}
                </h4>
                {index === choice && (
                  <p className='text-muted text-close d-none d-lg-block'>
                    {element.description}
                  </p>
                )}
              </div>
            </AnimateChild>
          ))}
        </div>
      </Col>
      <Col sm={12} md={7}>
        <SlideShow content={display[choice].content} id={display[choice].id} />
      </Col>
    </Row>
  );
};

export default Showcase;
