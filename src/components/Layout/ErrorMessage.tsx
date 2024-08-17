import { MdOutlineRunningWithErrors } from "react-icons/md";

const ErrorMessage = () => {
  return (
    <div className="w-full h-full min-h-40 flex items-center justify-center flex-col">
      <MdOutlineRunningWithErrors className="size-12" />
      <div className="mt-10 text-[16px] font-bold text-red-400">
        에러가 발생했습니다.
      </div>
      <div className="text-[16px] font-bold text-red-400">
        잠시 후 다시 시도해주세요.
      </div>
    </div>
  );
};

export default ErrorMessage;
