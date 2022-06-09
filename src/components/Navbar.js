import InputText from "./DataInput/InputText";

const Navbar = ({ handlerSearch }) => {
  return (
    <div className="navbar px-4 z-50 md:px-10 sticky top-0 mx-auto bg-base-100">
      <div className="flex-1">
        <p className="font-bold text-3xl">Note App</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <InputText
            placeholder="Cari Catatan ..."
            onChange={(e) => handlerSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
