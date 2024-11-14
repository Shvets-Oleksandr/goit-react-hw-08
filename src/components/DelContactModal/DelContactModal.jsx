import css from './DelContactModal.module.css';
const DelContactModal = ({ onCloseDelModal, handleDelete, contactName }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h4>Are you sure you want to delete the {contactName}</h4>
        <div className={css.wrapperBtn}>
          <button onClick={onCloseDelModal} className={css.btn} type="button">
            Cancel
          </button>
          <button onClick={handleDelete} className={css.btn} type="button">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelContactModal;
