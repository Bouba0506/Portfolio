import React from "react";
import man from "../../assets/man.png"
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
const Login = () => {
  return (
    <div className="mt-16 w-full relative lg:flex justify-between gap-4 px-8">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-semibold">
          Their opinion about their experience with us
        </h1>
        <p className="text-xl text-gray-500">
          Accepte-toi tel que tu es :Reconnais et accepte tes
          imperfections.Personne n'est parfait. Pratique la pleine conscience
          Sois présent et conscient de tes pensées. Remarque quand tu te juges
          et redirige ton attention vers des pensées positives.
        </p>
      </div>
      <div className=" bg-blue-500 rounded-lg p-4">
      <p className="text-xl text-white">
          Accepte-toi tel que tu es :Reconnais et accepte tes
          imperfections.Personne n'est parfait. Pratique la pleine conscience
          Sois présent et conscient de tes pensées. Remarque quand tu te juges
          et redirige ton attention vers des pensées positives.
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
             <div className="w-10 h-10 relative">
              <img src={man} alt="man" className="w-full h-full object-contain rounded-full"/>
             </div>
             <div className="flex text-white text-xs font-semibold flex-col items-start">
              <h1>Bah Boubacar</h1>
              <p>Géniel Logiciel</p>
             </div>
          </div>
          <div className="flex items-center text-white gap-2">
           <FaArrowLeft/>
           <FaArrowRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
