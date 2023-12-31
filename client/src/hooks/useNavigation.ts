import { useNavigate } from "react-router-dom";

export function goPreviousPage() {
  const navigate = useNavigate();
  return navigate(-1);
}
