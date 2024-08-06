import React, { useState } from 'react'
import { tododata } from '../Todo'
import { motion, AnimatePresence } from "framer-motion"
const Todo = () => {

    const [items, setItems] = useState(tododata);
    const [selectedItem, setSelectedItem] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log('selectedItem :>> ', selectedItem);

    const openModal = (item) => {
        setSelectedItem(item);
        setItems(items.filter((i) => i.id !== item.id));
    };
    const closeModal = () => {
        setItems([...items, selectedItem]);
        setSelectedItem(null);
    }

    const renderToDoCards = () => {
        return items?.map(data => {
            return <motion.div layout={data.id} onClick={() => openModal(data)} className='row card-list'>
                <motion.div className='co-12 justify-content-center cards'
                //  whileHover={{ scale: 0.7, rotate: 360 }}
                //  whileTap={{
                //    scale: 0.8,
                //    rotate: -90,
                //    borderRadius: "100%"
                //  }}
                 >
                    <motion.div className='d-flex justify-content-between'>
                        {/* <motion.div className='row'> */}
                        <div>
                            <motion.span>{data.name}</motion.span>
                            <motion.span>{data.id}</motion.span>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">delete_forever</span>
                            <span class="material-symbols-outlined">edit</span>
                        </div>
                        {/* </motion.div> */}
                    </motion.div>
                </motion.div>
            </motion.div>
        })

    }
    // const ModalComponent = () => {
    //     return (
    //         <AnimatePresence>
    //             {isModalOpen && (
    //                 <motion.div

    //                     className="modal-backdrop"
    //                     initial={{ opacity: 0 }}
    //                     animate={{ opacity: 1 }}
    //                     exit={{ opacity: 0 }}
    //                 >
    //                     <motion.div
    //                         className="modal-content"
    //                         initial={{ scale: 0 }}
    //                         animate={{ scale: 1 }}
    //                         exit={{ scale: 0 }}
    //                         layoutId={isModalOpen}
    //                     >
    //                         <button className="modal-close" onClick={()=>closeModal(null)}>×</button>
    //                         <p>Modal Content</p>
    //                     </motion.div>
    //                 </motion.div>
    //             )}
    //         </AnimatePresence>
    //     )
    // }
    return (
        <div>
            <div className='container d-flex justify-content-center bck-color'>
                <div className='row'>
                    <h2>TODO</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center mb-3'>
                    <input type='text' className='input-box' placeholder='Enter your task... !' />
                    <button className='add-task'>
                        <div className='d-flex justify-content-center'>
                            <span class="material-symbols-outlined">add</span>
                            <span>Add Task</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {renderToDoCards()}
            </div>

            < AnimatePresence >
                {selectedItem && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            layoutId={selectedItem.id}
                        >
                            <button className="modal-close" onClick={() => closeModal(null)}>×</button>
                            <p>Modal Content</p>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Todo
