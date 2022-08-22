import { Message_data } from "../../context/context";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Share() {
  const { message } = useContext(Message_data);

  var router = useRouter();

  // console.log("sgare",message)

  return (
    <>
      <div className="bg-indigo-100  py-8 flex">
        <div
          onClick={() => router.push("/")}
          className="mx-16 font-bold text-xl text-gray-600 cursor-pointer"
        >
          first component
        </div>
        <div
          onClick={() => router.push("/share")}
          className="mx-2 text-xl font-bold text-gray-600 cursor-pointer"
        >
          second component
        </div>
      </div>

      <div className="py-8 px-16">
        <p>{message}</p>
      </div>
    </>
  );
}
