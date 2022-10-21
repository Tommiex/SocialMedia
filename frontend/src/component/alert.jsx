import { useContext } from "react";
import { UserContext } from "./gmailLogin";

function Alert() {
  const user = useContext(UserContext)
  return (
    <div>
      <alertContext.Provider value={{ alertProps }}>
        
      </alertContext.Provider>
    </div>
  );
}
export default Alert;
