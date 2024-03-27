import React, {useState} from 'react';
import Modal from '../components/Modals/Modal';

const Contacts = () => {
    const [modalActive, setModalActive] = useState(false);
    const bodyContent = (
        <div className="text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit numquam provident sit tenetur totam? A ab aperiam cupiditate debitis, dignissimos ex incidunt iure labore nemo nisi quas quisquam velit veritatis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit numquam provident sit tenetur totam? A ab aperiam cupiditate debitis, dignissimos ex incidunt iure labore nemo nisi quas quisquam velit veritatis?</p>
        </div>
    )
    const footerContent = (
        <button className="primary-btn">Читать</button>
    )
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Контакты</h3>
                        <button className="primary-btn" onClick={() => setModalActive(true)}>Модалка</button>
                        <Modal active={modalActive} setActive={setModalActive} title="Lorem" body={bodyContent} footer={footerContent}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
