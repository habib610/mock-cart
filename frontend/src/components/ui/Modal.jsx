/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "../../lib/cn";
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: 50 },
};

const Modal = ({ isOpen, onClose, children, modalContentClassName }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    itemType=""
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-2 lg:p-6  relative mx-4  flex justify-center"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, type: "keyframes" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className=" absolute top-1 right-1.5 text-2xl lg:text-3xl   text-gray-400 hover:cursor-pointer"
                            onClick={onClose}
                        >
                            <LiaTimesSolid />
                        </button>

                        <div className={cn(modalContentClassName)}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
