import Button from "./Button";

const Card = ({ title, body, createdAt, archived, onClick, onDelete }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body p-5">
        <h2 className="card-title ">{title}</h2>
        <small className="text-sm">{createdAt}</small>
        <p>{body}</p>
        <div className="card-actions justify-evenly mt-3">
          <Button variant="delete" onClick={onDelete}>
            Hapus
          </Button>
          <Button variant={archived ? "info" : "ghost"} onClick={onClick}>
            {archived ? "Pindahkan" : "Arsipkan"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
