const InputButton = () => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none has-[:invalid]:bg-red-100">
      <input
        className="w-full rounded-full h-10 bg-gray-200 py-2 pl-5 pr-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
        type="text"
        required
        placeholder="Search here.."
      />
      <span className="text-red-500 font-medium hidden peer-invalid:block">
        Email is Invalid
      </span>
      <button className="py-2 text-white rounded-full active:scale-90 transition-transform font-medium focus:scale-90 md:px-10 bg-gradient-to-tr bg-black">
        Search
      </button>
    </div>
  );
};

export default InputButton;
