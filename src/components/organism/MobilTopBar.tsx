import LoginModal from "@component/login/LoginModal";
import { Avatar, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/router";
import { IoLogInOutline } from "react-icons/io5";
import useLogin from "../../utils/login/useLogin";

export default function MobileTopBar() {
  const { userProfile, isLogin } = useLogin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <div className="sticky top-0 mt-6 px-4 flex w-full justify-between bg-white z-10 border-b-1 h-[60px]">
        <div className="mt-4">
          {isLogin ? (
            <Avatar
              size="sm"
              className="bg-[#004964] text-white"
              name={userProfile.name?.[0]}
              onClick={() => {
                if (isOpen) {
                  onClose();
                } else {
                  onOpen();
                }
              }}
            />
          ) : (
            <IoLogInOutline
              className="size-7"
              onClick={() => {
                if (isOpen) {
                  onClose();
                } else {
                  onOpen();
                }
              }}
            />
          )}
        </div>
        <div>
          <img
            className="cursor-pointer"
            src={"/images/logo/31Logo_mobile.png"}
            width={120}
            height={54}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div className="invisible">
          <IoLogInOutline
            className="size-7 mt-4"
            onClick={() => {
              if (isOpen) {
                onClose();
              } else {
                onOpen();
              }
            }}
          />
        </div>
      </div>

      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
