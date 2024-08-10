import React, { useEffect, useState } from 'react'
import { tododata } from '../Todo'
import { motion, AnimatePresence, color } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { setProps, setCardData } from '../redux/reducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Todo = () => {

    let initailsfromData = useSelector((state) => state.TODO.formData);
    let initailsCardData = useSelector((state) => state.TODO.data);
    console.log("🐒 ~ file: Todo.jsx:10 ~ Todo ~ initailsCardData:", initailsCardData)

    const dispatch = useDispatch()

    useEffect(() => {
        const setFromData = async () => {
            let formData = {}
            formData["todotask"] = ''
            await dispatch(setProps(formData))
        }
        setFromData()
    }, [])

    // const initailsData = useSelector((state) => state.taskManager.data);

    const [items, setItems] = useState(tododata);
    const [selectedItem, setSelectedItem] = useState(null)

    const openModal = (item) => {
        setSelectedItem(item);
        // setItems(items.filter((i) => i.id !== item.id));
        // setItems(items);
    };
    const closeModal = () => {
        setItems([...items]);
        setSelectedItem(null);
    }

    const renderToDoCards = () => {
        return initailsCardData?.map((data, index) => {
            return (
                <>
                    <motion.div layout={data.id} onClick={() => openModal(data)} className='row card-list'>
                        <motion.div className='co-12 justify-content-center cards'>
                            <motion.div className='d-flex justify-content-between'>
                                <div>
                                    <motion.span>{`ToDo Task ${index + 1}`}</motion.span>
                                    {/* <motion.span>{data.id}</motion.span> */}
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">delete_forever</span>
                                    <span class="material-symbols-outlined">edit</span>
                                </div>

                            </motion.div>
                            <div className='row mt-4'>
                                <li>{data.todotask}</li>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )
        })

    }

    const handleOnChangeData = async (type, key, value) => {
        let fromData = { ...initailsfromData }
        if (type === "number-input") {
            fromData[key] = value
        } else {
            fromData[key] = value
        }
        dispatch(setProps(fromData))
    }

    const handleAddData = async () => {
        let carddata = [...initailsCardData]
        let date = new Date()
        let formData = { ...initailsfromData }
        if(!formData.todotask){
            toast("Please Add  Todo ...!");
        }else{
            initailsfromData = { ...initailsfromData, "createddate": date }
            carddata.push(initailsfromData)
            formData['todotask'] = ''
            dispatch(setProps(formData))
            dispatch(setCardData(carddata))
        }

    }

    return (
        <>
            <div>
                <div className='container d-flex justify-content-center bck-color'>
                    <div className='row'>
                        <h2>TODO</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center mb-3'>
                        <input
                            type='text'
                            className='input-box'
                            placeholder='Enter your task... !'
                            onChange={(e) => handleOnChangeData("text", "todotask", e.target.value)}
                            value={initailsfromData['todotask']}
                        />
                        <button className='add-task'>
                            <div className='d-flex justify-content-center' onClick={async () => await handleAddData()}>
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
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='col-6'>Modal Content</div>
                                        <div className='col-auto'>
                                            <button className="modal-close " onClick={() => closeModal(null)}>
                                                <span className='modal-close-icon'>x</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='modal-card-body'>
                                        <ul>
                                            <li>Hello From Task Description</li>
                                        </ul>
                                    </div>
                                </div>

                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <ToastContainer 
            position="bottom-right"
            // autoClose={false}
            newestOnTop
            closeOnClick
            rtl={false}
            draggable
            theme="colored"
            />
        </>
    )
}

export default Todo
