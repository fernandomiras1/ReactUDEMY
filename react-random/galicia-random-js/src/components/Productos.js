import React, { Fragment, useEffect, useRef } from "react";
import { obetenerProductosAction } from "../actions/productoActions";
// import clienteAxios from "../config/axios";
import { useDispatch, useSelector } from "react-redux";
import Producto from "./Producto";
import { useDelay } from "../config/useDelay";
import { downloadQRCode, downloadMultipleQR } from "../utils/download-qr-code";

const Productos = () => {
  const dispatch = useDispatch();
  const { completed, stop, setStop } = useDelay(10);

  const timerRef = useRef(null);

  const getPromese = (counter) =>
    new Promise((resolve) => {
      console.log("counter", counter);
      if (counter <= 15) {
        resolve({ isValid: false });
      } else {
        resolve({ isValid: true });
      }
    });

  const getAPI = async (counter) => {
    const resu = await getPromese(counter);
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

  // obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  const testSimpleQR = () => {
    console.log("Descagar QR");
    const dataDownloadQR = [
      {
        name: "Sucursal San Justo - QR SJ 1",
        content:
          "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
      },
    ];
    downloadQRCode(dataDownloadQR[0].content, `${dataDownloadQR[0].name}`);
  };

  const testDobleQR = () => {
    console.log("Descagar QR");
    const dataDownloadQR = [
      {
        qrName: "Sucursal San Justo - QR SJ 1",
        qr: "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
      },
      {
        qrName: "Sucursal San Justo - QR SJ 2",
        qr: "iVBORw0KGgoAAAANSUhEUgAAAsUAAALFAQAAAAADsKO1AAAEF0lEQVR42u3dy44bIRCFYd6A939LltmRkdoN5xS47UiJFFG/FUWenvbnWaGmbpT+j16/CjIyMjIyMjIyMjIyMjIyMjIyMjLyfy23Ml7Xj68rtV///7xev7pu/rleX2/mzePjyMjIOeT55rrz0oYsn53s0NriICMjZ5Cb3KP4ffH68bpyrTx2Q/OvQEZGTiW3uS3SB5Xxq+0jDTIycmp5LDt1fjbsj2wH1JGRkbPKugO6r1w3v9acZQmaH/x+b4WMjHyQbGGQP//3VSwXGRn5JNlfIztjS5DEY0ceRyMq3+SOkZGRz5HbXI5e0dSx2Qkv3/jYLqnKtyAjIx8vy/5l3jbWpTvVO2KwuhzNiCsyMnIyeWixCOReoAy/FytN/u4jrsjIyOfKWnoaikPmZ6utSPEvqR0ZGTmRrJsaKT21avZQSKZpX42rICMjp5F1FzMSLjEeIjlf2yK1JfqKjIycQ57hU4mZzHCKt72sKZunzhdkZOQTZVt2JEgytW6p3nlDtcpVZGTkRLJXp9uGqNhzjjXTaQPdmwp2ZGTkM+Xu6drewyOK7YO2Gd7+VBmCjIx8pKydcfqgMnO4d0o3boI0wPKYO0ZGRj5MXks+1qIyS9zIxudD7hgZGflIWRrztfNFm2pD160OGYv9tsjIyGnkoMWull0F+7xSPWyLjIx8vNytpjTMBdLiMQ3GhnqzfYYXGRn5YNlr1+0JR/M4a0lq2Y0GQkZGziCX3XjSVtYkb4jBfph4jIyMfKosaZdZBKLbnLJMBJKyVS0pQUZGTiR364AbXbRhxqClbPruKChkZOQ08pq0tTY6X5HseLi2G0WIjIx8vBx8/Xjz09+qdehvRiUjIyPnkduy39GGuOoHsoQK9lCThoyMnEZ+23TfbBJyOK5aH2berUjIyMgHyhpidWTT+aJDgdaQLDIychq5h7E/xWOwocCsLgWr5ekESWRk5ANl3fVIE1xM4tQeMrw9HL7QOzIychbZT3zToxNiC612u/jX6chTZGTk8+XubGjYD0exNHu20QwvMjJyInntwV8a4uLwUm2y8wFByMjISWSNinQ9R9IzvDHMonul/v5MW2Rk5PNkPwVSx6RbnlfLRbyy/SniioyMfKrszyr2xFJ7qFe3m8MfhoyMnET2ExZC0WnYB9l65SsSMjJyInnpf4lT0H3sz9z7fOzQR0ZGPlX2xrdNE9xa3N58EFB77NBHRkY+UbY3rWhu96FDX2vXn09YQEZGPlBucQJh7Nb3ice6IYrhVmRk5JTympfRdrnuxzHEIerIyMgp5dh1q4HW3ZFwlqZBRkZOIneLh9hx9j47fbP+tBKKVJGRkTPIcdxxteuaoLFOmeVmZGTkLPJffyEjIyMjIyMjIyMjIyMjIyMjIyMjp5N/A7C8eKsv3GtDAAAAAElFTkSuQmCC",
      },
    ];
    downloadMultipleQR(dataDownloadQR);
  };

  return (
    <Fragment>
      <button
        onClick={testSimpleQR}
        type="button"
        className="btn btn-primary mr-2"
      >
        Simple QR download
      </button>

      <button
        onClick={testDobleQR}
        type="button"
        className="btn btn-primary mr-2"
      >
        Doble QR download
      </button>

      <h2 className="text-center my-5">Listado de Productos</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando...</p> : null}

      {!stop && !completed && (
        <p className="font-weight-bold alert alert-warning text-center mt-4">
          Cargando ....
        </p>
      )}

      {completed && (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error al cargar QR
        </p>
      )}
      {stop && (
        <p className="font-weight-bold alert alert-info text-center mt-4">
          Se completo correctamente
        </p>
      )}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((prod) => (
                <Producto key={prod.id} producto={prod} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
