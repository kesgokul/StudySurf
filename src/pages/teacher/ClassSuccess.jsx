import successImage from "/success.png";
import RegisterLayout from "../../components/layout/RegisterLayout";

export default function ClassSuccess() {
  return (
    <RegisterLayout>
      <button
        className="px-2 py-2 ml-auto bg-transparent text-gray-500 hover:text-black focus:text-black"
        onClick={() => {}}
      >
        X
      </button>
      <img className="h-32 w-32" src={successImage} alt="green check mark" />
      <h1 className="text-2xl text-green-600">Success</h1>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor
        incidunt fugit deserunt atque culpa id ratione suscipit quis illo!
      </p>
      <div className="w-3/4 h-16 bg-button-yellow text-button-text-green"></div>
    </RegisterLayout>
  );
}
