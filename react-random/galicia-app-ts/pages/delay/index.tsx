import React, { Fragment, useEffect, useRef } from "react";
import { Loading, Card, Grid, Text, Link } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { useDelay } from "../../hooks/useDelay";
import { UICard } from "../../components/ui";

const DelayPage = () => {
  const { completed, stop, setStop } = useDelay(10);

  const timerRef: any = useRef(null);

  const getPromese = (counter: number) =>
    new Promise((resolve) => {
      console.log("counter", counter);
      if (counter <= 8) {
        resolve({ isValid: false });
      } else {
        resolve({ isValid: true });
      }
    });

  const getAPI = async (counter: number) => {
    const resu: any = await getPromese(counter);
    console.log("CALL API::", resu, counter);
    if (resu.isValid) {
      console.log("limpiar");
      clearInterval(timerRef.current);
      setStop(true);
    }
  };

  // Timer 1 seg Call API
  useEffect(() => {
    let counter = 0;
    timerRef.current = setInterval(() => {
      counter++;
      getAPI(counter);
    }, 1000);

    if (completed) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [completed, getAPI]);

  return (
    <Layout title="Delay Page">
      {!stop && !completed && <Loading>Loading</Loading>}

      {completed && (
        <UICard title="Error" message="Hubo un error al cargar QR" />
      )}
      {stop && <UICard title="Exito!!" message="Se completo correctamente" />}
    </Layout>
  );
};

export default DelayPage;
