import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function OtpCounter() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) {
          clearInterval(counterInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(counterInterval);
  }, []);

  return <Typography fontSize={12}>{counter}</Typography>;
}
