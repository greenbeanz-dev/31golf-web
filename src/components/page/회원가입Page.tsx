import gqlClient from "@/gql/gqlClient";
import {
  CreateCustomerQueryByWeb,
  UpdateCustomerByIdQueryByWeb,
} from "@/gql/query/customer/crud";
import { Button, Input } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSmsSend } from "../../service/sms/useSmsSend";
import useLogin from "../../utils/login/useLogin";

export function 회원가입Page() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isVertify, setIsVertify] = useState(false);
  const [isSendCode, setIsSendCode] = useState(false);
  const [customerId, setCustomerId] = useState(0);
  const { login, isLogin, logOut, userProfile } = useLogin();

  const queryClient = useQueryClient();

  const router = useRouter();
  const { provider } = router.query;

  const { mutateAsync: createCustomer, isLoading } = useMutation(
    async () => {
      // if (!userProfile.provider) return;
      return await gqlClient.request(CreateCustomerQueryByWeb, {
        name: name,
        phone: phone,
        email: "",
        memo: "",
        fax: "",
        isVillain: false,
        provider: provider === "local" ? "local" : userProfile.provider,
      });
    },
    {
      onSuccess: async (result) => {
        if (result) {
          const { createCustomerByWeb } = result;
          const smsData = await useSmsSend({
            phoneNumber: phone,
            customerId: createCustomerByWeb.id,
          });
          if (smsData === "OK") {
            setCustomerId(createCustomerByWeb.id);
            setIsSendCode(true);
          }
        }
        queryClient.invalidateQueries(["customerList"]);
        // alert("회원가입이 완료되었습니다.");
        // window.location.href = "/";
      },
      onError: (error) => {
        console.log("error", error);
        alert("에러가 발생했습니다.");
      },
    }
  );

  const saltRounds = 10; // 솔트의 라운드 수 설정

  const { mutateAsync: updateCustomer } = useMutation(
    async () => {
      if (!customerId) return;
      return await gqlClient.request(UpdateCustomerByIdQueryByWeb, {
        id: customerId.toString(),
        name: name,
        phone: phone,
        email: "",
        memo: "",
        fax: "",
        isVillain: false,
      });
    },
    {
      onSuccess: async (result) => {
        if (result) {
          queryClient.invalidateQueries(["customerList"]);
          alert("회원가입이 완료되었습니다.");
          router.push("/");
        }
      },
      onError: (error) => {
        console.log("error", error);
        alert("에러가 발생했습니다.");
      },
    }
  );

  const signup = () => {
    createCustomer();
  };

  const sendVerificationCode = async () => {
    console.log("sendVerificationCode", customerId);
    if (customerId !== 0) {
      const smsData = await useSmsSend({
        phoneNumber: phone,
        customerId: customerId,
      });
      if (smsData === "OK") {
        setCustomerId(customerId);
        setIsSendCode(true);
      }
    } else {
      signup();
    }
  };

  const verificationCode = async () => {
    const { data } = await axios.get<any>(`/api/customer?id=${customerId}`);

    console.log("인증번호: ", data.verification_code);
    if (data.verification_code === code) {
      setIsVertify(true);
    } else {
      alert("인증번호가 일치하지 않습니다.");
      setIsVertify(false);
    }
  };

  const updateCustomerInfo = () => {
    updateCustomer();
  };
  return (
    <div className="flex flex-col gap-4">
      {provider === "local" && (
        <>
          {/* <Input
            classNames={{
              label: "min-w-[7rem]",
              input: ["!ring-transparent"],
              mainWrapper: ["w-full"],
            }}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            labelPlacement="outside-left"
            variant="bordered"
            label="아이디"
          />
          <Input
            classNames={{
              label: "min-w-[7rem]",
              input: ["!ring-transparent"],
              mainWrapper: ["w-full"],
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            labelPlacement="outside-left"
            variant="bordered"
            label="비밀번호"
          /> */}
        </>
      )}
      <Input
        classNames={{
          label: "min-w-[7rem]",
          input: ["!ring-transparent"],
          mainWrapper: ["w-full"],
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        labelPlacement="outside-left"
        variant="bordered"
        label="이름"
      />
      <Input
        classNames={{
          label: "min-w-[7rem]",
          input: ["!ring-transparent"],
          mainWrapper: ["w-full"],
        }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        labelPlacement="outside-left"
        variant="bordered"
        label="휴대폰번호"
      />
      {isSendCode && !isVertify && (
        <>
          <Input
            classNames={{
              label: "min-w-[7rem]",
              input: ["!ring-transparent"],
              mainWrapper: ["w-full"],
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            labelPlacement="outside-left"
            variant="bordered"
            label="인증번호"
          />
          <Button
            isLoading={isLoading}
            onClick={verificationCode}
            color={"primary"}
          >
            인증번호 확인
          </Button>
        </>
      )}

      {/* 여기서 회원가입 눌러야 완전한 회원가입 인건지  */}
      {isVertify ? (
        <Button
          isLoading={isLoading}
          onClick={() => {
            updateCustomerInfo();
            // router.push("/");
          }}
          color={"primary"}
        >
          회원가입
        </Button>
      ) : (
        <Button
          isLoading={isLoading}
          onClick={sendVerificationCode}
          color={"primary"}
        >
          {isSendCode ? "인증번호 재발송" : "인증번호 발송"}
        </Button>
      )}
    </div>
  );
}
