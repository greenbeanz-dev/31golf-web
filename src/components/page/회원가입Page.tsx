import gqlClient from "@/gql/gqlClient";
import { CreateCustomerQueryByWeb } from "@/gql/query/customer/crud";
import { Button, Input } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import useLogin from "../../utils/login/useLogin";

export function 회원가입Page() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { login, isLogin, logOut, userProfile } = useLogin();

  const queryClient = useQueryClient();

  const router = useRouter();
  const { provider } = router.query;

  const { mutateAsync: createCustomer, isLoading } = useMutation(
    async () => {
      if (!userProfile.provider) return;
      return await gqlClient.request(CreateCustomerQueryByWeb, {
        userId: userId,
        password: password,
        name: name,
        phone: phone,
        email: "",
        memo: "",
        fax: "",
        isVillain: false,
        provider: provider === "local" ? null : userProfile.provider,
      });
    },
    {
      onSuccess: async (result) => {
        console.log({ result });
        queryClient.invalidateQueries(["customerList"]);
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/";
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
  return (
    <div className="flex flex-col gap-4">
      {provider === "local" && (
        <>
          <Input
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
          />
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
      <Button isLoading={isLoading} onClick={signup} color={"primary"}>
        회원가입
      </Button>
    </div>
  );
}
