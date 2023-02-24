import { Navbar, Text, Card, Radio } from "@nextui-org/react";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import Link from "next/link";
export const UINavbar = () => {
  const { asPath } = useRouter();

  const isActiveStyle: CSSProperties = {
    color: "#0070f3",
    textDecoration: "none",
  };

  const defaultStyle: CSSProperties = {
    color: "aliceblue",
    textDecoration: "none",
  };

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          REACT
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Link href="/">
          <a style={asPath === "/" ? isActiveStyle : defaultStyle}>Home</a>
        </Link>

        <Link href="/delay">
          <a style={asPath === "/delay" ? isActiveStyle : defaultStyle}>
            useDelay
          </a>
        </Link>

        <Link href="/download-qr">
          <a style={asPath === "/download-qr" ? isActiveStyle : defaultStyle}>
            Download QR
          </a>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
};
