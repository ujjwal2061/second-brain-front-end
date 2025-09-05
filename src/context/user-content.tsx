import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";
interface Props {
  children: React.ReactNode;
}

type User = {
  username: string;
  email: string;
};
interface UserContextType {
  user?: User | null;
  loading: boolean;
  error: string | null;
  logout: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export const UserContextProvider = createContext<UserContextType | null>(null);
export const ContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navagtion = useNavigate();
  // response interface

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setError("");
  };
  // Fetch user detalis
  useEffect(() => {
    const fetchuser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        navagtion("/");
        return;
      }
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/user/my-detalis`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // @ts-ignore
        const response = res.data.data;
        setUser(response);
      } catch (error: any) {
        if (error) {
          const errorMsg = error.response?.data?.message || "Something went wrong";
          toast.error(errorMsg);
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchuser();
  }, []);
  const values: UserContextType = {
    user,
    loading,
    setLoading,
    setError,
    setUser,
    error,
    logout,
  };
  return <UserContextProvider.Provider value={values}>{children}</UserContextProvider.Provider>;
};
