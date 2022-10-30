import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
import { NoLazy } from "../01-lazyload/pages/NoLazy";

// Para que soporte Componentes sin Lazy
type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  // De esta forma soporta lazy Component y Componentes Normales
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      // Basicamente le estamos cambiando el nombre a los pedasos de codigos que hace webpack en la network
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
