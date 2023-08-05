import PopupWithForm from "./PopupWithForm";

const PopupWithSubmit = ({ isOpened, onClose, onConfirm, onLoading }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm();
  };

  return (
    <PopupWithForm
      name="profileData"
      title="Вы уверены?"
      buttonText={onLoading ? `Удаление...` : `Удалить`}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default PopupWithSubmit;
