import React, { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import FormModal from './'

const Modal = ({ showModal, toggleModal }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            toggleModal();
        }
    };
    const keyPress = useCallback(
        (e) => {
            if(e.key && showModal) {
                toggleModal();
            }
        },
        [showModal, toggleModal]
    );
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const backgroundVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    const modalVariants = {
        initial: {
            opacity: 0,
            y: 200,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 100,
            },
        },

        exit: {
            y: -200,
            opacity: 0,
        },
    };

  return (
    <AnimatePresence>
        {showModal && (
            
        )}
    </AnimatePresence>
  )
}

export default Modal;