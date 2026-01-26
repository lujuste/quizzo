import {
  activeLoginAtom,
  customerAtom,
  loadingAtom,
} from "@/atoms/customerAtom.atoms";
import { AuthCache } from "@/services/authCache.services";
import type { User } from "@/services/register-user.services";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function useAuth() {
  const [customer, setCustomer] = useAtom(customerAtom);
  const [isLoading, setIsLoading] = useAtom(loadingAtom);
  const [isLogged, setIsLogged] = useAtom(activeLoginAtom);

  function updateCustomer(newCustomer: User) {
    setCustomer(newCustomer);
  }

  function updateLogged(login: boolean) {
    setIsLogged(login);
  }

  async function fetchToken() {
    const token = await AuthCache.getToken();
    console.log(token, "token?");
    setIsLogged(!!token);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchToken();
  }, []);

  return { customer, updateCustomer, isLoading, isLogged, updateLogged };
}
